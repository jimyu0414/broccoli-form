import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import BrocoInviteForm from '../components/BrocoInviteForm';

describe('BrocoInviteForm', ()=>{
    let wrapper;
    const onSubmitClick = jest.fn();

    beforeEach(()=>{
        wrapper = shallow(
            <BrocoInviteForm 
            onClick = {onSubmitClick}
            />
        )
    });

    it('should have no input before modal come out',()=>{
        expect(wrapper.find('input')).toHaveLength(0);
    });

})