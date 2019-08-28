export class Statements {
date:Date;
description:string;
withdraw:number;
deposit:number;
balance:number;
constructor(date:Date,description:string,withdraw:number,deposit:number,balance:number)
{
    this.date=date;
    this.description=description;
    this.withdraw=withdraw;
    this.deposit=deposit;
    this.balance=balance;
}
public getdate ():Date {
    return this.date;
  }
  public setdate (value: Date) {
    this.date = value;
  }
  public  getdescription ():string {
    return this.description;
  }
  public setdescription (value: string) {
    this.description = value;
  }
  public getbalance():number {
    return this.balance;
  }
  public setbalance (value: number) {
    this.balance = value;
  }
  public getwithdraw():number {
    return this.withdraw;
  }
  public setwithdraw (value: number) {
    this.withdraw = value;
  }
  public getdeposit():number {
    return this.deposit;
  }
  public setdeposit (value: number) {
    this.deposit = value;
  }
}
