import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FletboardComponent } from './fletboard/fletboard.component';
import { CommonModule } from '@angular/common';
import { SearchChordComponent } from './search-chord/search-chord.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FletboardComponent, SearchChordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'musician-app';
}
