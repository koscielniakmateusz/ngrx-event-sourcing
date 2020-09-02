import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { calculationReducer } from './calculation/calculation.reducer';

export const appReducers: ActionReducerMap<AppState> = {
    calculationState: calculationReducer
}
