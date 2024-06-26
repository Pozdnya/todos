export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  deletedTodos: ITodo[];
  inputError: string;
  todoError: string;
  loadingError: string;
  isLoading: boolean;
}