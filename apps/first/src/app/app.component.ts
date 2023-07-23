import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AppService } from './services/app/app.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LoginComponent,
    AdminComponent,
    CommonModule,
    MatProgressBarModule,
  ],
  selector: 'first-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'lahiru';
  frameworks = ['Angular', 'React', 'VueJS'];
  handleClick() {
    this.name = 'Chathuranga';
  }
  constructor(protected appService: AppService) {}
}
