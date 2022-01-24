export type Stauts = {
  todo: TodoProps
  doing: TodoProps
  done: TodoProps
  archive: TodoProps
}
export type TodoProps = {
  id: string
  list: {
    todo: string
    id: Number
  }[]
}
