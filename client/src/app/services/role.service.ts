import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  http = inject(HttpClient);
  
  getRole(){
    return this.http.get<any>(`${apiUrls.roleServiceApi}all`, {withCredentials: true})
  }

  addRole(role: any){
   return this.http.post<any>(`${apiUrls.roleServiceApi}`, role, {withCredentials: true})
  }

  deleteRole(roleId: any){
    return this.http.delete<any>(`${apiUrls.roleServiceApi}delete/${roleId}`)
  }
}
