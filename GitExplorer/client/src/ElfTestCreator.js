/**
 * Created by bcuser on 5/7/17.
 */
import { mount } from 'enzyme';
import React from 'react';
import GetUserInfo from './components/GetUserInfo';
import DataMaven from './components/DataMaven';
import ElfDebug from './ElfDebug';
const elfDebug = new ElfDebug(true);

export default class ElfTestCreator {
    constructor(){
    }

    labelTest(label, test) {
        it('renders**** ' + label, () => {
            const wrapper = mount(<DataMaven />);
            const nineSign = <label className='ElfFormLabel' htmlFor={label}>{label}:</label>;
            if(test) {
                elfDebug.getAll(wrapper, 'p');
            }
            expect(wrapper.contains(nineSign)).toEqual(true);
        });
    }

    defaultValueTest(label, value, test) {
        it('renders default value for the ' + label, () => {
            const wrapper = mount(<DataMaven />);
            const nineSign = <p className='ElfFormParagraph' id={label}>{value}</p>;
            if(test) {
                elfDebug.getAll(wrapper, 'p');
            }
            expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
        });
    }

    clickedValueTest(label, value, test) {
        it('renders button click value ' + label, () => {
            const wrapper = mount(<DataMaven />);
            const nineSign = <p className='ElfFormParagraph' id={label}>{value}</p>;
            wrapper.find('button#getUser').simulate('click');
            if (test) {
                elfDebug.getAll(wrapper, 'p');
            }
            expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
        });
    }

}