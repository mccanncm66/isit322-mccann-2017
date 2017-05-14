import React from 'react';
import ReactDOM from 'react-dom';
import ElfDebug from '../ElfDebug';
import ElfTest from '../ElfTestCreator';
import DataMaven from '../components/DataMaven';
const elfDebug = new ElfDebug(true);
const elfTester = new ElfTest();
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import ShowJso from '../components/ShowJso';
let gitJso =
    {
        id: 'id-qux',
        url: 'url-qux',
        description: 'description-qux'
    };

describe('My GetJSO test' , () => {

    function getDefault(id, value) {
        const wrapper = mount(<DataMaven />);
        const nineSign = <label className='ElfFormLabel' htmlFor={id}>{value}</label>;
        //elfDebug.getIndex(wrapper, 1, true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowJso gitJso={gitJso} />, div);
    });

    it('renders initial value of paragraph with id', () => {
        const wrapper = shallow(<ShowJso gitJso={gitJso} />);
        const nineSign = <p className='App-intro'>Id: id-qux</p>;
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
    it('renders initial value of paragraph with Url', () => {
        const wrapper = shallow(<ShowJso gitJso={gitJso} />);
        const nineSign = <p className='App-intro'>Url: url-qux</p>;
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
    it('renders initial value of paragraph with description', () => {
        const wrapper = shallow(<ShowJso gitJso={gitJso} />);
        const nineSign = <p className='App-intro'>Description: description-qux</p>;
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('Should render required tags', () => {
        const wrapper = shallow(<ShowJso gitJso={gitJso} />);
        try { wrapper.find('button.getGist'); }
        catch (err) {
            throw new Error('I cant find button');
        }
    });

});
