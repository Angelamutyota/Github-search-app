export class Users {
    static result: any;
    constructor(public login: string, public bio: string, public avatar_url: string, public public_repos:number, public followers:number, public following:number, public created_at: Date){ }
}
