export interface GroupHttp{
  id: number
  name: string
  nfts: {
    id: number
    name: string
    image: string
    identificationToken: string
    slug: string
  }[]
  genre:{
    id: number
    name: string
    slug: string
  }
  slug: string
}

export interface Group{
  id: number
  name: string
  nfts: {
    id: number
    name: string
    image: string
    identificationToken: string
    slug: string
  }[]
  genre:{
    id: number
    name: string
    slug: string
  }
  slug: string
}

export namespace Group{
  export function fromGroupHttpToGroup(groupHttp: GroupHttp): Group{
    return {
      id: groupHttp.id,
      name: groupHttp.name,
      nfts: groupHttp.nfts,
      genre:{
        id: groupHttp.genre.id,
        name: groupHttp.genre.name,
        slug: groupHttp.genre.slug
      },
      slug: groupHttp.slug
    }
  }
}
