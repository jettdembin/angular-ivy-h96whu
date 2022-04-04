import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class FormComponent implements OnInit{
  loginForm: FormGroup;
  username: string;
  password: string;
  associatedAccount: false;

  constructor (private router:Router ){}
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    (this.username === 'test@tad.software' && this.password === 'test123') ? this.router.navigate(['/dashboard']) : alert('Our records indicate there is no account assoiciated with this email and passowrd') 
  }
}