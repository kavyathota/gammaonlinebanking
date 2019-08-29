import { Injectable } from '@angular/core';
import { User } from './user';
import { CustomersfunService } from './customersfun.service';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
user:User[];
obj:Customers[];
  user1: User;
  constructor(private service:CustomersfunService) {
    this.user=[];
    }
  
   getusers():User[]
   {
    
    this.obj=this.service.getcustomers();
        for(let objs of this.obj){
          this.user.push(new User(objs.getCname(),"root"));
          console.log(this.user);
        }
     return this.user;
   
   }
   setuser(username:string,password:string){
 for(let objs of this.user){
    if(objs.getusername()==username){ 
    this.user1=new User(username,password);
      }

    }

   }
   getuser():User{
   return this.user1;
   }
}
