import { Component, OnInit } from '@angular/core';
import { StatementService } from '../statement.service';
import { Customers } from '../customers';
import { CustomersfunService } from '../customersfun.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  currentDate:any = new Date();
  tAccNo:string;
amount:number;
description:string="";
status:string="transfer unsuccessfull";
showt:boolean=true;
showstatus:boolean=false;
 obj:Customers[]; 
constructor(private service:StatementService,private service1:CustomersfunService) {
  this.obj=[];
 }
tfun(ptAccNo:string,pamount:number,description:string,date:any)
{
 // this.date=Date.now;
 this.obj=this.service1.getcustomers();
 for(let objs of this.obj ){
     if(objs.getCaccno()==ptAccNo && (objs.getCbalance()-10000)>pamount){
  this.service.add(date,description,pamount,0,5000);
  this.showt=false;
  this.showstatus=true;
  this.status="transfer successfull";
     }
}
}


  ngOnInit() {
  }

}
