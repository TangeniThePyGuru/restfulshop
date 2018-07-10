import {Link} from './link';

export class Buyer {
  public identifier: number;
  public links: [Link];
  constructor(
    public name: string,
    public email: string,
    public isVerified: boolean,
    public creationDate: object,
    public lastChange: object,
  ) {

  }
}
