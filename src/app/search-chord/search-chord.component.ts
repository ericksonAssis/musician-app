// src/app/search-chord/search-chord.component.ts
import { Component } from '@angular/core';
import { ChordService, ChordShape } from '../chord/chord.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-chord',
  templateUrl: './search-chord.component.html',
  styleUrls: ['./search-chord.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SearchChordComponent {
  chordName: string = '';
  chordShapes: ChordShape[] = [];

  tuning: string[] = ['E', 'A', 'D', 'G', 'B', 'E'];
  frets: number[] = Array.from({ length: 13 }, (_, i) => i);
  notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  constructor(private chordService: ChordService) {}

  search(): void {
    const chords = this.chordService.getChord(this.chordName);
    if (!chords || chords.length === 0) {
      alert('Acorde não encontrado.');
      this.chordShapes = [];
    } else {
      this.chordShapes = chords;
      console.log(`Acordes encontrados para ${this.chordName}:`, chords);
    }
  }

  
  getNote(openNote: string, fret: number): string {
    const index = this.notes.indexOf(openNote);
    return this.notes[(index + fret) % 12];
  }

}