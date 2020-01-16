import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
      const {item, handleChange, handleSubmit} = this.props;
    return (
      <div className='card card-body my-3'> 
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
            <div className='input-group-prepend'>
                <div className='input-text-group bg-primary text-white'>
                    <i className='fas fa-book fa-2x'></i>
                </div>
            </div>
            <input type='text' className='form-control' value={item} onChange={handleChange} placeholder='Add a Todo'/>
            </div>
            <button type='submit' 
            className={this.props.editBoolean ? 'btn btn-block btn-success mt-2' : 'btn btn-block btn-primary mt-2'}>{this.props.editBoolean ? 'edit item' : 'Add Item'}</button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
