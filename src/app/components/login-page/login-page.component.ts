import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  login() {
    this.http.get<any>("http://localhost:2000/signupUsersList")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
          alert('Login Succesful');
          this.loginForm.reset()
          this.router.navigate(["home"])
        } else {
          alert("user not found")
        }
      }, err => {
        alert("Something went wrong")
      })
  }

}
