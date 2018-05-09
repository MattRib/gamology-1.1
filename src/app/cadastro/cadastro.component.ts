import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cep : string;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      logradouro: [''],
      complemento: [''],
      bairro: [''],
      localidade: [''],
      uf: ['']

    });
  }

  ngOnInit() {
  }

  enviar() {
    console.log(this.formGroup.value);
  }

  consultaCep() {
    console.log(this.cep);
  }
}
