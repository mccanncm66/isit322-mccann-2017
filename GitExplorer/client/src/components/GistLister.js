/**
 * Created by bcuser on 5/16/17.
 */
import React, {Component} from 'react';
import ElfLogger from '../ElfLogger';
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('Gist List Constructor');
    }

    render() {
        return (
            <div>
                <h2>Gist Lister</h2>
                <ul><li>{this.props.gistList[0]['html_url']}</li></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <button id="gistList" onClick={this.props.fetchGistLists}>Get Gist List</button> <br />
            </div>
        );
    }
}

export default GistLister;
