import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UsersService } from '../users.service';
import { User } from '../user';
import { CustomersfunService } from '../customersfun.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status:string;
  showlogin:boolean=false;
  obj1:User[];
  constructor(private router:Router,private service:UsersService) { 
    this.obj1=[];
    
  }
  login(pusername:string,pPassword:string)
  {
  
    this.obj1=this.service.getusers();
  for(let objs of this.obj1){
    if(pusername==objs.getusername() && pPassword=="root"){
    this.status = "Logged in successfully";
    this.router.navigate(["/main/logged/customer"]);
    this.service.setuser(objs.getusername(),"root");
    }
  }

  if(pusername=="admin" && pPassword=="root"){
    this.status = "Logged in successfully";
    this.router.navigate(["/main/logged/bank"]);
   
    }
    else
    {
      this.status="please enter a valid data";
    }
  }

  ngOnInit() {
  }

}
