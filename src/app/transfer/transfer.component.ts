import { Component, OnInit } from '@angular/core';
import { StatementService } from '../statement.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  currentDate = new Date();
  tAccNo:string;
amount:number;
description:string;
status:string="transfer successfull";
showt:boolean=true;
showstatus:boolean=false;
  
constructor(private service:StatementService) { }
tfun(ptAccNo:string,pamount:number,description:string,date:Date)
{
 // this.date=Date.now;
  this.service.add(date,description,pamount,0,5000);
  this.showt=false;
  this.showstatus=true;
  console.log(date);
}


  ngOnInit() {
  }

}
