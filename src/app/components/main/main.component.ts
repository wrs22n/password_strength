import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  password: string = '';
  passwordStrength: string[] = ['gray', 'gray', 'gray'];

  onPasswordChange() {
    const numberValid = this.password.length >= 8;
    const digitsValid = this.password.match(/\d/) !== null;
    const symbolsValid =
      this.password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) !== null;
    const lettersValid = this.password.match(/[a-zA-Z]/g) !== null;

    if (numberValid && digitsValid && symbolsValid && lettersValid) {
      return (this.passwordStrength = ['green', 'green', 'green']);
    } else if (this.password === '') {
      return (this.passwordStrength = ['gray', 'gray', 'gray']);
    } else if (this.password.length < 8) {
      return (this.passwordStrength = ['red', 'red', 'red']);
    } else if (
      (symbolsValid && digitsValid) ||
      (symbolsValid && lettersValid) ||
      (digitsValid && lettersValid)
    ) {
      return (this.passwordStrength = ['yellow', 'yellow', 'gray']);
    } else {
      return (this.passwordStrength = ['red', 'gray', 'gray']);
    }
  }
}
