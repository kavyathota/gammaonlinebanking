import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
tAccNo:string;
amount:number;
status:string="transfer successfull";
showt:boolean=true;
showstatus:boolean=false;
tfun(ptAccNo:string,pamount:number)
{
  this.showt=false;
  this.showstatus=true;
}
  constructor() { }

  ngOnInit() {
  }

}
