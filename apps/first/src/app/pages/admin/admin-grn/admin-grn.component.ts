import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ChangeEmail, ShowLoading } from '../../../state/app/app.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'first-admin-grn',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.css'],
})
export class AdminGrnComponent {
  @Input({ required: true }) label!: string;
  constructor(private store: Store) {}
  toggle() {
    this.store.dispatch(new ShowLoading(true));
  }
  emailCtrl = new FormControl('lahiru@gmail.com', [
    Validators.required,
    Validators.email,
  ]);
  adminGrnEmailFormGroup = new FormGroup({
    email: this.emailCtrl,
  });

  onChangeEmail(){
    this.store.dispatch(
      new ChangeEmail(this.adminGrnEmailFormGroup.value.email || "")
    );
  }
}
