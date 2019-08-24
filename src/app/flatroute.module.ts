import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {RouterModule,Routes, Router} from '@angular/router'
import { CustomerComponent } from './customer/customer.component';
import { TransferComponent } from './transfer/transfer.component';
import { StatementComponent } from './statement/statement.component';
import { createContentChild } from '@angular/compiler/src/core';
import { UnloggedComponent } from './unlogged/unlogged.component';
import { HomeComponent } from './home/home.component';
import { LoggedComponent } from './logged/logged.component';
import { LoginComponent } from './login/login.component';
import { BankComponent } from './bank/bank.component';
import { RegisterComponent } from './register/register.component';
import { ModifyComponent } from './modify/modify.component';
import { DeleteComponent } from './delete/delete.component';

export const myroute:Routes=[
  {path:"",redirectTo:"main/unlogged/home",pathMatch:'full'},
  {path:"main",component:MainComponent,children :[
    {path:"unlogged", component:UnloggedComponent ,children:[
      {path:"home",component:HomeComponent},
      {path:"login",component:LoginComponent}
    ]},
{path:"logged" ,component:LoggedComponent ,children:[
  {path:"customer",component:CustomerComponent,children:[ 
    {path:"transfer",component:TransferComponent},
  {path:"statement",component:StatementComponent}]},
  {path:"bank",component:BankComponent,children:[ 
    {path:"register",component:RegisterComponent},
  {path:"modify",component:ModifyComponent},
  {path:"delete",component:DeleteComponent}]}
]}]}
 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myroute)
  ],
  exports:[
    RouterModule
  ]
})
export class FlatrouteModule { }
