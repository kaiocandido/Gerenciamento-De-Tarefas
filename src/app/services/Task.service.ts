import { computed, effect, Injectable, signal } from "@angular/core";
import {TaskFilters, TaskPriority } from "../models/task.models";
import { Task } from '../models/task.models';

@Injectable({
  providedIn: "root",
})

export class TaskService {
  private taskSignal = signal<Task[]>(this.loadFromLocalStorage());
  tasks = this.taskSignal.asReadonly();

  filters = signal<TaskFilters>({
    serach: "",
    priority: "Todas",
    status: "Todos"

  })

  filteredTasks = computed(() => {
    const tasks = this.taskSignal();
    const { serach, priority, status } = this.filters();

    return tasks.filter(
      task => {
        const matchsSearch = task.title.toLowerCase().includes(serach.toLowerCase());
        const matchsPriority = priority === "Todas" || task.priority === priority;
        const matchsStatus = status === "Todos" || task.status === status;
        return matchsSearch && matchsPriority && matchsStatus;
      }
    )
  })

  stats = computed(() => {
    const tasks = this.taskSignal();
    const total = tasks.length;
    const completed = tasks.filter(task => task.status === "Concluida").length;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    return { total, completed, progress };
  })

  constructor() {
    effect(() => {
      localStorage.setItem('smarttasks', JSON.stringify(this.taskSignal()));
    })
  }

  addTask(title: string, priority: TaskPriority) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      priority,
      status: "Pendente",
      createdAt: new Date()
    };

    this.taskSignal.update(tasks => [newTask, ...tasks]);
  }

  toggleTaskStatus(id: string) {
    this.taskSignal.update(tasks => tasks.map(
      task => task.id === id
        ?{ ...task, status: task.status == "Pendente" ? "Concluida" : "Pendente" }
        : task
    ));
  }

  deleteTask(id: string) {
    this.taskSignal.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  updateFilters(partialFilters: Partial<TaskFilters>) {
    this.filters.update((filter) => ({ ...filter, ...partialFilters }));
  }

  resetFilters() {
    this.filters.set({
      serach: "",
      priority: "Todas",
      status: "Todos",
    });
  }

  private loadFromLocalStorage(): Task[] {
    try {
      const data = localStorage.getItem("smarttasks");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.log("Error loading tasks from localStorage!!", error);
      return [];
    }
  }
}
