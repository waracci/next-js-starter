import React from 'react'
import { connect } from 'react-redux'
import Head from "next/head";

import { startClock } from '../redux/actions/ClockAction';
import Page from '../components/page'
import { loadData } from '../redux/actions/DataAction';

class Other extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(loadData())
    return { isServer }
  }
  componentDidMount () {
    this.props.dispatch(startClock())
    // this.props.dispatch(loadData())
  }

  render () {
    console.log(this.props)
    return (
    <div>
      {/* <Head>
          <title>Other Page</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head> */}
      <Page title='Other Page' linkTo='/' NavigateTo='Index Page' />
    </div>
    )
  }
}

export default connect()(Other)
