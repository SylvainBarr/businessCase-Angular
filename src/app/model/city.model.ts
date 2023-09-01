export interface CityHttp{
  id: number
  name: string
  postalCode: string
}

export interface City{
  id: number
  name: string
  postalCode: string
}

export namespace City{
  export function fromCityHttpToCity(cityHttp: CityHttp): City{
    return {
      id: cityHttp.id,
      name: cityHttp.name,
      postalCode: cityHttp.postalCode
    }
  }
}
