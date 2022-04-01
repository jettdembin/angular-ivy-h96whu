import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  onSubmit(): Promise<any> | Observable<any> {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(()=> {
        if (this.username === 'test@tad.software' && this.password === 'test123') {
          resolve({associatedAccount: true})
        } else {
          resolve(null)
        }
      }); 
    });
    return promise
  }

  navigate(Promise: Function) {
    this.associatedAccount ? this.router.navigate(['/dashboard']) : alert('hi')
  }
}