export interface UserHttp{
  id: number
  email: string
  createdAt: Date
  profilePicture: string
  nickname: string
  birthDate: Date
  address: {
    id: number
    firstLine: string
    secondLine: string
    city: {
      name:string
      postalCode: string
    }
  }
  admin: boolean
}

export interface User{
  id: number
  email: string
  createdAt: Date
  profilePicture: string
  nickname: string
  birthDate: Date
  address: {
    id: number
    firstLine: string
    secondLine: string
    city: {
      name:string
      postalCode: string
    }
  }
  admin: boolean
}

export namespace User{
  export function fromUserHttpToUser(userHttp: UserHttp): User{
    return {
      id: userHttp.id,
      email: userHttp.email,
      createdAt: userHttp.createdAt,
      profilePicture: userHttp.profilePicture,
      nickname: userHttp.nickname,
      birthDate: userHttp.birthDate,
      address: {
        id: userHttp.address.id,
        firstLine: userHttp.address.firstLine,
        secondLine: userHttp.address.secondLine,
        city: {
          name: userHttp.address.city.name,
          postalCode: userHttp.address.city.postalCode
        }
      },
      admin: userHttp.admin
    }
  }
}
