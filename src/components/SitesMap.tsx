import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Icon, LatLngBounds } from 'leaflet'
import { Site } from '@/types/site'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, Star } from '@phosphor-icons/react'
import 'leaflet/dist/leaflet.css'

interface SitesMapProps {
  sites: Site[]
  visitedSites: string[]
  onSiteClick?: (siteId: string) => void
}

// Custom icon for unvisited sites
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

// Custom icon for visited sites (green marker)
const visitedIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

// Component to fit map bounds to all markers
function FitBounds({ sites }: { sites: Site[] }) {
  const map = useMap()

  useEffect(() => {
    if (sites.length > 0) {
      const bounds = new LatLngBounds(
        sites.map(site => [site.latitude, site.longitude])
      )
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [map, sites])

  return null
}

export function SitesMap({ sites, visitedSites, onSiteClick }: SitesMapProps) {
  const getCrowdBadgeVariant = (level: Site['crowdLevel']) => {
    switch (level) {
      case 'high':
        return 'destructive'
      case 'medium':
        return 'secondary'
      case 'low':
        return 'outline'
    }
  }

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden border border-border shadow-lg">
      <MapContainer
        center={[37.3886, -5.9953]}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds sites={sites} />
        {sites.map((site) => {
          const isVisited = visitedSites.includes(site.id)
          return (
            <Marker
              key={site.id}
              position={[site.latitude, site.longitude]}
              icon={isVisited ? visitedIcon : defaultIcon}
              eventHandlers={{
                click: () => onSiteClick?.(site.id)
              }}
            >
              <Popup>
                <div className="min-w-[200px] p-2">
                  <h3 className="font-semibold text-base mb-1">{site.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    {site.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <Badge variant={getCrowdBadgeVariant(site.crowdLevel)} className="text-xs">
                      <Users weight="fill" className="w-3 h-3 mr-1" />
                      {site.crowdLevel}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Star weight="fill" className="w-3 h-3 mr-1 text-accent" />
                      {site.rating}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock weight="bold" className="w-3 h-3" />
                    <span>{site.duration}</span>
                  </div>
                  {isVisited && (
                    <div className="mt-2 text-xs text-primary font-medium">
                      ✓ Visited
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}
