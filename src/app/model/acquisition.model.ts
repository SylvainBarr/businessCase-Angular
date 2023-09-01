export interface AcquisitionHttp{
  value: number
  isSold: boolean
  user: {
    id: number
    profilePicture: string
    nickname: string
  }
  nft : {
    id: number
    name: string
    image: string
    identificationToken: string
    slug: string
  }
}

export interface Acquisition{
  value: number
  isSold: boolean
  user: {
    id: number
    profilePicture: string
    nickname: string
  }
  nft : {
    id: number
    name: string
    image: string
    identificationToken: string
    slug: string
  }
}

export namespace Acquisition{
  export function fromAcquisitionHttpToAcquisition(acquisitionHttp: AcquisitionHttp): Acquisition {
    return {
      value: acquisitionHttp.value,
      isSold: acquisitionHttp.isSold,
      user: {
        id: acquisitionHttp.user.id,
        profilePicture: acquisitionHttp.user.profilePicture,
        nickname: acquisitionHttp.user.nickname
      },
      nft : {
        id: acquisitionHttp.nft.id,
        name: acquisitionHttp.nft.name,
        image: acquisitionHttp.nft.image,
        identificationToken: acquisitionHttp.nft.identificationToken,
        slug: acquisitionHttp.nft.slug
      }
    }
  }
}
