export class AuthToken {
  public token_type = 'Bearer';
  constructor(
    public expires_in: number,
    public access_token: string,
    public refresh_token: string
  ) {

  }
}
