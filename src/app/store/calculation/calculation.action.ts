import { Action } from '@ngrx/store';
import { Calculation } from 'src/app/model/calculation';

export enum CalculationActionType {
    Add = '[Calculation] Add',
    Subtract = '[Calculation] Subtract',
    Multiply = '[Calculation] Multiply',
    Divide = '[Calculation] Divide',
    Undo = '[Calculation] Undo',
    Repeat = '[Calculation] Repeat',
    Clear = '[Calculation] Clear'
}

export class AddCalculationAction implements Action {
    type: CalculationActionType = CalculationActionType.Add;
    constructor(public payload: Calculation) {}
}

export class SubtractCalculationAction implements Action {
    type: CalculationActionType = CalculationActionType.Subtract;
    constructor(public payload: Calculation) {}
}

export class MultiplyCalculationAction implements Action {
    type: CalculationActionType = CalculationActionType.Multiply;
    constructor(public payload: Calculation) {}
}

export class DivideCalculationAction implements Action {
    type: CalculationActionType = CalculationActionType.Divide;
    constructor(public payload: Calculation) {}
}

export class UndoCalculationAction implements Action {
    type: CalculationActionType = CalculationActionType.Undo;
    constructor() {}
}

export class RepeatCalculationAction implements Action {
    type: CalculationActionType = CalculationActionType.Repeat;
    constructor() {}
}

export class ClearCalculationsAction implements Action {
    type: CalculationActionType = CalculationActionType.Clear;
    constructor() {}
}


export type CalculationAction = 
    AddCalculationAction | 
    SubtractCalculationAction | 
    MultiplyCalculationAction | 
    DivideCalculationAction |
    UndoCalculationAction |
    RepeatCalculationAction |
    ClearCalculationsAction;