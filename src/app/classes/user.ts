export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public admin: boolean,
        public created_at: object,
        public updated_at: object
        // avatar: string,
        // joined: object
    ) {

    }
}
