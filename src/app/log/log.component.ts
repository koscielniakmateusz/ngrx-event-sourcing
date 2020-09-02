import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Calculation } from '../model/calculation';
import { getCalculations, getCurrentCalculation } from '../store/calculation/calculation.selector';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  calculations$: Observable<Calculation[]>;

  currentCalculation$: Observable<Calculation>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.calculations$ = this.store.select(getCalculations);
    this.currentCalculation$ = this.store.select(getCurrentCalculation);
  }

}
