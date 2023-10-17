import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export default class RegisterComponent implements OnInit {
  fb = inject(FormBuilder);
  form!: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(NgToastService);
  error: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  register() {
    console.log(this.form.value);
    this.authService.registerUser(this.form.value).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Success message',
          summary: `User created successfully`,
          duration: 5000,
        });
        this.form.reset();
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        this.error = true;
        console.log(this.error);

        this.toast.error({
          detail: 'Error message',
          summary: 'Something went wrong',
          duration: 5000,
        });
        if (err.status === 400) {
          this.form.setErrors(err.message);
          console.log(err.message);
        } else {
          console.log('abbd');
        }
      },
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get mobileNumber() {
    return this.form.get('mobileNumber');
  }

  get role() {
    return this.form.get('role');
  }
}
