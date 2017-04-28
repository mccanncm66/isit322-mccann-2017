import React from 'react';
import ShowUserInfo from '../components/ShowUserInfo';


import { shallow } from 'enzyme';

describe('My ShowUserInfo test' ,function () {

    let gitUser = {};

    beforeEach(function() {
       gitUser = {
           login: 'login',
           avatar_url:'avatar'
       }
   });

    function getFirst(wrapper, element) {
        const ninep = wrapper.find(element).debug();
        console.log(ninep);
    }
    it('renders default login data', () => {
        const wrapper = shallow(<ShowUserInfo
                                    gitUser={gitUser}
                                    onChange={function() {}}
                                />);
        const nineSign = <p className="App-intro">login: login</p>;
        //getFirst(wrapper, 'div');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
