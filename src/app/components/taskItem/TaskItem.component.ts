import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { Task } from "../../models/Task.models";

@Component({
  selector: "app-task-item",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: "./TaskItem.component.html",
  styleUrl: "./TaskItem.component.scss",
})

export class TaskItemComponent {
  task = input.required<Task>();
  toggle = output<void>();
  delete = output<void>();
}
