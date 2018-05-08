import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { HeaderComponent } from './header/header.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { StorageService } from "./services/storage.service";
import { ReactiveFormsModule } from "@angular/forms";
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    HeaderComponent,
    CarrinhoComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
