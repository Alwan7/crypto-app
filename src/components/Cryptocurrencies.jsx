import React, {useState, useEffect} from 'react'
import millify from 'millify';
import {Link} from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptoQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100

  const { data: cryptosList, isFetching } = useGetCryptoQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    
    
    const filtredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLocaleLowerCase()));
    setCryptos(filtredData)
  }, [cryptosList, search])
   

  console.log(cryptos);
  return (
    <>
      {!simplified && (
    <div className='search-crypto'>
            <Input placeholder='Search Crypto' onChange={(e) => setSearch(e.target.value)} />

          </div>
      )}
      
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank}. ${currency.name}. ${currency.symbol}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p> Price: {millify(currency.price) } $ </p>
                <p> Market Cap: {millify(currency.marketCap) }</p>
                <p> Daily change: {millify(currency.change) } %</p>
             </Card>
              
            </Link>

          </Col>
        ))}

      </Row>
      
    </>
  )
}

export default Cryptocurrencies
