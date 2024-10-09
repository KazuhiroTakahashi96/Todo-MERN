import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  getTodos: async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    set({ todos: data.data });
  },
  createTodo: async (newTodo) => {
    if (!newTodo.task) {
      return { success: false, message: "Please fill the task field" };
    }

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();

    if (data.success) {
      set((state) => ({ todos: [data.data, ...state.todos] }));
      return { success: true, message: "Todo created successfully" };
    } else {
      return { success: false, message: "Internal server error" };
    }
  },
  updateTodo: async (id, isCompleted) => {
    const res = await fetch(`api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted }),
    });
    const data = await res.json();

    if (data.success) {
      set((state) => {
        const filteredTodoArray = state.todos.filter((todo) => todo._id !== id);
        return { todos: [data.data, ...filteredTodoArray] };
      });

      return { success: true, message: "Todo updated successfully" };
    } else {
      return { success: false, message: "Internal server error" };
    }
  },
  deleteTodo: async (id) => {
    const res = await fetch(`api/todos/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.success) {
      set((state) => {
        const filteredTodoArray = state.todos.filter((todo) => todo._id !== id);
        return { todos: [...filteredTodoArray] };
      });

      return { success: true, message: "Todo deleted successfully" };
    } else {
      return { success: false, message: "Internal server error" };
    }
  },
}));
