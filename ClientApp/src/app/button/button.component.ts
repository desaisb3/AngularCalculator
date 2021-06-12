import { CalculatorService } from './../calculator.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() fromParent: string;
  @Output() toParent = new EventEmitter<string>();

  constructor(private calculator: CalculatorService) { }

  ngOnInit() {
  }

  public onclick(){
    this.toParent.emit(this.fromParent);
  }

}
