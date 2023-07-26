import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
} from '@angular/fire/firestore';

// interface User {
//   name: string;
//   email: string;
// }
interface GRN {
  date: Date;
  customer: {
    name: string;
    phone: string;
  };
}
@Component({
  selector: 'first-admin-grn',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.css'],
})
export class AdminGrnComponent {
  @Input({ required: true }) label!: string;
  firestore: Firestore = inject(Firestore);
  // users$: Observable<User[]>;
  // constructor(private httpClient: HttpClient) {
  //   this.users$ = this.httpClient.get<User[]>(
  //     'https://jsonplaceholder.typicode.com/users'
  //   );
  // }
  dateCtrl = new FormControl();
  nameCtrl = new FormControl();
  phoneCtrl = new FormControl();
  customerCtrl = new FormGroup({
    name: this.nameCtrl,
    phone: this.phoneCtrl,
  });
  grnFromGroup = new FormGroup({
    date: this.dateCtrl,
    customer: this.customerCtrl,
  });

  grans$: Observable<GRN[]>; // Declare the type
  grnCollection = collection(this.firestore, 'grn');

  constructor() {
    this.grans$ = collectionData(this.grnCollection) as Observable<GRN[]>;
  }

  async onSave() {
    await addDoc(this.grnCollection, this.grnFromGroup.value);
  }
}
