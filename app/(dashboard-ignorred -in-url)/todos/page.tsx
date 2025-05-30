import TodoList from '../../components/TodoList'
import db from '../../utils/db'

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  })

  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage

// console.log(process.argv);

// const TodosPage = () => {
//   return (
//     <div>
//       <h1>Todos  Page</h1>
//       <p>This is the todos page.</p>
//     </div>
//   );
// }   

// export default TodosPage;