import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  authService = inject(AuthService);
  users = [];
  ngOnInit(): void {
    // this.getUser()
  }
  router = inject(Router);
  getUser() {
    // this.authService.getAllUsers().subscribe((res) => {
    //   this.users = res.data;
    // });
    // console.log(this.users);
    this.authService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res.data;
      },
      error: (err) => {
        console.log(err);
        localStorage.removeItem('user_id');
        this.router.navigate(['login']);
      },
    });
  }
}
