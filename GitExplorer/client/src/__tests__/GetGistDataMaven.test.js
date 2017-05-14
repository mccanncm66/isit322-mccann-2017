import React from 'react';
import ReactDOM from 'react-dom';
import ElfDebug from '../ElfDebug';
import ElfTest from '../ElfTestCreator';
import DataMaven from '../components/DataMaven';
const elfDebug = new ElfDebug(true);
const elfTester = new ElfTest();
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import ShowNewGist from "../components/ShowNewGist";

let gitGist =
    {
        id: 'id-qux',
        url: 'url-qux',
        description: 'description-qux'
    };
let fetchGist = (event) => {
    logger.log('--DataMaven Fetch Gist Being Called--');
    event.preventDefault();
    const that = this;
    fetch('/api/gist-test')
        .then(function (response) {
            //logger.log(JSON.stringify(response));
            return response.json();
        }).then(function (json) {
        //console.log('parsed json', json);
        const body = json.result;
        //logger.log(JSON.stringify(body));
        gitGist = body;
    }).catch(function (ex) {
        logger.log('ERROR:', ex);
        // DISPLAY WITH LOGGER
    });

};


describe('My GetGist test' , function() {

    function getDefault(id, value) {
        const wrapper = mount(<DataMaven />);
        const nineSign = <label className="ElfFormLabel" htmlFor={id}>{value}</label>;
        //elfDebug.getIndex(wrapper, 1, true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowNewGist gitGist={gitGist} />, div);
    });


    it('renders initial value of paragraph with id', () => {
        const wrapper = shallow(<ShowNewGist gitGist={gitGist} />);
        const nineSign = <p className="App-intro">Id: id-qux</p>;
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
    it('renders initial value of paragraph with Url', () => {
        const wrapper = shallow(<ShowNewGist gitGist={gitGist} />);
        const nineSign = <p className="App-intro">Url: url-qux</p>;
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
    it('renders initial value of paragraph with description', () => {
        const wrapper = shallow(<ShowNewGist gitGist={gitGist} />);
        const nineSign = <p className="App-intro">Description: description-qux</p>;
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('Should render required tags', () => {
        const wrapper = shallow(<ShowNewGist gitGist={gitGist} />);
        try { wrapper.find("button.getGist"); }
        catch(err){
            throw new Error("I can't find 'button' button");
        }
    });

});
