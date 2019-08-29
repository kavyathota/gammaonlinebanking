import { Component, OnInit } from '@angular/core';
import { CustomersfunService } from '../customersfun.service';
import { Customers } from '../customers';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 
  cName:string;
  cAccNum:string;
  cBalance:number;
obj:Customers[];
user:User;
  constructor(private service:CustomersfunService,service1:UsersService) { 
this.obj=service.getcustomers();
this.user=service1.getuser();
for(let objs of (this.obj)){
  if(objs.cName==this.user.getusername())
  { 
     this.cName=objs.cName;
     this.cAccNum=objs.cAccNum;
     this.cBalance=objs.cBalance;
  }
  }
  }


  ngOnInit() {
  }

}
