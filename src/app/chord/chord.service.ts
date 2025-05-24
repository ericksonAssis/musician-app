// src/app/chord/chord.service.ts
import { Injectable } from '@angular/core';

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


@Injectable({ providedIn: 'root' })
export class ChordService {
  private chordDatabase: { [name: string]: ChordShape[] } = {};

  saveChord(name: string, positions: FretPosition[]): void {

    console.log("saveChord: name: " + name);
    const version = (this.chordDatabase[name]?.length || 0) + 1;
    const newShape: ChordShape = {
      name: name.trim(),
      version,
        positions: [...positions]
      };

      if (!this.chordDatabase[name]) {
        this.chordDatabase[name] = [];
      }

      this.chordDatabase[name].push(newShape);
    }

    getChord(name: string): ChordShape[] {
      return this.chordDatabase[name.trim()] || [];
    }

    getAllChords(): { [name: string]: ChordShape[] } {
      return this.chordDatabase;
    }
  }
