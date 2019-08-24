import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';
import { CustomersfunService } from '../customersfun.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  


 
  constructor(private router:Router, private service:CustomersfunService) { }
  register(name:string,accountno:string,acctype:string)
  {
    this.service.add(name,accountno,acctype);
    this.router.navigate(["/main/logged/bank"]);
  }
  ngOnInit() {
  }

}
