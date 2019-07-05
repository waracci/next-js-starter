import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { startClock } from "../redux/actions/ClockAction";
import { loadData } from '../redux/actions/DataAction';
import Page from "../components/page";
import "../styles.less"
class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(loadData());
    // return props.ctx.store.dispatch(startClock())
    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
    // this.props.dispatch(loadData())
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Head>
          <title>🤔</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Page
          title="Index Page"
          linkTo="/other"
          NavigateTo="Other Page"
          light="light"
        />
      </div>
    );
  }
}

export default connect()(Index);
