import { Component, OnInit } from '@angular/core';
import { Statements } from '../statements';

import { StatementService } from '../statement.service';


@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
obj:Statements[];
obj1:Statements[];
todate:Date;
fromdate:Date;
show:boolean=false;
i:number=0;
  constructor(private service:StatementService) { 
    this.obj=service.getstatements();
  }
 
  search()
  {
    for(let objs of (this.obj)){
    console.log(objs);
    console.log(this.todate.getDate());
    //console.log(fdate);
  //   if(objs.getdate().getFullYear()<this.todate.getFullYear() && objs.getdate().getFullYear()>this.fromdate.getFullYear())
  //   {
  //     if(objs.getdate().getMonth()<this.todate.getMonth() && objs.getdate().getMonth()>this.fromdate.getMonth())
  //     {
  //       if(objs.getdate().getDate()<this.todate.getDate() && objs.getdate().getDate()>this.fromdate.getDate())
  //     console.log(objs.getdate());
  //     this.obj1.push(objs);
  //     }
  //   }
  }
  
this.show=true;
  }

  ngOnInit() {
  }

}
