import React from "react";
import { MarketStyle } from "../styles/marketStyle";
import { RiSearchLine } from "react-icons/ri";

const CoinSummary = ({ name, value, priceChange }) => {
  return (
    <MarketStyle>
      <div className='coinCompWrapper'>
        <div className='borderLeft'></div>
        <div className='content'>
          <p className='coinName'>{name}</p>
          <span className='graph'>graph</span>
          <span className='priceChange'>
            {true ? "+$" : "-$"}
            {priceChange.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </span>
          <p className='price'>
            ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </p>
        </div>
      </div>
    </MarketStyle>
  );
};

const Coin = ({ coinName, coinSymbol }) => {
  return (
    <MarketStyle>
      <div className='coin'>{`${coinName} (${coinSymbol})`}</div>
    </MarketStyle>
  );
};

export const Market = () => {
  const coins = [
    { name: "Bitcoin", value: 29500, priceChange: 5500 },
    { name: "BNB", value: 230, priceChange: 52 },
    { name: "Bitcoin", value: 29500, priceChange: 5500 },
    { name: "BNB", value: 230, priceChange: 52 },
    { name: "Bitcoin", value: 29500, priceChange: 5500 },
    { name: "BNB", value: 230, priceChange: 52 },
    { name: "Bitcoin", value: 29500, priceChange: 5500 },
    { name: "BNB", value: 230, priceChange: 52 },
  ];
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
                {coins.map((coin, index) => {
                  return (
                    <CoinSummary
                      key={index}
                      name={coin.name}
                      value={coin.value}
                      priceChange={coin.priceChange}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className='marketMain'>
            <div className='marketLeaders'>
              <h1 className='heading'>All Coins</h1>
              <div className='coinsWrapper'>
                {coins.map((coin, index) => {
                  return (
                    <Coin
                      key={index}
                      name={coin.name}
                      value={coin.value}
                      priceChange={coin.priceChange}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className='marketSider'></div>
        </div>
      </div>
    </MarketStyle>
  );
};
