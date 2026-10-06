export type TaskPriority = "Baixa" | "Media" | "Alta";
export type TaskStatus = "Pendente" | "Concluida";

export interface Task {
  id: string;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: Date;
}

export interface TaskFilters{
  serach: string;
  priority: TaskPriority | "Todas";
  status: TaskStatus | "Todos";
}

