
export class Buyer {
  constructor(
    public identifier: number,
    public name: string,
    public email: string,
    public isVerified: boolean,
    public creationDate: object,
    public lastChange: object,
  ) {

  }
}
