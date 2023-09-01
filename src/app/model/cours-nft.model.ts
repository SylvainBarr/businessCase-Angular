export interface CoursNftHttp{
  createdAt: Date
  value: number
  nft: {
    id: number
    name: string
    image: string
    identificationToken: string
    slug: string
  }
}

export interface CoursNft{
  createdAt: Date
  value: number
  nft: {
    id: number
    name: string
    image: string
    identificationToken: string
    slug: string
  }
}

export namespace CourstNft{
  export function fromCoursNftHttpToCoursNft(coursNftHttp: CoursNftHttp): CoursNft{
    return {
      createdAt: coursNftHttp.createdAt,
      value: coursNftHttp.value,
      nft: {
        id: coursNftHttp.nft.id,
        name: coursNftHttp.nft.name,
        image: coursNftHttp.nft.image,
        identificationToken: coursNftHttp.nft.identificationToken,
        slug: coursNftHttp.nft.slug
      }
    }
  }
}
