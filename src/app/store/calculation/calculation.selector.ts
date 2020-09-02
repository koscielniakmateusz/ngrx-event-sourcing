import { AppState } from '../app.state';
import { Calculation } from 'src/app/model/calculation';
import { createSelector } from '@ngrx/store';
import { CalculationState } from './calculation.state';

export const getCalculationState = (state: AppState): CalculationState => state.calculationState;
export const getCalculations = createSelector(getCalculationState, (state: CalculationState): Calculation[] => state.calculations);
export const getCurrentCalculation = createSelector(getCalculationState, (state: CalculationState): Calculation => state.currentCalculation);