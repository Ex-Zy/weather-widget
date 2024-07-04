export interface IpLocation {
  ip: string
  network: string
  version: string
  city: string
  region: string
  region_code: string
  country: string
  country_name: string
  country_code: string
  country_code_iso3: string
  country_capital: string
  country_tld: string
  continent_code: string
  in_eu: boolean
  postal: string
  latitude: number
  longitude: number
  timezone: string
  utc_offset: string
  country_calling_code: string
  currency: string
  currency_name: string
  languages: string
  country_area: number
  country_population: number
  asn: string
  org: string
}

export interface Location {
  lat: number
  lon: number
}

export interface ErrorResponse {
  error: Error
}
export interface Error {
  code: number
  message: string
}

export interface WeatherResponse {
  location: WeatherLocation
  current: WeatherCurrent
  forecast: Forecast
}
export interface WeatherLocation {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}
export interface WeatherCurrent {
  last_updated: string
  temp_c: number
  is_day: number
  condition: Condition
  precip_mm: number
  humidity: number
  feelslike_c: number
  uv: number
  windchill_c: number
}
export interface Condition {
  text: string
  icon: string
}
export interface Forecast {
  forecastday?: ForecastDay[] | null
}
export interface ForecastDay {
  date: string
  day: Day
}
export interface Day {
  maxtemp_c: number
  mintemp_c: number
  condition: Condition
}
