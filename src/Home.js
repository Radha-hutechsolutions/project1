import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Carousel, Row, Col, Card, Button, Drawer, Input, Breadcrumb, Dropdown } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuOutlined, BellFilled, ShoppingFilled, TrophyFilled, DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
  const { Header, Content, Footer, Sider } = Layout;
  const { Search } = Input;
  const [visible, setVisible] = useState(false);
  const { Meta } = Card;
 
  const navigate = useNavigate()

  const showDrawer = () => {
    setVisible(true);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
    </Menu>
  )

  const onClose = () => {
    setVisible(false);
  }

  const onSearch = value => console.log(value);

   return (
   <Layout className="layout">
    <Header>
      <div className="logo" />
      <Row>
        <Col xs={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 1 }}>
         <Button type="primary" onClick={showDrawer}>
          <MenuOutlined />
         </Button>
         <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
         <p>Some contents...</p>
         <p>Some contents...</p>
         <p>Some contents...</p>
         </Drawer>
       </Col>
       <Col xs={{ span: 1, offset: 2 }} lg={{ span: 1, offset: 0 }}>
         {/* <p  className="logo-header" style={{color:"white"}}>ANY LOGO HERE</p> */}
         <img className="logo-1" src={require('./images/mainheaderlogo.png')} />
       </Col>
       <Col xs={{ span: 0, offset: 0 }} lg={{ span: 6, offset: 6 }}>
         <Search onSearch={onSearch} placeholder="Search"  />
       </Col>
       <Col xs={{ span: 12, offset: 8 }} lg={{ span: 5, offset: 3 }}>
         <div className="nav-icons">
          <BellFilled className="icons-size"/>
          <ShoppingFilled className="icons-size"/>
          <TrophyFilled className="icons-size"/>
          <UserOutlined className="icons-size"/>
          <Dropdown overlay={menu}>
             <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               Hover me <DownOutlined />
             </a>
         </Dropdown> 
         </div>
       </Col>
      </Row>
    </Header>
    <Content>
      <div className="mini-header">
       <Row>
         <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 1 }}>
         <img className="logo-2" alt="example" src={require('./images/download.jpg')} />
          </Col>
          <Row>
          <Col xs={{ span: 24, offset: 1 }} lg={{ span: 24, offset: 12 }}>
            <p className="system-support-text"><b>For System support please contact your on-site super Admin</b></p>
          </Col>
          </Row>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 1, offset: 5 }}>
            <p className="system-support-num">+11288274</p>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 3, offset: 2 }}>
            <p className="date"><b>Thu 11,Mar 2021</b></p>
          </Col>
        </Row>
      </div>
    <div className="site-layout-content">
      <Row>
        <Col xs={{ span: 18, offset: 2 }} lg={{ span: 14, offset: 2 }}>
         {/* <Col xs={{ span: 11, offset: 6 }} lg={{ span: 0, offset: 0 }}> */}
          <Carousel autoplay style={{height:"100px"}}>
             <div>
                <h3>3</h3>
             </div>
             <div>
                <h3>4</h3>
             </div>
          </Carousel>
          {/* </Col>*/}
           
          <div className="sit-card">
               
                  <Card hoverable id="alignimagone" onClick={() => navigate('/Onboard')}>
                    <div className="card-align-images">
                      <img alt="example" className="img-inline" src={require('./images/emponboard.png')} />
                      <p><b>Onboard Employee</b></p>
                    </div>
                  </Card>
               <div>
                 <Card hoverable>
                    <div className="card-align-images">
                       <img alt="example" className="img-inline" src={require('./images/awards.png')} />
                       <p><b>Setup Rewards</b></p>
                    </div>
                 </Card>
               </div>
               <div>
                  <Card hoverable>
                   <div className="card-align-images">
                     <img alt="example" className="img-inline" src={require('./images/Calendar.svg').default} />
                     <p><b>Announcements</b></p>
                   </div>
                  </Card>
               </div>
            
        <div>
          <Card hoverable>
             <div className="card-align-images">
               <img alt="example" className="img-inline" src={require('./images/announcement.svg').default} />
               <p><b>Announcements</b></p>
             </div>
          </Card>
        </div>
        <div>
          <Card hoverable>
            <div className="card-align-images">
              <img alt="example" className="img-inline" src={require('./images/rewards.svg').default} />
              <p><b>Rewards point configuration</b></p>
            </div>
          </Card>
        </div>
        <div>
                  <Card hoverable>
                   <div className="card-align-images">
                     <img alt="example" className="img-inline" src={require('./images/Notification.svg').default} />
                     <p><b>Rewards point configuration</b></p>
                   </div>
                  </Card>
               </div>
      </div>
       </Col>
       {/* </Row>
       <Row> */}
       <Row> 
       <Col xs={{ span: 16, offset: 4 }} lg={{ span: 6, offset: 10 }}>
       <div className="side-cards">
           <Card style={{ width: 250 }}>
             <h4>My EL Points</h4>
             <h4>Points used this month</h4>
             <h4>Points earned this month</h4>
            </Card>
            <div className="site-card-border-less-wrapper">
              <Card title="Approvals" bordered={false} style={{ width: 250 }}>
                <p>Pending...</p>
              </Card>
            </div>
            <div className="site-card-border-less-wrapper">
              <Card title="My Activity Log" bordered={false} style={{ width: 250 }}>
                <p>Activity1</p>
                <p>Activity2</p>
              </Card>
            </div>
            </div>
        </Col>
        </Row>
      </Row>
     </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>
   //<div>
  //   <div style={{backgroundColor:"blue"}}>
  //   <Button type="primary" onClick={showDrawer}>
  //   <MenuOutlined />
  //     </Button>
  //     <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
  //       <p>Some contents...</p>
  //       <p>Some contents...</p>
  //       <p>Some contents...</p>
  //     </Drawer>
  //     <Search onSearch={onSearch} placeholder="Search" style={{ width: 200 }} />
  //     <BellOutlined />
  //     <ShoppingCartOutlined />
  //     <UserOutlined /><h6>My Account</h6>
  //   </div>
  //   <div style={{border:"grey"}}>
  //     <p><b>For System support please contact your on-site super Admin</b></p>
  //   </div>
  //   <Row>
  //       <Col xs={{ span: 11, offset: 1 }} lg={{ span: 14, offset: 2 }}>
  //   <Carousel autoplay>
  //   {/* <div>
  //   <img src={require('./images/mobile.png')} />
  //   </div>
  //   <div>
  //   <img src={require('./images/logo.png')} />
  //   </div> */}
  //   <div>
  //     <h3>3</h3>
  //   </div>
  //   <div>
  //     <h3>4</h3>
  //   </div>
  // </Carousel>
  // <div className="site-card-wrapper">
  //   <Row gutter={16}>
  //     <Col span={8}>
  //       <Card title="Card title" bordered={false}>
  //         Card content
  //       </Card>
  //     </Col>
  //     <Col span={8}>
  //       <Card title="Card title" bordered={false}>
  //         Card content
  //       </Card>
  //     </Col>
  //     <Col span={8}>
  //       <Card title="Card title" bordered={false}>
  //         Card content
  //       </Card>
  //     </Col>
  //   </Row>
  // </div>
  // </Col>
  // <Col xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
  // <Card style={{ width: 300 }}>
  //   <h4>My EL Points</h4>
  //   <h4>Points used this month</h4>
  //   <h4>Points earned this month</h4>
  // </Card>
  // <div className="site-card-border-less-wrapper">
  //   <Card title="Card title" bordered={false} style={{ width: 300 }}>
  //     <p>Card content</p>
  //     <p>Card content</p>
  //     <p>Card content</p>
  //   </Card>
  // </div>
  // <div className="site-card-border-less-wrapper">
  //   <Card title="Card title" bordered={false} style={{ width: 300 }}>
  //     <p>Card content</p>
  //     <p>Card content</p>
  //     <p>Card content</p>
  //   </Card>
  // </div>
  // </Col>
  // </Row>
  // </div>
   )
}

export default Home;
