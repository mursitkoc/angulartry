import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../services/account-service.service';
import { User } from './user';
import { AlertifyService } from '../services/alertify.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AccountServiceService, AlertifyService]
})
export class LoginComponent implements OnInit{
  constructor(
    private acountService:AccountServiceService,
    private alertifyService:AlertifyService,
    private router:Router
  ){}

  ngOnInit(): void {}

  user:User = new User();
  userForm: FormGroup = new FormGroup({
    userName: new FormControl<string|undefined>(undefined, Validators.required),
    password: new FormControl<string|undefined>(undefined, Validators.required),
  })
  
  login(){
    this.user = Object.assign({},this.userForm.value)
    console.log(this.user.userName)
    console.log(this.user.password)
    console.log(this.acountService.isLoggedIn())
    
    if(this.acountService.login(this.user)){
      this.alertifyService.success("Başarıyla giriş yapıldı")
    } 
    else{
      this.alertifyService.error("Kullanıcı adı veya şifre hatalı")
    }
    }

}
