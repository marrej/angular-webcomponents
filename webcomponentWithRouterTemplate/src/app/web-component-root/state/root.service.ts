import { Injectable } from '@angular/core';
import { RootStore } from './root.store';

@Injectable({
  providedIn: 'root',
})
export class RootService {

  constructor(private store: RootStore) {}

  updateToken(jwtToken: string) {
    this.store.update( state => {
        const newState = {
            ...state,
            token: jwtToken
        }
        return newState;
    })
  }
}