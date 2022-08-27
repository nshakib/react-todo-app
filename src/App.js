import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodosList';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const App = () => {
    const [input, setInput] = useState("");// for using string value -> 
    const [todos, setTodos] = useState([]);//for using array
    const [editTodo, setEditTodo] = useState(null);
  return ( 
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <Header />
            </div>
            <div>
                <Form
                    input = {input} //props
                    setInput = {setInput}
                    todos = {todos}
                    setTodos = {setTodos}
                    editTodo = {editTodo}
                    setEditTodo = {setEditTodo}
                />
            </div>
            <div>
                <TodoList 
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                    />
            </div>
        </div>
    </div>
   );
}
 
export default App;

