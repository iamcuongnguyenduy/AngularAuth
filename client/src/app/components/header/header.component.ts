import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authService = inject(AuthService)
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe(res =>{
      this.isLoggedIn = this.authService.isLoggedIn()
    })
  }

  logout(){
    localStorage.removeItem("user_id")
    this.authService.isUserLoggedIn$.next(false)
  }

  
}
