/**
 * Calculate the distance between two coordinates using the Haversine formula
 * Returns distance in kilometers
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371 // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  
  return distance
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

/**
 * Calculate walking time in minutes based on distance in kilometers
 * Average walking speed is assumed to be 5 km/h
 */
export function calculateWalkingTime(distanceKm: number): number {
  const walkingSpeedKmPerHour = 5
  const timeInHours = distanceKm / walkingSpeedKmPerHour
  const timeInMinutes = Math.round(timeInHours * 60)
  return timeInMinutes
}

/**
 * Format walking time for display
 */
export function formatWalkingTime(minutes: number): string {
  if (minutes < 1) {
    return '< 1 min walk'
  }
  
  if (minutes < 60) {
    return `${minutes} min walk`
  }
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  
  if (remainingMinutes === 0) {
    return `${hours} hr walk`
  }
  
  return `${hours} hr ${remainingMinutes} min walk`
}
