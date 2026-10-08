import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFiltersComponent } from './components/taskFilters/taskFilters.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  imports: [
    RouterOutlet,
    TaskFiltersComponent,
    CommonModule,
    MatIconModule,
    TaskFiltersComponent,
    MatToolbar
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('Estou estudando angular');
}
