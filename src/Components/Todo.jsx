import React from 'react'
import { observer } from 'mobx-react-lite';
import { myStore1 } from '../store/appstore';

const Todo = observer(() => {
    return (
        <div className='mx-auto mt-4'>
            <div className='flex justify-center'>
                <input placeholder='Enter your thought..' className='px-4 py-2 border-2 border-gray-200 rounded-md' type="text" value={myStore1.input} onChange={e => myStore1.changeInput(e.target.value)} />
                <button className='px-4 py-2 ml-2 text-white bg-indigo-400 border-2 rounded-lg' onClick={() => {
                    myStore1.pushIntoToDo({ id: myStore1.toDoList.length + 1, name: myStore1.input });
                    myStore1.input = "";
                    console.log(myStore1);
                }}>add</button>
            </div>
            <ul className='flex flex-wrap justify-center'>
                {myStore1.toDoList.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className='flex justify-between px-4 py-1 my-2 space-x-4 text-black bg-gray-200 rounded-lg hover:bg-gray-400 hover:text-white'>
                                <div className='w-40 leading-8'>{item.name}</div>
                                <div>
                                    <button className='px-3 py-1 ml-2 text-white bg-red-400 border-2 rounded-lg' onClick={() => myStore1.deleteItem(item.id)}>delete</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})

export default Todo;