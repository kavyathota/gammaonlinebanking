import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status:string;
  showlogin:boolean=false;

  constructor(private router:Router) { }
  login(pusername:string,pPassword:string)
  {
    
    if(pusername=="kavya" && pPassword=="root"){
    this.status = "Logged in successfully";
    this.router.navigate(["/main/logged/customer"]);
   
    }
    else if(pusername=="admin" && pPassword=="root"){
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
