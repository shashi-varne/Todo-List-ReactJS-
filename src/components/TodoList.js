import React, { Component } from 'react';
import TodoItem from './TodoItem';
import uuid from 'uuid';

class TodoList extends Component {
  render() {
      const {items} = this.props;
    return (
      <div> 
          <ul className='list-group my-1'>
              {/* <h3 className='text-capitalize text-center'>todo list</h3> */}
              {
                  items.map(item => {
                    return <TodoItem key={item.id} title={item.title} deleteItem={()=>this.props.deleteItem(item.id)} 
                    editItem = {()=>this.props.editItem(item.id)}
                    />
                  })
              }
              <button type='submit' className='btn btn-danger btn-block text-capitalize mt-5' onClick={this.props.clearList}>Clear List</button>
          </ul>
     </div>
    );
  }
}

export default TodoList;
