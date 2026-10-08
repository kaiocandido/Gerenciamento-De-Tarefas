import { Component, signal } from '@angular/core';
import { TaskFiltersComponent } from './components/taskFilters/taskFilters.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { taskListComponent } from './components/taskList/taskList.component';
import { TasksComponents } from './components/taskstats/taskstats.component';

@Component({
  imports: [
    TaskFiltersComponent,
    CommonModule,
    MatIconModule,
    TaskFiltersComponent,
    MatToolbar,
    taskListComponent,
    TasksComponents,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('Estou estudando angular');
}
