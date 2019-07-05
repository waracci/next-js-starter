import Link from "next/link";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Breadcrumb, Icon, Row, Col, Card, Layout } from "antd";
const { Header, Content } = Layout;
import Counter from "./counter";
import Clock from "./clock";
import { loadData } from "../redux/actions/actions";

class Page extends React.Component {
  componentDidMount() {
    // const { getDataAction } = this.props;
    // getDataAction();
    // this.props.dispatch(loadData())
  }

  render() {
    // console.log(this.props)
    const {
      title,
      lastUpdate,
      light,
      linkTo,
      NavigateTo,
      placeholderDataFromState,
      error
    } = this.props;
    return (
      <div>
        <style jsx>{`
          // .panel {
          //   padding: 15px;
          //   display: border-box;
          //   background-color: #d1d1d1;
          // }
          .card {
            max-height: 400px;
          }
          .light {
            background-color: #fff;
          }
        `}</style>
        <h1>{title}</h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <Counter />
        <nav>
          <Link href={linkTo}>
            <a>Navigate: {NavigateTo}</a>
          </Link>
          <br />
          <Link href="/test">
            <a>Navigate: AntD Test page</a>
          </Link>
        </nav>
        <div className={light ? "light" : ""}>
          <h1>Clients</h1>
          <Row justify="space-around" type="flex">
            <Col span={20}>
              <Breadcrumb>
                <Breadcrumb.Item href="">
                  <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/other">
                  <Icon type="user" />
                  <span>Other page</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row justify="space-around" type="flex">
            <Col
              span={20}
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                minHeight: "500px"
              }}
            >
              <Content>
                <Row gutter={16}>
                  {placeholderDataFromState &&
                    placeholderDataFromState.map(data => (
                     
                        <Col span={3} md={3} sm={6} xs={12} key={data.name}  style={{ width: 400, marginBottom: 100 }}>
                           <div className="card">
                             <Card
                            hoverable
                            cover={
                              <img
                                alt="image3"
                                style={{ width: "100%" }}
                                src="/static/images/burger3.jpg"
                              />
                            }
                          >
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                            <p>Website: {data.website}</p>
                            <p>Phone: {data.phone}</p>
                            <p>Company Name: {data.company.name}</p>
                          </Card>
                        </div>
                        </Col>
                      
                    ))}
                </Row>
              </Content>
            </Col>
          </Row>
          <div />
        </div>
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      </div>
    );
  }
}
// Page.getInitialProps = async function(props) {
//   const { store, isServer } = props.ctx
//   console.log( "store.dispatch(loadData())", store.getState())
//   // if (!store.getState().placeholderData) {
//     store.dispatch(loadData())
//   // }

//   return { isServer }
// }
// Page.propTypes = {
//   placeholderDataFromState: PropTypes.shape()
// }

// Page.defaultProps = {
//   placeholderDataFromState: []
// };

const mapStateToProps = state => {
  return {
    placeholderDataFromState: state.firstReducer.placeholderData,
    lastUpdate: state.firstReducer.lastUpdate
  };
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       // getDataAction: loadData
//     },
//     dispatch
//   );

export default connect(
  mapStateToProps,
  null
)(Page);
