export class Customers {
  [x: string]: string;
    cName:string;
cAccNum:string;
cBalance:Number;
cAcctype:string;
constructor(name:string,accno:string,acctype:string){
this.cName=name;
this.cAccNum=accno;
this.cBalance=0;
this.cAcctype=acctype;
}
public getCname ():string {
    return this.cName;
  }
  public setCname (value: string) {
    this.cName = value;
  }
  public  getCaccno ():string {
    return this.cAccNum;
  }
  public setCaccno (value: string) {
    this.cAccNum = value;
  }
  public getCbalance():number {
    return this.cBalance;
  }
  public setCbalance (value: Number) {
    this.cBalance = value;
  }
}
