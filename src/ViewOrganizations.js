import React,{ useState } from 'react';
import { Table, Tag, InputNumber, Input, Form, Space, Popconfirm } from 'antd';

function ViewOrganizations(props){       
    const { Column, ColumnGroup } = Table;
    const [form] = Form.useForm()

    const [editedOrgDetails, setEditedOrgDetails] = useState()

    const handleDelete = (key) => {
      const remainingOrgDetails = props.allOrgDetails.filter(deletedItems => deletedItems.GSTNumber!=key)
      props.saveEditOrgDetails(remainingOrgDetails)
    }

    const columns = [
      {
        title: 'GST Number',
        width: 100,
        dataIndex: 'GSTNumber',
        key: 'GSTNumber',
        fixed: 'left',
      },
      {
        title: 'organization Code',
        width: 150,
        dataIndex: 'organizationCode',
        key: 'organizationCode',
        fixed: 'left',
      },
      {
        title: 'address Line2',
        width: 100,
        dataIndex: 'addressLine2',
        key: 'addressLine2',
      },
      {
        title: 'organization Name',
        dataIndex: 'organizationName',
        key: 'organizationName',
        width: 150,
      },
      {
        title: 'domain Name',
        dataIndex: 'domainName',
        key: 'domainName',
        width: 150,
      },
      {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
        width: 150,
      },
      {
        title: 'PINCode',
        dataIndex: 'PINCode',
        key: 'PINCode',
        width: 150,
      },
      {
        title: 'state',
        dataIndex: 'state',
        key: 'state',
        width: 150,
      },
      {
        title: 'Country',
        dataIndex: 'Country',
        key: 'Country',
        width: 150,
      },
      {
        title: 'email Address',
        dataIndex: 'emailAddress',
        key: 'emailAddress',
        width: 150,
      },
      { title: 'adress Line1', dataIndex: 'adressLine1', key: 'adressLine1', width: 150 },
      {
        title: 'operation',
        dataIndex: 'operation',
        width: 150,
        render: (_,record) =>
        props.allOrgDetails.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={()=> handleDelete(record.GSTNumber)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      }
    ];

    

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }

    

  return (
      <div>
      {/* <Table dataSource={props.allOrgDetails}>
    <ColumnGroup title="view details">
      <Column title="organization Code" dataIndex="organizationCode" key="organizationCode" />
      <Column title="GST Number" dataIndex="GSTNumber" key="GSTNumber" />
    </ColumnGroup>
    <Column title="address Line2" dataIndex="addressLine2" key="addressLine2" />
    <Column title="organization Name" dataIndex="organizationName" key="organizationName" />
  </Table> */}
  
         <Table 
           columns={columns}  
          dataSource={props.allOrgDetails}  
          scroll={{ x: 1500, y: 300 }} 
        />  
  </div>
  )
}

export default ViewOrganizations;