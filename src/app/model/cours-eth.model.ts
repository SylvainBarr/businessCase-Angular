export interface CoursEthHttp{
  price: number
  timestamp: number
}

export interface CoursEth{
  price: number
  timestamp: number
}

export namespace CoursEth{
  export function fromCoursEthHttpToCoursEth(coursEthHttp: CoursEthHttp): CoursEth{
    return {
      price: coursEthHttp.price,
      timestamp: coursEthHttp.timestamp
    }
  }
}
