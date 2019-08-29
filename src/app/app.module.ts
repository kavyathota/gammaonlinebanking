import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FlatrouteModule } from './flatroute.module';
import { CustomerComponent } from './customer/customer.component';
import { TransferComponent } from './transfer/transfer.component';
import { StatementComponent } from './statement/statement.component';
import { UnloggedComponent } from './unlogged/unlogged.component';
import { LoggedComponent } from './logged/logged.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankComponent } from './bank/bank.component';
import { RegisterComponent } from './register/register.component';
import { ModifyComponent } from './modify/modify.component';
import { DeleteComponent } from './delete/delete.component';
import { DatePipe } from '@angular/common';
import { DepositComponent } from './deposit/deposit.component';
import { AddaccountComponent } from './addaccount/addaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CustomerComponent,
    TransferComponent,
    StatementComponent,
    UnloggedComponent,
    LoggedComponent,
    HomeComponent,
    LoginComponent,
    BankComponent,
    RegisterComponent,
    ModifyComponent,
    DeleteComponent,
    DepositComponent,
    AddaccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlatrouteModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
