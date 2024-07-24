
import { useState } from 'react';
import './App.css';
import { Button, Checkbox, Form, Input, Select, Space, Spin } from "antd";

function App() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    setLoading(true)
    setTimeout(() => {
      form.resetFields();
      setLoading(false)
    }, 500);
    
  }
  const clearForm = () => {
    form.setFieldsValue({
      myName: "",
      gender: "",
      graduated: "",
    });
  };

  return (
    <div className="App">
      <Spin spinning={loading}>
        <Form onFinish={onFinish} form={form} initialValues={{
          myName: "Miriam Nyachae",
          }}>
          <Form.Item label="Name" name={"myName"}>
            <Input placeholder="Enter Name"/>
          </Form.Item>
          <Form.Item label="Gender" name={"gender"}>
            <Select placeholder="Select Gender" options={[
              {
                label: "Male",
                value: "male"
              },
              {
                label: "Female",
                value: "female"
              }
            ]}/>
          </Form.Item>
          <Form.Item label="Graduated" name={"graduated"} valuePropName='checked'>
            <Checkbox/>
          </Form.Item>
          <Space direction='horizontal' size={12}>
          <Button danger onClick={clearForm}>Clear fields</Button>
            <Button htmlType='Reset' type='ghost'>
              Reset
            </Button>
            <Button htmlType="Submit" type="primary">Submit</Button>
          </Space>          
        </Form>
      </Spin>      
    </div>
  );
}

export default App;
