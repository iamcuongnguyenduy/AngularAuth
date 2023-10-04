import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent implements OnInit {
  fb = inject(FormBuilder)
  form!: FormGroup
  authService = inject(AuthService)
  router = inject(Router)

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  register(){
    console.log(this.form.value);
    this.authService.registerService(this.form.value)
    .subscribe({
      next: (res)=>{
        alert("User created")
        this.form.reset()
        this.router.navigate(['/login'])
      },
      error: (err)=>{
        console.log(err);        
      }
    })    
  }

  get firstName(){
    return this.form.get('firstName');
  }

  get lastName(){
    return this.form.get('lastName');
  }
    
  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  get mobileNumber(){
    return this.form.get('mobileNumber')
  }

  get role(){
    return this.form.get('role')
  }

}
