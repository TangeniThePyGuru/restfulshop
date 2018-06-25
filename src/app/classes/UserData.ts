import {User} from './user';
import {AuthToken} from './auth-token';

export class UserData {
  constructor(
    public token: AuthToken,
    public user: User
  ) {

  }
}
