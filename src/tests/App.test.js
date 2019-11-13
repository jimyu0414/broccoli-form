import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import App from '../App';

describe('App',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(
      <App />
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an invite email button',()=>{
    expect(wrapper.find('.button')).toHaveLength(1);
  })

  it('should have no email modal appeared onload',()=>{
    expect(
      wrapper.find('.modal').length
    ).toBe(0);
  })

});


