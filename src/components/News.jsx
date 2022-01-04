import React, {useState} from 'react'
import millify from 'millify';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptoQuery } from '../services/cryptoApi';
import moment from 'moment';
import Loader from './Loader';


const News = ({ simplified }) => {
   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const count = simplified ? 6 : 10
  const { data } = useGetCryptoQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory, count})
  console.log(cryptoNews);
   if (!cryptoNews?.value) return <Loader />;
  return (
    <>
      <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Select.Option value="Cryptocurency">Cryptocurrency</Select.Option>
            {data?.data?.coins?.map((currency) => <Select.Option value={currency.name}>{currency.name}</Select.Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>{news.name}</Typography.Title>
                <img src={news?.image?.thumbnail?.contentUrl } alt="" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl } alt="" />
                  <Typography.Text className="provider-name">{news.provider[0]?.name}</Typography.Text>
                </div>
                <Typography.Text>{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
      
    </>
  )
}

export default News
