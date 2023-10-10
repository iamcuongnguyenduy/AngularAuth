import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent implements OnInit {
  authService = inject(AuthService);
  users = [];
  ngOnInit(): void {
    // this.getUser()
  }
  router = inject(Router)
  getUser() {
    // this.authService.getAllUsers().subscribe((res) => {
    //   this.users = res.data;
    // });
    // console.log(this.users);
    this.authService.getAllUsers().subscribe({
      next: (res) =>{
        this.users = res.data
      }, error: (err) =>{
        console.log(err);
        localStorage.removeItem("user_id")
        this.router.navigate(['login'])        
      }
    })
  }
}
