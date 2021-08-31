import { Component, Output, EventEmitter } from '@angular/core';
import {   Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { User } from '../User';



@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.scss']
})
export class FormfieldsComponent {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();
  contactForm;
 
  firstname1: string;
  lastname1: string;
  email1: string;
  phone1: string;
  date1: string;
  address1: string;





  constructor(private formBuilder: FormBuilder) {
    
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-z A-Z]+$")]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-z A-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      date: [''],
      phone: ['']    
    });


  }
 


  get date() {
    return this.contactForm.get('date');
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get address() {
    return this.contactForm.get('address')
  }

  get phone() {
    return this.contactForm.get('phone')
  }


  
  onSubmit() {
    const newUser = {
      firstName: this.firstname1,
      lastName: this.lastname1,
      phoneNumber: this.phone1,
      email: this.email1,
      date:  this.date1,
      address: this.address1
    }

    this.onAddUser.emit(newUser);
    // this.firstname1 = '';
    // this.lastname1 = '';
    // this.email1 = '';
    // this.phone1 = '';
    // this.date1 = '';
    // this.address1 = '';
    if (this.contactForm.valid) {
      console.log("Form Submitted!");
      
      this.contactForm.reset();
      
    }
   
 
  }

}








