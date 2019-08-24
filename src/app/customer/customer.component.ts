import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
cName:string="kavya";
cAccNum:string="1289362896";
cBalance:number=10000;
showt:boolean=false;
showd:boolean=false;
  constructor() { }
transfer()
{
  this.showt=true;
  this.showd=false;
}
display()
{
  this.showd=true;
  this.showt=false;
}

  ngOnInit() {
  }

}
