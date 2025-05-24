// src/app/search-chord/search-chord.component.ts
import { Component } from '@angular/core';
import { ChordService } from '../chord/chord.service';
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

  constructor(private chordService: ChordService) {}

  search(): void {
    console.log("chordName :" + this.chordName);
    const chord = this.chordService.getChord(this.chordName);
    if (!chord) {
      alert('Acorde não encontrado.');
    } else {
      // Emite evento ou chama método em outro componente
      // Exemplo temporário:
      console.log(`Acorde encontrado: ${this.chordName}`, chord);
      // Aqui você pode emitir via EventEmitter ou usar um serviço com Observable
    }
  }
}