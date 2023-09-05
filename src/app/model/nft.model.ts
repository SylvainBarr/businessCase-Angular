export interface NftHttp {
  id: number
  name: string
  image: string
  identificationToken: string
  groupe: {
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
  groupe: {
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
        id: nftHttp.groupe.id,
        name: nftHttp.groupe.name,
        genre: {
          id: nftHttp.groupe.genre.id,
          name: nftHttp.groupe.genre.name,
          slug: nftHttp.groupe.genre.slug
        },
        slug: nftHttp.groupe.slug
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

