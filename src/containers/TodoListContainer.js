import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

export default connect(
  state => { return {todos: state.todos} }
)(TodoList)
