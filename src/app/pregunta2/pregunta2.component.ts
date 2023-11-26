import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css',
})
export class Pregunta2Component {
  parkingForm: FormGroup;
  totalFee: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.parkingForm = this.formBuilder.group({
      hours: ['', Validators.required],
      minutes: ['', Validators.required]
    });
  }

  calculateFee() {
    var hours = this.parkingForm.get('hours')?.value;
    var minutes = this.parkingForm.get('minutes')?.value;

    if (hours !== null && minutes !== null) {
      var fee = hours * 1500 + Math.floor((minutes/60)+1 * 1500);

      this.totalFee = fee;
    }
  }
  
}
  

