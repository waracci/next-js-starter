import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { increment, decrement, reset } from "../redux/actions/CounterAction";

class Counter extends Component {
  increment = () => {
    const { incrementAction } = this.props;
    incrementAction();
  };

  decrement = () => {
    const { decrementAction } = this.props;
    decrementAction();
  };

  reset = () => {
    const { resetAction } = this.props;
    resetAction();
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.firstReducer.count
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementAction: increment,
      decrementAction: decrement,
      resetAction: reset
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
