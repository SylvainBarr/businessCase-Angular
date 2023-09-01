export interface AddressHttp{
  id: number
  firstLine: string
  secondLine: string
  city:{
    name: string
    postalCode: string
  }
}

export interface Address{
  id: number
  firstLine: string
  secondLine: string
  city:{
    name: string
    postalCode: string
  }
}

export namespace Address{
  export function fromAddressHttpToAddress(addressHttp: AddressHttp): Address{
    return {
      id: addressHttp.id,
      firstLine: addressHttp.firstLine,
      secondLine: addressHttp.secondLine,
      city:{
        name: addressHttp.city.name,
        postalCode: addressHttp.city.postalCode
      }
    }
  }
}
