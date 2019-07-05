import { Breadcrumb, Icon, Row, Col, Layout, Card } from "antd";
import Link from "next/link";
import { connect } from "react-redux";
  import "../styles.less";
const { Header, Content } = Layout;
class Test extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <Row justify="space-around" type="flex">
            <Col span={20}>
              <Row justify="space-around" type="flex">
                <Col span={12} md={12} xs={24}>
                  <span>Welcome to ABC Burger</span>
                </Col>
                <Col span={12} md={12} xs={0}>
                  <span className="ml-30 float-right">
                    <Icon type="phone" theme="filled" /> Call us 09-999-9999
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Row justify="space-around" type="flex">
          <Col
            span={20}
            style={{
              textAlign: "right",
              height: 50,
              display: "flex",
              justifyContent: "flex-end",
              textTransform: "uppercase"
            }}
          >
            <div style={{ width: "fit-content", margin: "auto 0px" }}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div style={{ width: "fit-content", margin: "auto 0px" }}>
              <Link href="/">
                <a>Product</a>
              </Link>
            </div>
            <div style={{ width: "fit-content", margin: "auto 0px" }}>
              <Link href="/">
                <a>About us</a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row justify="space-around" type="flex">
          <Col span={20}>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Home</span>
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
                <Col span={6} md={6} sm={12} xs={24}>
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
                    <Card.Meta
                      title="Menu 3"
                      description="burger with tomato and onion"
                    />
                  </Card>
                </Col>
              </Row>
            </Content>
          </Col>
        </Row>
        <Row
          justify="space-around"
          type="flex"
          style={{ background: "#f9f9f9" }}
        >
          <Col md={8} xs={20} style={{ height: "40px", display: "flex" }}>
            <div style={{ margin: "auto 0px" }}>
              &copy; 2019 nextjs antd now.sh
            </div>
          </Col>
          <Col md={8} xs={20}>
            <div
              style={{
                margin: "auto",
                height: "40px",
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Icon
                style={{ margin: "auto 10px", fontSize: 20 }}
                type="facebook"
              />
              <Icon
                style={{ margin: "auto 10px", fontSize: 20 }}
                type="instagram"
              />
              <Icon
                style={{ margin: "auto 10px", fontSize: 20 }}
                type="google"
              />
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}
export default connect()(Test);
