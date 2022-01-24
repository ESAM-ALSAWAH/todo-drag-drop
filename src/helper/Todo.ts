import { initialState } from '../constants'
export const getTodo = (): any => {
  const Todos = localStorage.getItem('todo-drag-drop')
  return Todos ? JSON.parse(Todos) : initialState
}

export const setTodoInLocalStorage = (todo: any) =>
  localStorage.setItem('todo-drag-drop', JSON.stringify(todo))
