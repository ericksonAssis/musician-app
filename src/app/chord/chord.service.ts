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

    getMajorScaleChords(tonic: string): string[] {
    const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const INTERVALS = [0, 2, 4, 5, 7, 9, 11];
    const CHORD_SUFFIXES = ['7M', 'm7', 'm7', '7M', '7', 'm7', 'º'];
    const tonicIndex = NOTES.indexOf(tonic);
    if (tonicIndex === -1) return [];

    return INTERVALS.map((interval, i) => {
      const note = NOTES[(tonicIndex + interval) % NOTES.length];
      return note + CHORD_SUFFIXES[i];
    });
  }

  getProgressions(tonic: string): { label: string; chords: string[] }[] {
    const chords = this.getMajorScaleChords(tonic);
      return [
        { label: 'I7M - IIm7 - V7 - I7M', chords: [chords[0], chords[1], chords[4], chords[0]] },
        { label: 'I7M - IV7M - V7 - I7M', chords: [chords[0], chords[3], chords[4], chords[0]] },
        { label: 'I7M - VIm7 - V7 - I7M', chords: [chords[0], chords[5], chords[4], chords[0]] },
        { label: 'I7M - V7 - IIm7 - V7 - I7M', chords: [chords[0], chords[4], chords[1], chords[4], chords[0]] },
        { label: 'I7M - VIm7 - IV7M - V7 - I7M', chords: [chords[0], chords[5], chords[3], chords[4], chords[0]] },
        { label: 'I7M - IIIm7 - IV7M - V7 - I7M', chords: [chords[0], chords[2], chords[3], chords[4], chords[0]] },
        { label: 'I7M - IIIm7 - V7 - I7M', chords: [chords[0], chords[2], chords[4], chords[0]] },
        { label: 'I7M - IIIm7 - VIm7 - V7 - I7M', chords: [chords[0], chords[2], chords[5], chords[4], chords[0]] },
        { label: 'I7M - IIIm7 - IIm7 - V7 - I7M', chords: [chords[0], chords[2], chords[1], chords[4], chords[0]] },
        { label: 'I7M - V7 - IV7M - I7M', chords: [chords[0], chords[4], chords[3], chords[0]] }
      ];
    }
  }
