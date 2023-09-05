export interface CoursEthHttp{
  prices: number[][]
}

export interface CoursEth{
  prices: number[][]
}

export namespace CoursEth{
  export function fromCoursEthHttpToCoursEth(coursEthHttp: CoursEthHttp): CoursEth{
    return {
      prices: coursEthHttp.prices
    }
  }
}
