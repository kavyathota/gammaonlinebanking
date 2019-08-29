export class Customers {

    cName:string;
cAccNum:string;
cBalance:number;
public cAcctype:number;

constructor(name:string,accno:string,acctype:number){
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
  public setCbalance (value: number) {
    this.cBalance = value;
  }
}
