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
            <div id='gistList'>
                <h2>Gist Lister</h2>
                <h3>Gists Found: {this.props.gistList.length}</h3>
                {this.props.gistList.map((field, index) => {
                    return (
                        <div key={field.id}>
                            <label className='ElfFormLabel'>Id: </label>
                            <p>{field.id}</p>
                            <label className='ElfFormLabel'>Url:</label>
                            <p>{field.url}</p>
                            <label className='ElfFormLabel'>Html Url: </label>
                            <p>{field.html_url}</p>
                            <label className='ElfFormLabel'>Git Pull Url: </label>
                            <p>{field.git_pull_url}</p>
                            <label className='ElfFormLabel'>Description: </label>
                            <p>{field.description}</p>
                            <hr className='fancyDivider' />
                        </div>
                    );
                })}
                <button id='gistList' onClick={this.props.fetchGistLists}>Get Gist List</button> <br />
            </div>
        );
    }
}
export default GistLister;
/*
<ul><li>{this.props.gistList[0]['html_url']}</li></ul>
<ul></ul>
<ul></ul>
<ul></ul>
<ul></ul>
<button id='gistList' onClick={this.props.fetchGistLists}>Get Gist List</button> <br />*/
