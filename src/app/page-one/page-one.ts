import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-page-one',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './page-one.html',
  styleUrl: './page-one.scss'
})
export class PageOne {
  fullname!: string;
  age!: number;
  location!: string;
  isStudent!: boolean;
  currentYear: number = new Date().getFullYear();
  anoNasc: number;
  showModal: boolean

  studentForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    isStudent: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    if(this.studentForm.invalid) return;

    this.anoNasc = this.studentForm.value.age
      ? this.currentYear - Number(this.studentForm.value.age)
      : 0;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
