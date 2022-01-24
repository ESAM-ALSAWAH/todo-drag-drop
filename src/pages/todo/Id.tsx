import React, { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TodoDetail } from '../../components'
import { useStore } from '../../zustand/TodoStore'
export const Id = () => {
  const todo = useStore((state) => state.todo)
  const [data, setData] = useState<any>(null)
  const { id } = useParams()
  useLayoutEffect(() => {
    const t = todo.find((todo: any) => todo.id === Number(id))
    setData(t)
  }, [])
  return data && <TodoDetail todo={data} />
}
