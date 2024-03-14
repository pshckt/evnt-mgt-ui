import { Component } from '@angular/core';
import { FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule, RouterLink],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  frmGroup : FormGroup;
  public signUpForm !: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.frmGroup = this.fb.group({});
   }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: [""],
      password: [""]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsersList",this.signUpForm.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESFUL');
      this.signUpForm.reset()
      this.router.navigate(["login"])
    },err=>{
      alert("Something went wrong")
    })
  }


}
