import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { AddCalculationAction, SubtractCalculationAction, MultiplyCalculationAction, DivideCalculationAction, UndoCalculationAction, RepeatCalculationAction, ClearCalculationsAction } from '../store/calculation/calculation.action';
import { Calculation } from '../model/calculation';
import { Observable } from 'rxjs';
import { getCurrentCalculation } from '../store/calculation/calculation.selector';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  calculationType: string = CalculationType.Add;

  firstNumber: number = 0;

  secondNumber: number = 0;

  result: number = 0;

  calculation$: Observable<Calculation>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.calculation$ = this.store.select(getCurrentCalculation);
    this.calculation$.subscribe((calculation: Calculation) => {
      if (calculation) {
        this.firstNumber = calculation.firstNumber;
        this.secondNumber = calculation.secondNumber;
        this.calculationType = calculation.calculationType;
        this.result = calculation.result;
      }
    });
  }

  calculate(): void {
    const calculation: Calculation = this.createCalculcation();
    const calculationResult: number = this.getCalculationResult(calculation);
    this.result = calculationResult;
    calculation.result = calculationResult;
    switch (this.calculationType) {
      case CalculationType.Add: 
        calculation.result = calculation.firstNumber + calculation.secondNumber;
        this.store.dispatch(new AddCalculationAction(calculation));
        break;
      case CalculationType.Subtract: 
        calculation.result = calculation.firstNumber - calculation.secondNumber;
        this.store.dispatch(new SubtractCalculationAction(calculation));
        break;
      case CalculationType.Multiply: 
        calculation.result = calculation.firstNumber * calculation.secondNumber;
        this.store.dispatch(new MultiplyCalculationAction(calculation));
        break;
      case CalculationType.Divide: 
        calculation.result = calculation.firstNumber / calculation.secondNumber;
        this.store.dispatch(new DivideCalculationAction(calculation));
        break;
      default: break;
    }
  }

  private createCalculcation(): Calculation {
    return {
      calculationType: this.calculationType,
      firstNumber: this.firstNumber,
      secondNumber: this.secondNumber
    }
  }

  private getCalculationResult(calculation: Calculation): number {
    switch (this.calculationType) {
      case CalculationType.Add: 
        return calculation.result = calculation.firstNumber + calculation.secondNumber;
      case CalculationType.Subtract: 
        return calculation.result = calculation.firstNumber - calculation.secondNumber;
      case CalculationType.Multiply: 
        return calculation.result = calculation.firstNumber * calculation.secondNumber;
      case CalculationType.Divide: 
        return calculation.result = calculation.firstNumber / calculation.secondNumber;
      default: break;
    }
  }

  undo(): void {
    this.store.dispatch(new UndoCalculationAction());
  }

  repeat(): void {
    this.store.dispatch(new RepeatCalculationAction());
  }

  clear(): void {
    this.store.dispatch(new ClearCalculationsAction());
  }

}

enum CalculationType {
  Add = 'Add',
  Subtract = 'Subtract',
  Multiply = 'Multiply',
  Divide = 'Divide'
}