export interface Calculation {
    id?: number;
    date?: Date;
    calculationType: string;
    firstNumber: number;
    secondNumber: number;
    result?: number
}