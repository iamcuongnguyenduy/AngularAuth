import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export default class ForgetpasswordComponent {
  form!: FormGroup
  fb = inject(FormBuilder) 

  router = inject(Router)

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  submit(){
    console.log(this.form.value);
       
  }
   
  get email(){
    return this.form.get('email');
  }


}
