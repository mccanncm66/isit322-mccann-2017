import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfElements from './ElfElements';
import Debug from '../assets/ElfLogger'
import {Button} from 'react-bootstrap';
const logger = new Debug(false);

class ShowUserInfo extends Component {

    constructor(props) {
        super(props);
        if (!this.props.gitUser) {
            throw new Error("No user data");
        }
        this.state = {
            userName: ''
        };
        this.getUserInfo = this.getUserInfo.bind(this);
        //this.shouldUpdate = true;
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props.gitUser, null, 4));
    }

    getForm = (field, index) => {
        logger.log(JSON.stringify(field));
        return (
            <div className="form-group" key={field.id}>
                <label className="col-sm-2"
                       htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                             value={this.props.gitUser[field.id] ? this.props.gitUser[field.id] : "N/A" }
                             onChange={this.props.onChange}
                />
            </div>
        )
    };

    userNameHandleChange = (value) => {
        logger.log(this.state.userName);
        this.setState({
            userName: value
        });
    };

    getUserInfo = () => {
        const userName = this.state.userName ? this.state.userName : 'mccanncm66';
        this.props.onChange(userName);
    };

    render() {
        return (
            <div>
                <form>
                    <div className="jumbotron">
                        <label htmlFor="tbUserName" className="col-sm-2">User Name:</label>
                        <input id="tbUserName" placeholder="mccanncm66" className="form-control" type="text" onChange={(e) => this.userNameHandleChange(e.target.value)}></input>
                        <br />
                        <Button id="getUser" bsStyle="primary" className="btn btn-toolbar" onClick={this.getUserInfo}>Get Git User</Button>
                    </div>
                </form>
                <div className="scrollbox"><br />
                    <form>
                        {
                            this.props.fields.map((field, index) => {
                                return this.getForm(field, index)
                            })
                        }

                    </form>
                </div>
            </div>
        );
    }
}

export default ShowUserInfo;

