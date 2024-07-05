import { useCallback, useEffect, useState } from 'react'

import type { IpLocation, Location } from '../types/common.ts'

export const useIpBasedLocation = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [location, setLocation] = useState<Location>({
    lat: 0,
    lon: 0,
  })

  const fetchLocation = useCallback(async () => {
    try {
      const response = await fetch('https://ipapi.co/json/')
      const data = (await response.json()) as IpLocation

      setLocation({
        lat: data.latitude,
        lon: data.longitude,
      })
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchLocation()
  }, [fetchLocation])

  return { loading, error, location }
}
