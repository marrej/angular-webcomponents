import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { RootState } from './root.model';
import { RootStore } from './root.store';

@Injectable({
  providedIn: 'root',
})
export class RootQuery extends Query<RootState> {
  token$ = this.select(state => state.token);
  
  constructor(protected store: RootStore) {
    super(store);
  }

  getToken() {
      return this.getValue().token;
  }
}