import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfElements from './ElfElements';
import Debug from '../ElfLogger'
const logger = new Debug(false);

class ShowUserInfo extends Component {

    constructor(props) {
        super(props);
        if (!this.props.gitUser) {
            throw new Error("No user data");
        }
        //this.shouldUpdate = true;
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props.gitUser, null, 4));
    }

    getForm = (field, index) => {
        logger.log(JSON.stringify(field));
        return (
            <div className="ElfFormRow" key={field.id}>
                <label className="ElfFormLabel" htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                             value={this.props.gitUser[field.id] ? this.props.gitUser[field.id] : "N/A" }
                             onChange={this.props.onChange}
                />
            </div>
        )
    };


    render() {
        return (
                <form className="Form">
                    <button id="getUser" onClick={this.props.onChange}>Get Git User</button>
                    {
                    this.props.fields.map((field, index) => {
                        return this.getForm(field, index)
                    })
                }

                </form>
        );
    }
}

export default ShowUserInfo;

