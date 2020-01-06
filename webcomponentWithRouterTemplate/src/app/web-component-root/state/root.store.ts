import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { createInitialState, RootState } from './root.model';

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'root' })
export class RootStore extends Store<RootState> {
  constructor() {
    super(createInitialState());
  }
}
