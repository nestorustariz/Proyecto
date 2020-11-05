import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms'
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-asignatura-register',
  templateUrl: './asignatura-register.component.html',
  styleUrls: ['./asignatura-register.component.css']
})
export class AsignaturaRegisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;
  asignatura:Asignatura;
  searchText = "";
  asignaturas:Asignatura[];
  constructor(private formBuilder:FormBuilder,private asignaturaService:AsignaturaService) { }

  ngOnInit() {
    this.buildForm();
    this.getAll();
  }

  private buildForm()
  {
    this.asignatura = new Asignatura();
    this.asignatura.codAsignatura = '';  
    this.asignatura.nombreAsignatura = '';
    this.registerForm = this.formBuilder.group({
      codAsignatura: [this.asignatura.codAsignatura, Validators.required],
      nombreAsignatura: [this.asignatura.nombreAsignatura,Validators.required]
    });
  }

  get control() { 
    return this.registerForm.controls;
  }
    

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  add(){
    this.asignatura = this.registerForm.value;
    this.asignaturaService.registrar(this.asignatura).subscribe(p => {
      if (p != null) {
        alert('Asignatura Creada');
        this.asignatura = p;
        this.onReset();
        this.getAll();
      }
    })
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getAll()
  {
    this.asignaturaService.consultar().subscribe(result => {
      this.asignaturas = result;
    });
  }
}
