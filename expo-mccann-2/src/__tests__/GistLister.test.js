/**
 * Created by bcuser on 5/16/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import GistLister from '../components/GistLister';
import ElfDebugEnzyme from '../ElfEnzymeDebug';

const elfDebug = new ElfDebugEnzyme(true, 'GistList.test.js');

import {shallow} from 'enzyme';

const gistList = [
    {
        url: 'www',
        html_url: 'https://gist.github.com/a023c7db77926ff58d35087821e12020',
        id: 'a023c7db77926ff58d35087821e12020',
        git_pull_url: 'https://gist.github.com/a023c7db77926ff58d35087821e12020.git',
        description: 'Simple React Component'
    }
];
describe('ElfHeader Suite', () => {

    it('renders the GistLister component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GistLister
            gistList={gistList}
        />, div);
    });
    it('renders and reads GistLister H2 text', () => {
        const wrapper = shallow(<GistLister
                    gistList={gistList}
        />
            );
        elfDebug.getAll(wrapper);
        const welcome = <h2>Gist Lister</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});