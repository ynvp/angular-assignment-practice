import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment1',
  imports: [FormsModule],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css',
})
export class Assignment1Component {
  // question 1
  showParagraph: boolean = true;
  onToggleParagraphVisibility() {
    this.showParagraph = !this.showParagraph;
  }

  // question2
  textAreaMessage: string = '';

  // question 3
  selectState?: string;

  //question 4
  result?: number;
  onPerformOp(num1: string, num2: string, operator: string) {
    switch (operator) {
      case '*':
        this.result = +num1 * +num2;
        break;
      case '+':
        this.result = +num1 + +num2;
        break;
      case '-':
        this.result = +num1 - +num2;
        break;
      case '/':
        this.result = +num1 / +num2;
        break;
      default:
        this.result = 0;
    }
  }

  // Question 5
  inputType: string = 'text';
  onToggleInputType() {
    if (this.inputType === 'text') {
      this.inputType = 'password';
    } else {
      this.inputType = 'text';
    }
  }

  // Question 6
  counter: number = 0;
  onIncrement() {
    ++this.counter;
  }
  onDecrement() {
    --this.counter;
  }
  onReset() {
    this.counter = 0;
  }
}
