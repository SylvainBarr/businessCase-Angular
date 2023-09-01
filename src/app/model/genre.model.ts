import {map} from "rxjs";

export interface GenreHttp{
  id: number
  name: string
  groups: {
    id: number
    name: string
    slug: string
  }[]
  slug: string
}

export interface Genre{
  id: number
  name: string
  groups: {
    id: number
    name: string
    slug: string
  }[]
  slug: string
}

export namespace Genre{
  export function fromGenreHttpToGenre(genreHttp: GenreHttp): Genre{
    return {
      id: genreHttp.id,
      name: genreHttp.name,
      groups: genreHttp.groups.map(groupHttp => groupHttp),
      slug: genreHttp.slug
    }
  }
}
