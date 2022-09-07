import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', Validators.required),
    address: new FormControl(''),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
  });

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }
  get email() {
    return this.registerForm.get('email');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get fullName() {
    return this.registerForm.get('fullName');
  }
  get address() {
    return this.registerForm.get('address');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe((user) => {
        this.router.navigateByUrl('/login');
      });
    }
  }
}
