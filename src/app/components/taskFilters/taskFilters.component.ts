import { Component, computed, inject } from "@angular/core";
import { TaskService } from "../../services/Task.service";
import { TaskPriority, TaskStatus } from "../../models/Task.models";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-task-filters",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: "./taskFilters.components.html",
  styleUrl: "./taskFilters.component.scss",
})

export class TaskFiltersComponent{

  private taskService = inject(TaskService);

  priorities: (TaskPriority | "Todas")[] = ["Todas", "Baixa", "Media", "Alta"];
  statuses: (TaskStatus | "Todos")[] = ["Todos", "Pendente", "Concluida"];

  search = computed(() => this.taskService.filters().serach);
  priority = computed(() => this.taskService.filters().priority);
  status = computed(() => this.taskService.filters().status);

  updateSearch(value: string) {
    this.taskService.updateFilters({
      serach: value
    });
  }

  updatePriority(value: TaskPriority | "Todas") {
    this.taskService.updateFilters({
      priority: value
    });
  }

  updateStatus(value: TaskStatus | "Todos") {
    this.taskService.updateFilters({
      status: value
    });
  }

  reset() {
    this.taskService.resetFilters();
  }

}
