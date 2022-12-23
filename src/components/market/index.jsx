import React, { useEffect, useState } from "react";
import { MarketStyle } from "../styles/marketStyle";
import { RiSearchLine } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import axios from "axios";

const CoinSummary = ({ name, value, priceChange, symbol, id }) => {
  const priceIncrease = priceChange < 0 ? false : priceChange === 0 ? 0 : true;
  const absChange = Math.abs(priceChange);
  return (
    <MarketStyle>
      <div className='coinCompWrapper'>
        <div className='borderLeft'></div>
        <div className='content'>
          <p className='coinName'>{`${name} (${symbol.toUpperCase()})`}</p>
          <div className='graphChange'>
            <span className='graph'>
              <hr />
            </span>
            <span
              className='priceChange'
              // style={priceIncrease === false ? { color: "red" } : null}
            >
              {priceIncrease === true
                ? "+$"
                : priceIncrease === false
                ? "-$"
                : priceIncrease === 0
                ? "$"
                : "$"}
              {absChange.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
          </div>
          <p className='price'>
            ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </p>
        </div>
      </div>
    </MarketStyle>
  );
};

const Coin = ({ name, symbol }) => {
  return (
    <MarketStyle>
      <div className='coin'>{`${name} (${symbol.toUpperCase()})`}</div>
    </MarketStyle>
  );
};

const SiderCard = () => {
  return (
    <MarketStyle>
      <div className='siderCard'>
        <h3 className='heading'>TOKEN2091 London</h3>
        <p className='text'>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
        </p>
        <span className='icon'>
          <FaLink />
        </span>
      </div>
    </MarketStyle>
  );
};

export const Market = () => {
  const [coinsBucket, setCoinsBucket] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins")
      .then((res) => {
        setCoinsBucket(res.data);
      })
      .catch((error) => {
        // console.log(error, "error");
      });
  }, []);

  // const [coin, setCoin] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`https://api.coingecko.com/api/v3/coins/${coinsBucket[0].id}`)
  //     .then((res) => {
  //       setCoin(res.data);
  //     })
  //     .catch((error) => {
  //       // console.log(error, "error");
  //     });
  // }, []);
  // console.log(coin);

  return (
    <MarketStyle>
      <div className='marketWrapper'>
        <div className='marketSearch'>
          <RiSearchLine className='icon' />
          <input type={"text"} className='input' placeholder='search' />
        </div>

        <div className='marketBody'>
          <div className='marketMain'>
            <div className='marketLeaders'>
              <h1 className='heading'>Market leaders</h1>
              <div className='coinsWrapper'>
                {coinsBucket.map((coin, index) => {
                  return (
                    <CoinSummary
                      key={index}
                      name={coin.name}
                      id={coin.id}
                      symbol={coin.symbol}
                      value={coin.market_data.current_price.usd}
                      priceChange={
                        coin.market_data.price_change_24h_in_currency.usd
                      }
                    />
                  );
                })}
              </div>
            </div>

            <div className='marketLeaders'>
              <h1 className='heading'>All Coins</h1>
              <div className='coinsWrapper'>
                <div className='coinsList'>
                  {coinsBucket.map((coin, index) => {
                    return (
                      <Coin key={index} name={coin.name} symbol={coin.symbol} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='marketSider'>
            <h2 className='siderHeader'>Events</h2>
            <div className='wrapper'>
              <SiderCard />
              <SiderCard />
              <SiderCard />
              <SiderCard />
              <SiderCard />
            </div>
          </div>
        </div>
      </div>
    </MarketStyle>
  );
};
