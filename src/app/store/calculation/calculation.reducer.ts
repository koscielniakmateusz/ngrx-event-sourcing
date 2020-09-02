import { CalculationState, initialCalculationState } from './calculation.state';
import { CalculationActionType } from './calculation.action';
import { Calculation } from 'src/app/model/calculation';

export const calculationReducer = (state: CalculationState = initialCalculationState, action): CalculationState => {
    switch (action.type) {
        case CalculationActionType.Add: {
            return { ... state, currentCalculation: action.payload, calculations: [ ...state.calculations, action.payload ]};
        }
        case CalculationActionType.Subtract: {
            return { ... state, currentCalculation: action.payload, calculations: [ ...state.calculations, action.payload ]};
        }
        case CalculationActionType.Multiply: {
            return { ... state, currentCalculation: action.payload, calculations: [ ...state.calculations, action.payload ]};
        }
        case CalculationActionType.Divide: {
            return { ... state, currentCalculation: action.payload, calculations: [ ...state.calculations, action.payload ]};
        }
        case CalculationActionType.Undo: {
            try {
                const currentCalculationIndex: number = state.calculations.findIndex((calculation: Calculation) => calculation === state.currentCalculation);
                const previousCalculation: Calculation = state.calculations[currentCalculationIndex - 1];
                return previousCalculation ? { ... state, currentCalculation: previousCalculation } : { ... state };
            } catch (err) {
                return { ... state };
            }
        }
        case CalculationActionType.Repeat: {
            try {
                const currentCalculationIndex: number = state.calculations.findIndex((calculation: Calculation) => calculation === state.currentCalculation);
                const nextCalculation: Calculation = state.calculations[Math.abs(currentCalculationIndex + 1)];
                return nextCalculation ? { ... state, currentCalculation: nextCalculation } : { ... state };
            } catch (err) {
                return { ... state };
            }
        }
        case CalculationActionType.Clear: {
            return { ... state, calculations: [], currentCalculation: null };
        }
        default: return { ... state };
    }
}