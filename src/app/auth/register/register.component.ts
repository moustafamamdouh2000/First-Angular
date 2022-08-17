import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
    passConfirm: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('/^(s+S+s*)*(?!s).*$/'),
    ]),
  });
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    console.log(form);
  }
  get registerControls() {
    return this.registerForm.controls;
  }
}
