import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import { deleteItem, toggleItem, toggleList } from '../../logic/todos';
import * as actionTypes from '../../logic/actions';


export const ItemsList = ({ items, showCompleted, onDelete, onToggleItem, onToggleList }) => {
  const newItems = showCompleted ? items : items.filter(item => item.complete == false)

  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {
          newItems.map(
          item => <li key={item.id}>
                    <div className="itemContent">{item.content}</div>
                    <div className="actionPanel">
                      <a href='#'
                        className="action-a"
                        onClick={() => 
                          onDelete(item.id)
                        }>  Delete Task
                      </a>

                      <a className="action-a" 
                        href='#' onClick={() => 
                        onToggleItem(item.id)
                        }>
                        {item.complete ? 'In complete': 'Complete'}
                        
                      </a>
                    </div>
                  </li>
        )}
      </ul>
        <input id="showCompletedToggle-button"
            className="itemCreator-button"
            type="button"
            value= {showCompleted ? 'Hide completed' : 'Show completed'}
            onClick={() => 
              onToggleList()
            }
          />    
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired, 
  onToggleItem: PropTypes.func.isRequired, 
  onToggleList: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { items: state.todos.items,
  showCompleted: state.todos.showCompleted };
};

const mapDispatchToProps = dispatch => ({
    
        onDelete: (id) => dispatch(deleteItem(id)),
        onToggleItem: (id) => dispatch(toggleItem(id)),
        onToggleList: () => dispatch(toggleList()),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
