import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';
import { CustomersfunService } from '../customersfun.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  x:any;
  customers:Customers[];
  deposit1:number=0;
  show:boolean=false;
  show1:boolean=false;
  show2:boolean=false;
  constructor(service:CustomersfunService,private router:Router) { 
    this.x=service.getIndex();
    this.customers=service.getcustomers();
  }
  deposit(amount:number)
  {
   this.deposit1=this.customers[this.x].getCbalance();
   this.deposit1=(this.deposit1+amount);
   this.customers[this.x].setCbalance(this.deposit1);
   
  this.router.navigate(["/main/logged/bank/deposit"]);
  this.show2=false;
this.show1=false;
    this.show=false;
  }
  saving(){
this.show=true;
this.show2=true;
this.show1=false;
  }
  current()
  {
this.show=true;
this.show1=true;
this.show2=false;
  }
  ngOnInit() {
  }

}
