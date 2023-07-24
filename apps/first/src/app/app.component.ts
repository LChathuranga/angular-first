import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app/app.state';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LoginComponent,
    AdminComponent,
    CommonModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  selector: 'first-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  email$: Observable<string | undefined>;
  loading$: Observable<boolean>;

  constructor(private store: Store){
    this.email$ = this.store.select(AppState.email);
    this.loading$ = this.store.select(AppState.loading);
  }
}
