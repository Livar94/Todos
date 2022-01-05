import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

const TodoForm = () => {
  const [inputTodo, setInputTodo] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: inputTodo,
        done: false
      });
      setInputTodo("");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className='flex flex-col items-start bg-gray-800 p-5 rounded-sm w-full'>
      <h1 className='text-5xl text-gray-200 mb-6 '>Todos</h1>
      <form onSubmit={handleSubmit} className='flex items-stretch space-x-2 w-full'>
        <input value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} type="text" className='outline-none indent-1 rounded-sm py-1 px-2 text-2xl text-gray-600 flex-1' placeholder='type in some todo...' required />
        <button type='submit' className='text-gray-100 bg-pink-500 py-1.5 px-3 rounded-sm font-semibold' >Create Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
