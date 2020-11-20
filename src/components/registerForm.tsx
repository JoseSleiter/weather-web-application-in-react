import React from 'react';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

interface IMyProps {
  visible: boolean;
  onCloseRegister: Function;
}

class RegisterForm extends React.Component<IMyProps> {
  constructor(props: IMyProps) {
    super(props);
  }
  showDrawer = () => {
    // this.setState({
    //   visible: true,
    // });
  };

  onClose = () => {
    this.props.onCloseRegister();
    // this.setState({
    //   visible: false,
    // });
  };

  render() {
    return (
      <>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={this.onClose}
          visible={this.props.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col flex={3}>
                {/* <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                > */}
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please insert your email!' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                {/* <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item> */}
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default RegisterForm;
