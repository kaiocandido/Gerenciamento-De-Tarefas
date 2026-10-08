import { CommonModule } from "@angular/common";
import { Component,ElementRef,inject, signal, viewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { TaskService } from "../../services/Task.service";
import { TaskPriority } from "../../models/Task.models";
import { TaskItemComponent } from "../taskItem/taskItem.component";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    TaskItemComponent,
  ],
  templateUrl: "./taskList.component.html",
  styleUrl: "./taskList.component.scss",
})


export class taskListComponent {
  private taskService = inject(TaskService);

  taskInput = viewChild<ElementRef<HTMLInputElement>>("taskInput");
  newTaskTitle = signal('');
  newTaskPriority = signal<TaskPriority>("Media");
  priorities: TaskPriority[] = ["Baixa", "Media", "Alta"];

  addTask() {
    if (this.newTaskTitle()) {
      this.taskService.addTask(this.newTaskTitle(), this.newTaskPriority());
      this.newTaskTitle.set("");
      this.taskInput()?.nativeElement.focus();
    }
  }

  getAllTasks() {
    return this.taskService.filteredTasks();
  }

  toggleTaskStatus(id: string) {
    this.taskService.toggleTaskStatus(id);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

}
