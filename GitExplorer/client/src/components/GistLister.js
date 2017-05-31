import React, {Component} from 'react';
import ElfLogger from '../ElfLogger';
import { Button } from 'react-bootstrap';
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('Gist List Constructor');
        this.state = {
            index: 0
        };
        this.gistIterator = this.gistIterator.bind(this);
        this.gistDelete = this.gistDelete.bind(this);
    }

    gistIterator (event) {
        logger.log(event.target.id);
        if (event.target.id === 'nextGist') {
            this.setState((prevState, props) => {
                if (prevState.index < props.gistList.length - 1) {
                    return (
                        {index: prevState.index + 1}
                    );
                }
            });
        } else {
            if (this.state.index !== 0) {
                this.setState((prevState, props) => {
                    return {index: prevState.index - 1};
                });
            }
        }
    }

    gistDelete() {
        const id = this.props.gistList[this.state.index].id;
        this.props.gistDelete(id, () => {
            this.props.fetchGistLists();
        });
    }

    render() {
        return (
            <div id='gistList'>
                <h2>Gist Lister</h2>
                <h3>Gists Index: {this.state.index + 1} / {this.props.gistList.length}</h3>

                <Button bsStyle='primary' id='gistList' disabled={!this.props.gistCanIterate}  onClick={this.props.fetchGistLists}>Get Gist List</Button>
                <Button bsStyle='success' id='prevGist' disabled={this.props.gistCanIterate} onClick={this.gistIterator}>Back</Button>
                <Button bsStyle='danger' id='nextGist' disabled={this.props.gistCanIterate} onClick={this.gistIterator}>Next</Button>
                <Button bsStyle='primary' id='deleteGist' disabled={this.props.gistCanIterate}  onClick={this.gistDelete}>Delete</Button>
                {this.props.gistList.length > 1 &&
                <div>
                    <ul className='elf-ul'>
                        <li>
                            <label className='ElfFormLabel'>Id: </label>
                            <p>{this.props.gistList[this.state.index].id}</p>
                        </li>
                        <li>
                            <label className='ElfFormLabel'>Url: </label>
                            <p>{this.props.gistList[this.state.index].url}</p>

                        </li>
                        <li>
                            <label className='ElfFormLabel'>Html Url: </label>
                            <p><a target='new'
                                  href={this.props.gistList[this.state.index].htmlUrl}>{this.props.gistList[this.state.index].htmlUrl}</a>
                            </p>
                        </li>
                        <li>
                            <label className='ElfFormLabel'>Git Pull Url: </label>
                            <p>{this.props.gistList[this.state.index].gitPullUrl}</p>
                        </li>
                        <li>
                            <label className='ElfFormLabel'>Description: </label>
                            <p>{this.props.gistList[this.state.index].description}</p>
                        </li>
                        <li>
                            <label className='ElfFormLabel'>Owner Login: </label>
                            <p>{this.props.gistList[this.state.index].ownerLogin}</p>
                        </li>
                        <li>
                            <label className='ElfFormLabel'>File Name: </label>
                            <p>{this.props.gistList[this.state.index].files.join()}</p>
                        </li>
                    </ul>
                    <img className='gistImg' src={this.props.gistList[this.state.index].avatarUrl} alt='owner'/>
                </div>
                }
                <br />
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
