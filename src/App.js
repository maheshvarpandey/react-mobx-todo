import './App.css';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="pt-10 mx-auto">
      <h1 className='pb-4 text-2xl font-extrabold text-center text-indigo-600 shadow-md '>What to do ?</h1>
      <div className='mt-4'>
        <Todo  />
      </div>
    </div>
  );
}

export default App;
