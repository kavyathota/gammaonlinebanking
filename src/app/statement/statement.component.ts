import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
date:Date=new Date("2019-07-07");
description:string="withdrawing";
withdraw:number=1000;
deposit:number=0;
balance:number=6000;
show:boolean=false;
  constructor() { 
    
  }
  search(fdate:Date,tdate:Date)
  {
this.show=true;
  }

  ngOnInit() {
  }

}
