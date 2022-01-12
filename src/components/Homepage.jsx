import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic,Card, BackTop  } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptoQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptoQuery(12);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>

        <Col span={12}><Card><Statistic title="Total Cryptocurrencies" value={globalStats.total} /> </Card></Col>
        <Col span={12}><Card><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Card></Col>
        <Col span={12}><Card><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Card></Col>
        <Col span={12}><Card><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Card></Col>
        <Col span={12}><Card><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Card></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 12 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;