import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = "Timpson Application's Form Example";
  loginForm: FormGroup;
  username: string;
  password: string;

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
    if (this.username === 'test@tad.software' && this.password === 'test123') {
      this.router.navigate(['/dashboard']);
    }
  }
}
