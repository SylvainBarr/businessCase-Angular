export interface NftHttp {
  id: number
  name: string
  image: string
  identificationToken: string
  group: {
    id: number
    name: string
    genre: {
      id: number
      name: string
      slug: string
    }
    slug: string
  }
  slug: string
}

export interface NftHttpExtended extends NftHttp {
  id: number
  name: string
  image: string
  dateDrop: string
  anneeAlbum: number
  identificationToken: string
  acquisitions: {
    value: number
    isSold: boolean
    user: {
      nickname: string
      id: number
    }
  }
  group: {
    id: number
    name: string
    genre: {
      id: number
      name: string
      slug: string
    }
    slug: string
  }
  slug: string
}

export interface Nft {
  id: number
  name: string
  image: string
  identificationToken: string
  group: {
    id: number
    name: string
    genre: {
      id: number
      name: string
      slug: string
    }
    slug: string
  }
  slug: string
}

export interface NftExtended extends Nft {
  id: number
  name: string
  image: string
  dateDrop: Date
  anneeAlbum: number
  identificationToken: string
  acquisitions: {
    value: number
    isSold: boolean
    user: {
      nickname: string
      id: number
    }
  }
  group: {
    id: number
    name: string
    genre: {
      id: number
      name: string
      slug: string
    }
    slug: string
  }
  slug: string
}


export namespace Nft {

  export function fromNftHttpToNft(nftHttp: NftHttp): Nft {
    return {
      id: nftHttp.id,
      name: nftHttp.name,
      image: nftHttp.image,
      identificationToken: nftHttp.identificationToken,
      group: {
        id: nftHttp.group.id,
        name: nftHttp.group.name,
        genre: {
          id: nftHttp.group.genre.id,
          name: nftHttp.group.genre.name,
          slug: nftHttp.group.genre.slug
        },
        slug: nftHttp.group.slug
      },
      slug: nftHttp.slug
    }
  }

  export function fromNftExtendedHttpToNftExtended(nftHttpExtended: NftHttpExtended): NftExtended {
    return {
      ...Nft.fromNftHttpToNft(nftHttpExtended),
      dateDrop: new Date(nftHttpExtended.dateDrop),
      anneeAlbum: nftHttpExtended.anneeAlbum,
      acquisitions: nftHttpExtended.acquisitions,
    }
  }

}

