export interface RootState {
   token: string;
}

export function createInitialState(): RootState {
  return {
    token: '',
  };
}
