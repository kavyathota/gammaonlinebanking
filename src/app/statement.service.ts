import { Injectable } from '@angular/core';
import { Statements } from './statements';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  obj:Statements[];
  x: number;
add(date:Date,description:string,withdraw:number,deposit:number,balance:number){
 this.obj.push(new Statements(date,description,withdraw,deposit,balance));
 
}
 getstatements():Statements[]
{
  return this.obj;
}
  constructor() { 
    this.obj=[];
  }


}
