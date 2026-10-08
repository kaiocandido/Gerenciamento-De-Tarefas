import { Component, inject } from "@angular/core";
import { TaskService } from "../../services/Task.service";
import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule, MatCardTitle } from "@angular/material/card";

@Component({
  selector: "app-task-stats",
  standalone: true,
  imports:[
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatCardTitle,
  ],
  templateUrl: "./taskstats.component.html",
  styleUrl: "./taskstats.component.scss",
})

export class TasksComponents {
  private taskService = inject(TaskService);
  stats = this.taskService.stats;
}
