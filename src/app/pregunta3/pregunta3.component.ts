import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css',
})
export class Pregunta3Component {
  notas: FormGroup;
  prom: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.notas = this.formBuilder.group({
      nota1: ['', Validators.required],
      nota2: ['', Validators.required],
      nota3: ['', Validators.required],
      nota4: ['', Validators.required],
    });
  }

  calcularProm() {
    debugger;
    var nota1 = this.notas.get('nota1')?.value;
    var nota2 = this.notas.get('nota2')?.value;
    var nota3 = this.notas.get('nota3')?.value;
    var nota4 = this.notas.get('nota4')?.value;
    var arrayNotas = [nota1, nota2, nota3, nota4];

    const minNota = Math.min(...arrayNotas);
    const minNotaIndex = arrayNotas.indexOf(minNota) + 1;
    arrayNotas.splice(minNotaIndex, 1);

    arrayNotas.forEach((nota, index) => {
      debugger;
      if (index == 0) {
        this.prom = this.prom + Number(nota) * 0.2;
      } else if (index == 1) {
        this.prom = this.prom + Number(nota) * 0.3;
      } else if (index == 2) {
        this.prom = this.prom + Number(nota) * 0.5;
      }
    });
  }
}
