import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import { Card } from 'antd';

import { Form, Input, Button, Checkbox, Select } from 'antd';
import { Divider } from 'antd';
import {
  InstagramOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from '@ant-design/icons';

import RegisterForm from './../components/registerForm';
import LoginForm from './../components/loginForm';

function Login() {
  const [visible, setVisible] = useState(false);
  const { Title, Paragraph, Text, Link } = Typography;

  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };

  const onShowDrawer = () => {
    setVisible(!visible);
    console.log('onShowDrawer', visible);
  };

  const onCloseRegister = () => {
    setVisible(!visible);
  };

  return (
    <div className="Login">
      <div id="home">
        <Row justify="center" align="middle">
          <Col flex="auto">
            <div className="content__login">
              <Card style={{ maxWidth: '500px' }}>
                <Title>Company Logo</Title>
                <LoginForm></LoginForm>
                <Divider></Divider>
                <Button
                  type="primary"
                  style={{ marginBottom: '10px' }}
                  icon={<FacebookOutlined />}
                  block
                >
                  Login with twitter
                </Button>
                <Button
                  type="primary"
                  style={{ marginBottom: '10px' }}
                  icon={<InstagramOutlined />}
                  block
                >
                  Login with twitter
                </Button>
                <Button
                  type="primary"
                  style={{ marginBottom: '10px' }}
                  icon={<GoogleOutlined />}
                  block
                >
                  Login with twitter
                </Button>
                Do you have not account?{' '}
                <a type="primary" onClick={onShowDrawer}>
                  register now!
                </a>
              </Card>
            </div>
          </Col>
          <Col flex={3}>
            <div className="content__img">
              <div className="background__img"></div>
            </div>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col flex="auto">
            <RegisterForm
              visible={visible}
              onCloseRegister={onCloseRegister}
            ></RegisterForm>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
