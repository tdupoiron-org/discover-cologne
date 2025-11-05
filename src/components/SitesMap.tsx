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

// Fix Leaflet's default icon paths for bundlers
// Using unpkg CDN as fallback since Vite doesn't always bundle marker images correctly
const iconUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH6AsZFgEXqzqCXwAAAeZJREFUWMPtl0tOw0AQRCvxgfgO7NlwAjgB4gTADdgAB0BwAuAEwCl8JI4AF+AE7NkDJ4AdJzZCPMGWRxPHn4lQJ7Wlld2u96lqt2ck/XvSLcC2pB1Jz5LqHx7qkrYa4gIz+zkhaVPSkaTZEFwVSbuSHiQ9S1oN0LUqabshTgNUz0i6j86TkLgnaSs6TwOQtCBpQ9JZVJ6T9BC1z0PQBVQ3Je1L+pZ0LulT0l70vhyVNwCpSzoLlP9K+ojOu9H5PwA1SY9R+1LSS/S+HoAtIUnTko6j8nZUXpT0Gp3fhyCpJOlB0pKkpaikJelK0lL0vBOCJE1J2pP0GJ23JD1F5fuSdiV9h6B9SeeSTiRdS7qJzneSLqLzXgjaknQlaUnScVS+jM7bIUiSFiXdS3qStCvpKSpfRud1Sbck3UnaSVG2KekmKm+EINH5Jno+j5rXJd1E5Y0Q1CO9RufTqHwlaS1F+aykx6h9PgRJ0rykY0lzkk4lrUTl5ajzJCA1Se9R+0bSd/T+FL0vBaBZSWuSXqP2K0nr0ftKCJqQ9B61P0Xl1ei8EoKknE6SLqP2ZXQ+GYIAzklakbQlaUPSTIryTdR5rZAP2I/az6LzTgiSciY5OXlJ+gnLyfcOebZU3gAAAABJRU5ErkJggg=='
const shadowUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH6AsZFgQXuUnr2wAAAjdJREFUWMPtmMuOgjAUhr+WsTxQ3gB3unX7BBp9A5+CN9A3cOvW7dqN+AZufIN2587tfTvQ0W4cWlvmIiQkJiSe5GeB9pSP/ycNFYA/Afr/9f8C5D8B+T8CmQMoAKQAFgBSADaA3ADQAGAB8AAUAFwAOQAbQA6gBJABWBgALACWAdACUAOwYQBIATQAagAugBxAZQBIADQAfAAVgMwAkAKoATQAcgB1A0ACYGsAcA0AJYC6AaAEkBsACgBVA0AGIAfQNADk1+91AGoDQI5PADkAZwjwTT5+qdcGgHwI8CuAHEA9BPgQQI7rAaxDAG4DcB0ALwNwfQkgxzhgJxOAXwBwOQQ4DOBrAC4vAVwOAXYDcH0p4OcQ4BCAywuB3wDwcgiQ43MAfB3A6yFA6/d1AC4vBXwbgK8v9f29OgBuLwV8H4DPLwVcngJwfwrA96cAXJ8CcH0KwPUpANenAFyfAnB9CsD1KQDXlwKu6wCuTwG4PgXg+lLA/S0A17cArk8BuL7Ec10HcH0p4NoA8PoSwPUpANenAK4vAX4fgM9vAdyfAnB/CcD9KQD3pwDcnwJwfwrA/SkA96cA3J8CcH8KwP0pAPenANyfAnB/CcD9KQD3pwDcnwJwfwnA/SkA96cA3J8CcH8KwP0pAI+nADyfAvB8CsDzKQDPlwK+D8Dzpf/zKQDPpwA8nwLwfArA8ykAz6cAPJ8C8HwKwPMpAM+nADyfAvB8CsDzKQDPpwA8nwLwfArA8ykAz6cAPJ8C8PwrAP/r/xfIfwDxK+j0hSF/AAAAAElFTkSuQmCC'

// Custom icon for unvisited sites (blue - default)
const defaultIcon = new Icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

// Custom icon for visited sites (green - using CSS filter)
const visitedIcon = new Icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'visited-marker'
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
