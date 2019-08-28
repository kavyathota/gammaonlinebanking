import { Component, OnInit } from '@angular/core';
import { CustomersfunService } from '../customersfun.service';
import { Customers } from '../customers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
x:any;
customers:Customers[];
  constructor(service:CustomersfunService,private router:Router) {
    this.x=service.getIndex();
    this.customers=service.getcustomers();
   }
   registerupdate(cname:string,acc:string,accountype:any)
{
this.customers[this.x].acc=acc;
this.customers[this.x].cName=cname;
this.customers[this.x].accountype=accountype;
this.router.navigate(["/main/logged/bank"]);
}
  ngOnInit() {
  }

}
