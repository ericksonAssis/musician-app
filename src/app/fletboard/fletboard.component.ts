import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChordService } from '../chord/chord.service';

interface FletPosition {
  string: number;
  fret: number;
  note: string;
}

@Component({
  selector: 'fletboard',
  templateUrl: './fletboard.component.html',
  styleUrls: ['./fletboard.component.css'],
  imports: [CommonModule, FormsModule ]
})
export class FletboardComponent {
  tuning: string[] = ['E', 'A', 'D', 'G', 'B', 'E'];
  frets: number[] = Array.from({ length: 13 }, (_, i) => i);
  notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  selectedFrets: FletPosition[] = [];
  
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
      this.selectedFrets.push({ string: stringIndex, fret, note });
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

    this.chordService.saveChord(this.chordName, this.selectedFrets);
    console.log(`Acorde "${this.chordName}" salvo com sucesso.`);
    this.chordName = '';
    this.selectedFrets = [];
  }


  carregarAcorde(nome: string): void {
    console.log("carregarAcorde nome: " + nome);
    const acorde = this.chordService.getChord(nome);
    if (acorde) {
      this.selectedFrets = [...acorde];
    } else {
      alert('Acorde não encontrado!');
    }
  }
}
