import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export default class HomeComponent implements OnInit {

  authService = inject(AuthService)
  users = [];
  ngOnInit(): void {
    // this.getUser()   
  }

  getUser(){
    this.authService.getAllUsers().subscribe((res)=>{
      this.users = res.data    
    })
    console.log(this.users);
  }
}
