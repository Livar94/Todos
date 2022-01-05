import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';

function App() {
  return (
    <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center py-2'>
      <div className='max-w-xl w-full flex flex-col items-center justify-center space-y-5'>
        <TodoForm />
        {/*  */}
        <TodosList />
      </div>
    </div>
  );
}

export default App;
