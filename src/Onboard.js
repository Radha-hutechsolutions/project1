import React,{ useState } from 'react';
import './Onboard.css';
import ViewOrganizations from './ViewOrganizations';
import { Tabs, Card, Form, Input, Row, Col, Button, Select } from 'antd';

function Onboard() {
    const { TabPane } = Tabs;
    const [form] = Form.useForm();
    const { Option } = Select;

    const [userDetails, setUserDetails] = useState(
      {organizationCode:'',GSTNumber:'',
      addressLine2:'', organizationName:'',
      domainName:'', phone:'', PINCode:'', 
      state:'',
      Country:'', CINNumber:'', 
      adressLine1:'', city:'', useRole:'', 
      name:'',emailAddress:'',phoneNumber:''
      })
    const [allOrgDetails, setAllOrgDetails] = useState([])
    
    const saveEditOrgDetails = (orgDetails) => {
      setAllOrgDetails(orgDetails,allOrgDetails)
    }

    const onFinish = () => {
        const gstNumber = allOrgDetails.filter(details => details.GSTNumber==userDetails.GSTNumber || details.organizationCode==userDetails.organizationCode || details.emailAddress==userDetails.emailAddress)
        if(gstNumber.length===0){
          setAllOrgDetails([userDetails,...allOrgDetails])
          console.log(allOrgDetails)
          form.resetFields()
      }
      else{
        alert("already exists")
      }
      }

      const onhandleUserDetails= (e) =>{
        if(e.target == undefined ){
          setUserDetails({...userDetails,["state"]:e})
          console.log(e)
        }
        // else if(e.target.name === "GSTNumber"){
          
        //   console.log('GST Number',gstNumber)
        //   if(gstNumber==null){
        //   setUserDetails({...userDetails,["state"]:e.target.value})
        //   }
        //   else{
        //     alert("GST Number already exists")
        //   }
        // }
        else{
        const {name,value} = e.target
        setUserDetails({...userDetails,[name]:value})
        console.log(e)
        }
      }

    function callback(key) {
        console.log(key);
      }

  return ( 
  <div className="onboard-container">
      <div className="onboar-tabs">
      <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Organization Onboarding" key="1">
    <div>
    <Card title="Organization Details" bordered={false}>
    <div className="onboar-details">
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      form={form}
    >
    <Row>
    <Col xs={{ span: 18, offset: 1 }} lg={{ span: 5, offset: 3 }}>
         <Form.Item
        label="Organization Code"
        name="Organization Code"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="organizationCode"/>
        </Form.Item>
        <Form.Item
        label="GST Number"
        name="GST Number"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="GSTNumber"/>
        </Form.Item>
        <Form.Item
        label="Address Line2"
        name="Address Line2"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="addressLine2"/>
        </Form.Item>
        <Form.Item name="state" label="state" rules={[{ required: true }]}>
        <Select
          onChange={onhandleUserDetails}
          allowClear
        >
          <Option name="state" value="Karnataka">Karnataka</Option>
          <Option name="state" value="Andra Pradesh">Andra Pradesh</Option>
          <Option name="state" value="other">other</Option>
        </Select>
      </Form.Item>
        {/* <Form.Item
        label="state"
        name="state"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="state"/>
        </Form.Item> */}
    </Col>
    <Col xs={{ span: 18, offset: 1 }} lg={{ span: 5, offset: 1 }}>
        <Form.Item
        label="Organization Name"
        name="Organization Name"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="organizationName"/>
        </Form.Item>
        <Form.Item
        label="Domain Name"
        name="Domain Name"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="domainName"/>
        </Form.Item>
        <Form.Item
        label="Phone"
        name="Phone"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="phone"/>
        </Form.Item>
        <Form.Item
        label="PIN Code"
        name="PIN Code"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="PINCode"/>
        </Form.Item>
        </Col>
        <Col xs={{ span: 18, offset: 1 }} lg={{ span: 5, offset: 1 }}>
        <Form.Item
        label="Country"
        name="Country"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="Country"/>
        </Form.Item>    
        <Form.Item
        label="CIN Number"
        name="CIN Number"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="CINNumber"/>
        </Form.Item>
        <Form.Item
        label="Adress Line1"
        name="Adress Line1"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="adressLine1"/>
        </Form.Item>
        <Form.Item
        label="City"
        name="City"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input name="city"/>
        </Form.Item>
        </Col>
    </Row>
    <div>
    <Card title="Organization Access" bordered={false}>
        <Row>
        <Col xs={{ span: 18, offset: 1 }} lg={{ span: 4, offset: 3 }}>
    <Form.Item
        label="Use Role"
        name="Use Role"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
        <Input name="useRole"/>
      </Form.Item>
      </Col>
      <Col xs={{ span: 18, offset: 1 }} lg={{ span: 4, offset: 1 }}>
      <Form.Item
        label="Name"
        name="Name"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input name="name"/>
      </Form.Item>
      </Col>
      <Col xs={{ span: 18, offset: 1 }} lg={{ span: 4, offset: 1 }}>
      <Form.Item
        label="Email Address"
        name="Email Address"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input name="emailAddress"/>
      </Form.Item>
      </Col>
      <Col xs={{ span: 18, offset: 1 }} lg={{ span: 4, offset: 1 }}>
      <Form.Item
        label="Phone Number"
        name="Phone Number"
        onChange={onhandleUserDetails}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input name="phoneNumber"/>
      </Form.Item>
      </Col>
      </Row>
      <Row>
        <Col xs={{ span: 14, offset: 2 }} lg={{ span: 4, offset: 19 }}>
      <div className="buttons">
      <Form.Item >
      <Button type="primary" onClick={() => {form.resetFields()}} >
         Cancel
      </Button>
      </Form.Item>
      <Form.Item >
      <Button type="primary"  htmlType="submit">
         Save
      </Button>
      </Form.Item>
      </div>
      </Col>
      </Row>
    </Card>
  </div>
      </Form>
      </div>
    </Card>
  </div>
    </TabPane>
    <TabPane tab="View all" key="2">
      <ViewOrganizations allOrgDetails={allOrgDetails} saveEditOrgDetails={saveEditOrgDetails}/>
    </TabPane>
  </Tabs>
  </div>
  </div>
)
}

export default Onboard;
