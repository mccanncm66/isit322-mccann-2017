/**
 * Created by bcuser on 5/16/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import GistLister from '../components/GistLister';
import ElfDebugEnzyme from '../ElfEnzymeDebug';

const elfDebug = new ElfDebugEnzyme(false, 'GistList.test.js');

import {shallow} from 'enzyme';

describe('ElfHeader Suite', () => {

    it('renders the GistLister component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GistLister />, div);
    });
    it('renders and reads GistLister H2 text', () => {
        const wrapper = shallow(<GistLister />);
        elfDebug.getAll(wrapper);
        const welcome = <h2>Gist Lister</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders GistLister UL Element', () => {
        const wrapper = shallow(<GistLister />);
        elfDebug.getElement(wrapper,'ul');
        //var a = wrapper.find('ul');
        //console.log(a);
        expect(wrapper.find('ul').length).toEqual(5);
    });
});