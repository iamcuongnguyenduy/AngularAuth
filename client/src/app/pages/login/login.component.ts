import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(NgToastService);

  form!: FormGroup;
  userRole: String = '';

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    if (this.authService.isLoggedIn()){this.router.navigate(['/home'])}
  }

  login() {
    this.authService.loginService(this.form.value).subscribe({
      next: (res) => {
        // console.log(res.token);
        // alert('Login successfully');
        this.toast.success({
          detail: 'Success messaage',
          summary: `User ${res.data.email} login successfully`,
          duration: 5000,
        });
        localStorage.setItem('user_id', res.data._id);
        localStorage.setItem("username", res.data.email)
        this.authService.isUserLoggedIn$.next(true);
        // this.authService.userLoggedIn$.next(res.data.email);
        this.router.navigate(['/home']);
        this.form.reset();
      },
      error: (err) => {
        console.log(err);
        this.toast.error({
          detail: 'Error message',
          summary: 'Login user failed',
          duration: 5000,
        });
      },
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
