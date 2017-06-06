import React from 'react';
import './App.css';
import {connect} from 'react-redux';
let AppConnect = ({statement, kind, verifyStatement, denyEverything, noComment}) => {

    return (
        <div className="App">
            <div className="App-intro">
                <h2>Welcome to React</h2>
            </div>
            <h1>Political Science AppConnect Reduxx</h1>

            <p>This component does not use redux. It uses something redux-like.</p>
            <p>{statement}</p>
            <p>{kind}</p>
            <hr />
            <button onClick={verifyStatement}>Verify</button>
            <button onClick={denyEverything}>Deny</button>
            <button onClick={noComment}>No Comment</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        statement: state.statement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deny: () => {
            dispatch({type: 'DENY'})
        },
        verify: () => {
            dispatch({type: 'VERIFY'})
        },
        noComment: () => {
            dispatch({type: 'NO COMMENT'})
        }
    }
};

AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppConnect);


export default AppConnect;
