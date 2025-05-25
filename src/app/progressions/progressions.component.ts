import { Component } from '@angular/core';
import { ChordService } from '../chord/chord.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progressions',
  templateUrl: './progressions.component.html',
  styleUrls: ['./progressions.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ProgressionsComponent {
  selectedKey = 'C';
  keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  progressions:   { label: string, chords: string[] }[] = [];

  constructor(private chordService: ChordService) {
    this.updateProgressions();
  }

  updateProgressions(): void {
    this.progressions = this.chordService.getProgressions(this.selectedKey);
  }
}
