import React from 'react';
import { shallow } from 'enzyme';
import { ItemsList } from '../index';



const defaultProps = {
  items: [],
  onDelete: f => f,
  onToggleItem: f => f,
  onToggleList: f => f,
  showCompleted: false
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1', complete: false }, { id: 2, content: 'Test 2', complete: false }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('Clicking Hide completed toggle button should hide completed item', () => {
    const items = [{ id: 1, content: 'Test 1', complete: false }, { id: 2, content: 'Test 2', complete: true }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    renderedItem.find('#showCompletedToggle-button').simulate('click');

    expect(renderedItem.find('li')).toHaveLength(1);
  });

  it('Clicking show completed toggle button should show completed item', () => {
    const items = [{ id: 1, content: 'Test 1', complete: false }, { id: 2, content: 'Test 2', complete: true }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} showCompleted={true}/>);
    renderedItem.find('#showCompletedToggle-button').simulate('click');

    expect(renderedItem.find('li')).toHaveLength(2);
  });

 
});
