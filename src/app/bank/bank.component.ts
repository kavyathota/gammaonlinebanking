import { Component, OnInit } from '@angular/core';
import { CustomersfunService } from '../customersfun.service';
import { Customers } from '../customers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  aName:string="kavya";
  customers:Customers[];
  x: number;
 deposit1:number;
  constructor( private service:CustomersfunService,private router:Router) {
this.get();
console.log(this.customers);
   }

get(){
   this.customers=this.service.getcustomers();
 }
 modify(customer:Customers){
   this.service.SetIndex(customer);
  this.router.navigate(["/main/logged/bank/modify"]);
 }
 delete(customer:Customers)
 {
   this.x=this.customers.indexOf(customer);
   this.customers.splice(this.x,1);
  this.router.navigate(["/main/logged/bank/delete"]);
 }
 deposit(customer:Customers)
 {
  this.service.SetIndex(customer);
  //  this.x=this.customers.SetIndex(customer);
  //  this.deposit1=this.customers[this.x].getCbalance();
  //  this.customers[this.x].setCbalance(this.deposit1);
  this.router.navigate(["/main/logged/bank/deposit"]);
 }
 ngOnInit() {
  this.get();
  console.log(this.customers);
  }

}
