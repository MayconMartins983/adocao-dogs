import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { LoginDto } from './../../shared/models/login-dto';
import { Usuario } from './../../shared/models/usuario';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { JwtDto } from 'src/app/shared/models/jwt-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginDto!: LoginDto;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  login() {
    this.service.login(this.loginForm.value).subscribe((token: JwtDto) => {
      localStorage.setItem('token', token.token);
      this.router.navigate(['']);
    });
  }
}
