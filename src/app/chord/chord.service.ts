// src/app/chord/chord.service.ts
import { Injectable } from '@angular/core';

interface FretPosition {
  string: number;
  fret: number;
  note: string;
}

@Injectable({ providedIn: 'root' })
export class ChordService {
  private chordDatabase: { [name: string]: FretPosition[] } = {};

  saveChord(name: string, positions: FretPosition[]): void {
    console.log("saveChord: name: " + name);
    this.chordDatabase[name.trim()] = [...positions];
  }

  getChord(name: string): FretPosition[] | undefined {
    console.log("getChrod: name: " + name);
    return this.chordDatabase[name.trim()];
  }

  getAllChords(): { [name: string]: FretPosition[] } {
    return this.chordDatabase;
  }
}








