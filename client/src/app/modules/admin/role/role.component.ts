import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export default class RoleComponent implements OnInit {
  roleService = inject(RoleService);
  roles: any;

  ngOnInit(): void {
    this.getRole();
  }

  getRole() {
    this.roleService.getRole().subscribe((response) => {
      this.roles = response;
    });
  }
  addRole(rolename: HTMLInputElement) {
    let post = { role: rolename.value };
    rolename.value = '';
    console.log(post);

    this.roleService.addRole(post).subscribe(
      (res) => {
        this.roles.push(res);
        console.log(this.roles);
      },
      (error) => {
        alert('Something went wrong');
        console.log(error);
      }
    );
  }

  deleteRole(roleId: any) {
    this.roleService.deleteRole(roleId).subscribe((res) => {
      alert('Deleted successfully');
    });
  }
}
