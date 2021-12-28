import React, { PureComponent } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space, Divider } from 'antd';
import Navbar from './components/Navbar';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails ';
import News from './components/News';
import Homepage from './components/Homepage';
import './App.css'


function App() {
const { Header, Footer, Sider, Content } = Layout

  return (
    <Layout>
      
        <Navbar />
      
      {/* <div className="main"> */}
        <Layout>
          <Header>header</Header>
          <Content>
        <div className='routes'>

              <Routes>
                  <Route path="/" element={<Homepage />} />
                  
                  <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                  <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                  <Route path="/news" element={<News />} />                                   
              </Routes>
            </div>
            </Content>
       
        <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
     </div>
     {/* </div> */}
     </Layout>
    </Layout>
  );
}

export default App;
