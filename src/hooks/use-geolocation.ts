import { useState, useEffect } from 'react'

export interface GeolocationState {
  latitude: number | null
  longitude: number | null
  error: string | null
  loading: boolean
  permissionStatus: 'prompt' | 'granted' | 'denied' | null
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: false,
    permissionStatus: null,
  })

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: 'Geolocation is not supported by your browser',
        loading: false,
      }))
      return
    }

    setState(prev => ({ ...prev, loading: true, error: null }))

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          loading: false,
          permissionStatus: 'granted',
        })
      },
      (error) => {
        let errorMessage = 'Unable to retrieve your location'
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location permissions in your browser.'
            setState(prev => ({
              ...prev,
              error: errorMessage,
              loading: false,
              permissionStatus: 'denied',
            }))
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.'
            setState(prev => ({
              ...prev,
              error: errorMessage,
              loading: false,
            }))
            break
          case error.TIMEOUT:
            errorMessage = 'The request to get your location timed out.'
            setState(prev => ({
              ...prev,
              error: errorMessage,
              loading: false,
            }))
            break
          default:
            setState(prev => ({
              ...prev,
              error: errorMessage,
              loading: false,
            }))
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }

  return {
    ...state,
    requestLocation,
  }
}
