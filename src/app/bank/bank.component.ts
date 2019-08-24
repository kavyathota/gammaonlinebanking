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
 
  constructor( private service:CustomersfunService,private router:Router) {
this.get();
console.log(this.customers);
   }

get(){
   this.customers=this.service.getcustomers();
 }
 modify(){
  this.router.navigate(["/main/logged/bank/modify"]);
 }
 delete()
 {
  this.router.navigate(["/main/logged/bank/delete"]);
 }
 ngOnInit() {
  this.get();
  console.log(this.customers);
  }

}
