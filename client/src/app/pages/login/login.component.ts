import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  fb = inject(FormBuilder)
  form!: FormGroup
  authService = inject(AuthService)
  router = inject(Router)

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  login(){
    this.authService.loginService(this.form.value)
    .subscribe({
      next: (res)=>{
        console.log(res.token);
        alert("Login successfully")
        localStorage.setItem("user_id", res.data._id)
        this.authService.isUserLoggedIn$.next(true);     
        this.router.navigate(['/home'])
        this.form.reset();
      },
      error: (err)=>{
        console.log(err);        
      }
    })    
  }
   
  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }
}
