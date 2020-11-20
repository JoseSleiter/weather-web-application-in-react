import React, { useState, useEffect } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { Input, Button, Col, Row, Typography } from 'antd';

function Home() {
  const API =
    'https://api.openweathermap.org/data/2.5/forecast?q=Barcelona,ES&appid=98f0cb62f51ecdb6d967108849013e71';
  const { Title, Paragraph, Text, Link } = Typography;
  const { Header, Content, Footer } = Layout;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [itemWheater, setItemWheater] = useState({
    cod: '',
    message: 0,
    cnt: 0,
    list: [],
    city: {},
  });
  useEffect(() => {
    fetch(API + '')
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItemWheater(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log('error', error);
        }
      );
  }, []);

  const uTimeToDate = (unix_timestamp: number = 0) => {
    return new Date(unix_timestamp * 1000);
  };
  const uDateToString = (
    date: number,
    options: string = 'weekday',
    type: string = 'short'
  ) => {
    return uTimeToDate(date).toLocaleString('default', {
      [options]: type,
    });
  };

  const breadcrumbStyle = {
    margin: '16px 0',
    padding: '0 50px',
  };

  return (
    <div className="Home">
      <Layout className="layout home__page">
        <Header>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['2']}></Menu>
        </Header>
        <Content>
          <Breadcrumb style={breadcrumbStyle}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>

          <div className="site-layout-content">
            <div className="container__search">
              <Row justify="center">
                <Col flex="auto">
                  <div className="section__find__location container">
                    <input
                      type="text"
                      className="section__find__location input--search circule-brd"
                      placeholder="Find your location..."
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="container__weather">
              <Row justify="center">
                <Col flex="auto">
                  <div className="section__weather container">
                    {itemWheater.list
                      .filter(
                        (item: any) => item.dt_txt.split(' ')[1] == '03:00:00'
                      )
                      .map((item: any) => (
                        <div
                          className="section__weather--item item-card"
                          key={item.dt}
                        >
                          <div className="section__weather--item title">
                            <div className="day">
                              {uDateToString(item.dt, 'weekday', 'long')}
                            </div>
                            <div className="date">
                              {uDateToString(item.dt, 'month', 'short')}
                            </div>
                          </div>
                          <div className="section__weather--item info">
                            <div className="section__weather--item info--country">
                              {/* {`${itemWheater.city.name}, ${itemWheater.city.country}`} */}
                            </div>
                            <div className="section__weather--item info--temp">
                              23ºC
                            </div>
                            <div className="section__weather--item info--feature">
                              20% 18km/h East
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default Home;
