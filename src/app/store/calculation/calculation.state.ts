import { Calculation } from 'src/app/model/calculation';

export interface CalculationState {
    calculations: Calculation[],
    currentCalculation: Calculation
}

export const initialCalculationState: CalculationState = {
    calculations: [],
    currentCalculation: null
}