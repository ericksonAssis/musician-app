import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FletboardComponent } from './fletboard/fletboard.component';
import { CommonModule } from '@angular/common';
import { SearchChordComponent } from './search-chord/search-chord.component';
import { HarmonicFieldComponent } from './harmonic-field/harmonic-field.component';
import { ProgressionsComponent } from './progressions/progressions.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FletboardComponent, SearchChordComponent, HarmonicFieldComponent, ProgressionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'musician-app';
}
