import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from './Services/actions/todosAction';

const Todos = () => {
    const { isLoading, error, todos } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    return (
        <div>
            <h3>Hello Developer Sifat How are you ? </h3>
            {isLoading && <h3>Loading ...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {
                    todos && todos.map(todo => {
                        return <article key={todo.id}>
                            <h4>{todo.id}</h4>
                            <h5>{todo.title}</h5>
                        </article>
                    })
                }
            </section>
        </div>
    )
}

export default Todos  