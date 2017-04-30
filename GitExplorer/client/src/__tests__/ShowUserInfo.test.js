import React from 'react';
import ShowUserInfo from '../components/ShowUserInfo';
import fieldDefinitions from '../field-definitions';
import ReactDOM from 'react-dom';


import { shallow } from 'enzyme';
import { mount } from 'enzyme';

describe('My ShowUserInfo test' ,function () {

    let bodyData = {};

    beforeEach(function() {
        const tempBody = {};
        for (let value of fieldDefinitions) {
            tempBody[value.id] = value.sample;
        }
        bodyData=tempBody;
    });

    function getFirst(wrapper, element) {
        const ninep = wrapper.find(element).debug();
        console.log(ninep);
    };
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={function() {}}
        />, div);
    });

    it('renders default login data', () => {
        const wrapper = mount(<ShowUserInfo
                                    fields={fieldDefinitions}
                                    gitUser={bodyData}
                                    onChange={function() {}}
                                />);
        const nineSign = <p className="ElfFormParagraph" id="login">login-unknown</p>
        ;
        //getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });
});
