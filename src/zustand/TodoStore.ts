import create from 'zustand'
import { getTodo, setTodoInLocalStorage } from '../helper/Todo'
type props = {
  todo: any
  updateTodo: any
  deleteTodo: any
  AddTodo: any
  editTodo: any
}

export const useStore = create<props>((set) => ({
  todo: getTodo(),
  updateTodo: (id: Number, status: string) =>
    set((state) => {
      const index = state.todo.findIndex((t: any) => t.id === Number(id))
      state.todo[index].status = status
      setTodoInLocalStorage(state.todo)
    }),
  deleteTodo: (id: Number) =>
    set((state) => {
      const newTodo = state.todo.filter((t: any) => t.id !== Number(id))
      state.todo = newTodo
      setTodoInLocalStorage(state.todo)
    }),
  AddTodo: (todo: any) =>
    set((state) => {
      state.todo = [...state.todo, todo]
      setTodoInLocalStorage(state.todo)
    }),
  editTodo: (index: any, todo: any) =>
    set((state) => {
      const newTodo = [...state.todo]
      newTodo[index].title = todo.title
      newTodo[index].subject = todo.subject
      state.todo = newTodo
      setTodoInLocalStorage(state.todo)
    }),
}))
