import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';
import { onSnapshot, collection } from "firebase/firestore";
import { db } from '../firebase';

export default function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "todos"), (doc) => {
        const todos = doc.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setTodos(todos)
    });

    return unsub
  }, [])

  return (
      <div className='flex flex-col items-center w-full space-y-2'>
        {todos.length > 0 && todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}    
      </div>
  )
}
