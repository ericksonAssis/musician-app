import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChordService } from '../chord/chord.service';

export interface FretPosition {
  string: number;
  fret: number;
  note: string;
}

export interface ChordShape {
  name: string;
  version: number;
  positions: FretPosition[];
}

@Component({
  selector: 'fletboard',
  templateUrl: './fletboard.component.html',
  styleUrls: ['./fletboard.component.css'],
  imports: [CommonModule, FormsModule ]
})
export class FletboardComponent {
  //tuning: string[] = ['E', 'A', 'D', 'G', 'B', 'E'];
  tuning: string[] = ['E', 'B', 'G', 'D', 'A', 'E'];
  frets: number[] = Array.from({ length: 13 }, (_, i) => i);
  notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  selectedFrets: FretPosition[] = [];
  selectedChordShapes: ChordShape[] = [];

  chordName: string = '';

  constructor(private chordService: ChordService) {}

  getNote(openNote: string, fret: number): string {
    const index = this.notes.indexOf(openNote);
    return this.notes[(index + fret) % 12];
  }

  toggleFret(stringIndex: number, fret: number): void {
    const note = this.getNote(this.tuning[stringIndex], fret);
    const exists = this.selectedFrets.find(sel => sel.string === stringIndex && sel.fret === fret);

    if (exists) {
      this.selectedFrets = this.selectedFrets.filter(sel => !(sel.string === stringIndex && sel.fret === fret));
    } else {
      this.selectedFrets.push({ string: stringIndex, fret, note});
    }
  }

  isSelected(stringIndex: number, fret: number): boolean {
    return this.selectedFrets.some(sel => sel.string === stringIndex && sel.fret === fret);
  }

  salvarAcorde(): void {
     if (!this.chordName.trim()) {
        alert('Informe um nome para o acorde.');
        return;
      }


    const completePositions = [];

    for (let stringIndex = 0; stringIndex < 6; stringIndex++) {
      const selected = this.selectedFrets.find(p => p.string === stringIndex);

      if (selected) {
        completePositions.push({ ...selected });
      } else {
        completePositions.push({
          string: stringIndex,
          fret: -1,
          note: ''
        });
      }
    }

    this.chordService.saveChord(this.chordName, completePositions);
    console.log(`Acorde "${this.chordName}" salvo com sucesso.`);

    this.chordName = '';
    this.selectedFrets = [];
  }


  carregarAcorde(nome: string): void {
    console.log("carregarAcorde nome: " + nome);
    const acorde = this.chordService.getChord(nome);
    if (acorde) {
      this.selectedChordShapes = [...acorde];
    } else {
      alert('Acorde não encontrado!');
    }
  }
}
