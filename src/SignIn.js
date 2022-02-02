import React,{ useState } from 'react';
import 'antd/dist/antd.css';
import './SignIn.css';
import Home from './Home';
import { Form, Input, Checkbox, Button, Layout, Row, Col, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [loginDetails, setLoginDetails] = useState({email:'',password:''})
  //const [navigate, setNavigate] = useState(false);
  const { Header, Footer, Sider, Content } = Layout;
  
  const navigate = useNavigate()
 
//   if(navigate){
//     return <Home />
// }

  const layout = {
    labelCol: { span: 12 },
    wrappercol: { span: 12 },
  };

  const tailLayout = {
    wrappercol: { offset: 8, span: 16 },
  };

    const onFinish = () => {
      console.log("email is", loginDetails.email)
      console.log("password is", loginDetails.password)
      console.log("password is")
      // setNavigate(true)
      navigate('/Home')
      // <Link ></Link>
    }
    
    //const onFinishFailed = () => {
    //  console.log('Failed:');
    //}

    const handleInputValues = (e) => {
        const {name,value} = e.target
        setLoginDetails({...loginDetails,[name]:value})
    }

return (
  <div className="container">
    <div>
        <Row>
           <Col xs={{ span: 4, offset: 1 }} lg={{ span: 0, offset: 2 }}></Col>
           <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
               <img className="header__logo" src={require('./images/mobile.png')} />
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 12, offset: 2 }}></Col>
        </Row>
    </div>
    <div>
         <Row>
            <Col xs={{ span: 1, offset: 1 }} lg={{ span: 0, offset: 0 }}></Col>
            <Col xs={{ span: 0, offset: 0 }} lg={{ span: 10, offset: 2 }}>
                <img src={require('./images/logo.png')} />
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 10, offset: 2 }}>
               <div id="site-card-border1" className="site-card-border-less-wrapper">
                  <Card >
                    <div className="sign-up-link" wrappercol={{ offset: 0, span: 24 }}>
                       <h1>Sign In</h1>
                       <h3>Don't have an account? <a>Sign Up</a></h3>
                    </div>
                    <Form
                     onFinish={onFinish}
                     layout="vertical"
                     autoComplete="on"
                    >
                      <Form.Item
                      label="email"
                      name="email"
                      onChange={handleInputValues}
                      rules={[{ type: "email", required: true, message: 'Please input your email!' }]}
                     >
                     <Input name="email"/>
                     </Form.Item>
                     <Form.Item
                      label="Password"
                      name="password"
                      onChange={handleInputValues}
                      rules={[{ required: true, message: 'Please input your password!' }]}
                     >
                     <Input.Password name="password"/>
                     </Form.Item>
                     <Form.Item  valuePropName="checked" wrappercol={{ offset: 0, span: 24 }} >            
                        <div className="forgetpassword">
                            <Checkbox>Remember me</Checkbox>
                            <a style={{display:"block"}}> forget password</a>
                        </div>
                     </Form.Item>
                     <Form.Item {...tailLayout}>
                       <Button type="primary" htmlType="submit">
                        Login
                     </Button>
                     </Form.Item>
                    </Form>
                  </Card>
               </div>
             </Col>
             <Col xs={{ span: 3, offset: 1 }} lg={{ span: 0, offset: 0 }}></Col>
         </Row>
    </div>
{/* <Form
      
      onSubmit={onFinish}
    >

      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Form.Item
        label="Username"
        name="username"
        onChange={handleInputValues}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
      </Row>
      <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Form.Item
        label="Password"
        name="password"
        onChange={handleInputValues}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
      </Row>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
      </Row>

    </Form> */}
 </div>
    
//   <Form>   
//   requiredMark={false}
//   colon={true}
//   name="basic"
//   layout="horizontal"
//   onFinish={onFinish}
//   autoComplete="off"
// >
//   <Form.Item 
//     name="emailId"
//     rules={[
//       {
//         type: "email",
//         required: true,
//         message: "Please input your Email Address!",
//       },
//     ]}
//   >
//     <Input placeholder="Enter Your Email" />
//   </Form.Item>

//   <Form.Item
    
//     name="password"
//     rules={[
//       {
//         required: true,
//         message: "Please input your Password!",
//       },
//     ]}
//   >
//     <Input.Password placeholder="Enter the Password" />
//   </Form.Item>

//   <Form.Item name="remember" valuePropName="checked">
//     <div className="forgotpassfield">
//       <Checkbox className="remembercheck">Remember Me</Checkbox>
//       <div className="forgotpassword">
//         {" "}
//         <a href onClick={() => history.push(RESET)}>
//           {" "}
//           Forgot Password
//         </a>
//       </div>
//     </div>
//   </Form.Item>

  
//     <Button
//       htmlType="submit"
//       onClick={handleSubmit}
//     >
//       Log In
//     </Button>
 
// </Form>
)
}

export default SignIn;
