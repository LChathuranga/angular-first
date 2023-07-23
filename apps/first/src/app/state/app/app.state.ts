import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface AppStateModel {
  loading: boolean;
  email?: string;
  token?: string;
}
@State<AppStateModel>({
  name: 'app',
  defaults: { loading: false },
})
@Injectable({ providedIn: 'root' })
export class AppState {}
