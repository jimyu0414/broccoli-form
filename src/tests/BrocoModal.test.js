import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import BrocoModal from '../components/BrocoModal';


describe('BrocoModal', ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(
            <BrocoModal 
             show={true}
            />
        )
    });

    it('should have a form when it come out',()=>{
        expect(wrapper.find('.modal')).toHaveLength(0);
    });

})