import React, {Component} from 'react';
import Debug from '../ElfLogger';
const logger = new Debug(false);
import {Alert, Button, StyleSheet, Text, View} from 'react-native';


class ElfElements extends Component {
    constructor(props) {
        logger.log("FORM INPUT", 'constructor called', props);
        super(props);
        logger.log("FORM PROPS", this.props);
    }


    render() {
        const common = {
            id: this.props.id,
            value: this.props.defaultValue,
            onChange: this.props.onChange
        };

        switch (this.props.type) {

            case 'year':
                return (
                    <input
                        {...common}
                        type="number"
                        value={this.props.value || new Date().getFullYear()}
                    />
                );

            case 'paragraph':
                return <Text
                    className="ElfFormParagraph"
                    id={this.props.id}

                    onChange={this.props.onChange}
                >{this.props.value}</Text>;

            case 'textarea':
                return <textarea {...common} className="ElfFormInput" value={this.props.value} />;

            case 'text': {
                return <input
                    className="ElfFormInput"
                    id={this.props.id}
                    value={this.props.value}
                    type={this.props.type}
                    onChange={this.props.onChange}
                />;
            }

            default:
                return <p
                    className="ElfFormParagraph"
                    id={this.props.id}

                    onChange={this.props.onChange}
                >{this.props.value}</p>;
        }
    }
}

export default ElfElements