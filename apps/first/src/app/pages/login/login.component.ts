import { user } from '@angular/fire/auth';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngxs/store';
import { UpdateUser } from '../../state/app/app.actions';
import { catchError, from, tap, throwError } from 'rxjs';

@Component({
  selector: 'first-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailCtrl = new FormControl('lahiru@gmail.com', [
    Validators.required,
    Validators.email,
  ]);
  passwordCtrl = new FormControl('lahiru1234', [
    Validators.required,
    Validators.minLength(3),
  ]);
  private angularFireAuth = inject(AngularFireAuth);

  loginFormGroup = new FormGroup({
    email: this.emailCtrl,
    password: this.passwordCtrl,
  });

  constructor(private router: Router, private store: Store) {}
  onLogin() {
    const authPromise = this.angularFireAuth.signInWithEmailAndPassword(
      this.emailCtrl?.value || '',
      this.passwordCtrl.value || ''
    );
    from(authPromise)
      .pipe(
        tap((credential) => {
          if (credential.user) {
            this.store.dispatch(new UpdateUser(credential.user));
          }
        }),
        tap(() => this.router.navigate(['admin'])),
        catchError((e) => {
          console.log(e);
          return throwError(() => e);
        })
      )
      .subscribe();
    // .then((c) => {
    //   if (c.user) {
    //     this.store.dispatch(new UpdateUser(c.user));
    //   }
    //   this.router.navigate(['admin']);
    // });
  }
}
