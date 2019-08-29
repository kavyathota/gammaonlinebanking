import { Component, OnInit } from '@angular/core';
import { Statements } from '../statements';

import { StatementService } from '../statement.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
obj:Statements[];
obj1:Statements[];
todate:any = new Date();
fromdate:any = new Date();
show:boolean=false;
i:number=0;
  constructor(private service:StatementService,private datePipe: DatePipe) { 
    this.obj=service.getstatements();
    this.obj1=[];
  }
  transformDate(date:Date):any {
    return this.datePipe.transform(date, 'yyyy-MM-dd'); //whatever format you need. 
  }
  search()
  {
    for(let objs of (this.obj)){
  if(this.transformDate(objs.getdate())<this.todate && this.transformDate(objs.getdate())<this.todate) 
     this.obj1.push(objs);

  }
  this.show=true;
  }

  ngOnInit() {
  }

}
