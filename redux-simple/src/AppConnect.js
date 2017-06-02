import React from 'react';
import './App.css';
import {connect} from 'react-redux';

let AppConnect = ({statement, kind, verifyStatement, denyEverything, noComment}) => {

    return (
      <div className="App">
        <div className="App-intro">
          <h2>Welcome to React</h2>
        </div>
          <h1>Political Science AppConnect Redux</h1>

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
        statement: state.statement,
        kind: state.kind
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        verifyStatement: () => {
            dispatch({ type: 'VERIFY' });
        },
        denyEverything: () => {
            dispatch({ type: 'DENY' });
        },
        noComment: () => {
            dispatch({ type: 'NO COMMENT' });
        }
    }
};

AppConnect = connect(mapStateToProps, mapDispatchToProps)(AppConnect);
export default AppConnect;