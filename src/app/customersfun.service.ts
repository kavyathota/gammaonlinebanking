import { Injectable } from '@angular/core';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersfunService {
obj:Customers[];
i:number=0;
add(name:string,accountno:string,acctype:string){
 this.obj.push(new Customers(name,accountno,acctype));
 
}
 getcustomers():Customers[]
{
  return this.obj;
}
  constructor() { 
    this.obj=[];
  }
}
