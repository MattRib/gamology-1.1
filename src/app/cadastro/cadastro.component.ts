import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      nome : ['',[Validators.required, Validators.minLength(3)]],
      endereco : ['',[Validators.required, Validators.minLength(5)]],
      email : ['',[Validators.required, Validators.email]],
      senha : ['',[Validators.required, Validators.minLength(6),Validators.maxLength(10)]],
    });
  }

  ngOnInit() {
  }

  enviar(){
    console.log(this.formGroup.value);
  }
}
