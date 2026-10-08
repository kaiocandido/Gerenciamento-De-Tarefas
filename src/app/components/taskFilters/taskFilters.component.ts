import { Component, computed, inject } from "@angular/core";
import { TaskService } from "../../services/Task.service";
import { TaskPriority, TaskStatus } from "../../models/Task.models";

@Component({
  selector: "app-task-filters",
  standalone: true,
  imports: [],
  templateUrl: "./taskFilters.components.html",
  styleUrl: "./taskFilters.component.scss",
})

export class TaskFiltersComponent{

  private taskService = inject(TaskService);

  priorities: (TaskPriority | "Todas")[] = ["Todas", "Baixa", "Media", "Alta"];
  statuses: (TaskStatus | "Todos")[] = ["Todos", "Pendente", "Concluida"];

  serch = computed(() => this.taskService.filters().serach);
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
