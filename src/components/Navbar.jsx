import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar,Layout, Space } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import logo from '../images/crypto.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [collapsed, setcollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const { Header, Content, Footer, Sider } = Layout;
  const { Title } = Typography;
  return (
    <Sider style={{ minHeight: '100vh' }} collapsible collapsed={collapsed} onCollapse={setcollapsed}>
    <div >
      <div >
        
          <Menu theme="dark"
          >
            
             <Typography.Title level={5} className="logo" ><Avatar src={logo} size="large" /></Typography.Title>
         </Menu>
        
        
        </div>
        <br />
       
   
          
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      
      </div>
      </Sider>
  );
};

export default Navbar;