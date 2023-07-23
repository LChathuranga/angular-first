import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'first-admin-grn',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.css'],
})
export class AdminGrnComponent {
  @Input({ required: true }) label!: string;
  constructor(protected appService: AppService) {}
}
