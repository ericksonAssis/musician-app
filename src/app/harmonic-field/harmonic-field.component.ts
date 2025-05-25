import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-harmonic-field',
  templateUrl: './harmonic-field.component.html',
  styleUrls: ['./harmonic-field.component.css'],
  imports: [FormsModule, CommonModule]
})
export class HarmonicFieldComponent {
  notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  chordSuffixes = ['7M', 'm7', 'm7', '7M', '7', 'm7', 'º'];
  scaleIntervals = [0, 2, 4, 5, 7, 9, 11]; // Intervalos da escala maior

  selectedKey: string = 'C';
  majorScaleChords: string[] = [];

  constructor() {
    this.updateChords();
  }

  updateChords(): void {
    const tonicIndex = this.notes.indexOf(this.selectedKey);
    this.majorScaleChords = this.scaleIntervals.map((interval, i) => {
      const note = this.notes[(tonicIndex + interval) % this.notes.length];
      return note + this.chordSuffixes[i];
    });
  }
}
