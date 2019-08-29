export class User {
    username:string;
    password:string;
    constructor(username:string,password:string)
    {
        this.username=username;
        this.password=password;
    }
    getusername():string{
        return this.username;
    }
    setusername(username:string){
        this.username=username;
    }
    getpassword():string{
        return this.password;
    }
    setpassword(password:string){
        this.password=password;
    }
}
