import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UserListComponent } from 'src/app/modules/admin/user-list/user-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, UserListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
