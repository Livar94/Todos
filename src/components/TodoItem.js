import React from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

const TodoItem = ({ todo: { id, todo, done } }) => {

  const handleDone = async () => {
    const todoRef = doc(db, "todos", id);
    
    await updateDoc(todoRef, {
      done: !done
    });
  }

  return (
    <div className='flex items-center justify-between bg-gray-800 w-full p-4 rounded-sm space-x-2'>
      <p className={`text-gray-100 text-lg ${done && 'line-through'}`}>{todo}</p>

      <button onClick={handleDone} className='text-gray-100 bg-pink-500 py-1.5 px-3 rounded-sm font-semibold w-full max-w-[120px]'> {done ? 'Undone' : 'Done'} </button>
    </div>
  );
}

export default TodoItem;
