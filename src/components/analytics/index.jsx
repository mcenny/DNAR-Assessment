import React from "react";
import { AnalyticsStyle } from "../styles/analyticsStyle";
import { SearchInput } from "../market";
import {
  BsGraphUp,
  BsGraphDown,
  BsArrowRight,
  BsGlobe2,
  BsGithub,
} from "react-icons/bs";
import { GrReddit } from "react-icons/gr";

const Chart = () => {
  return (
    <AnalyticsStyle>
      <div className='chart'>
        <div className='priceInfo'>
          <h3 className='price'>
            {`$${(29800.65).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
          </h3>
          <p className='priceChange'>
            +2.43%{" "}
            <span className='icon'>
              {true ? <BsGraphUp /> : <BsGraphDown />}
            </span>
          </p>
        </div>
        <div className='graph'>graph here!</div>
      </div>
    </AnalyticsStyle>
  );
};

const Exchange = () => {
  const currencies = [
    { value: "usd", label: "USD" },
    { value: "btc", label: "BTC" },
    { value: "cad", label: "CAD" },
  ];
  return (
    <AnalyticsStyle>
      <div className='exchangeCard'>
        <div className='heading'>
          <div className='borderLeft'></div>
          <p className='text'>Exchange</p>
        </div>
        <div className='exchangePrice'>
          <div className='sell-Buy'>
            <p className='exchangeSell-Buy'>
              <span>Sell</span> 6700
            </p>
            <div className='selectCurrency'>
              <select name='' currency id='currency '>
                {currencies.map((currency) => {
                  return (
                    <option value={currency.value}>{currency.label}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className='sell-Buy'>
            <p className='exchangeSell-Buy'>
              <span>Buy</span> 0.6378649
            </p>
            <div className='selectCurrency'>
              <select name='' currency id='currency '>
                {currencies.map((currency) => {
                  return (
                    <option value={currency.value}>{currency.label}</option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className='exchangeButton'>
          <p>1 BTC = 8434.43 USD</p>
          <button>
            Exchange <BsArrowRight className='icon' />
          </button>
        </div>
      </div>
    </AnalyticsStyle>
  );
};

export const Analytics = () => {
  return (
    <AnalyticsStyle>
      <div className='analyticsWrapper'>
        <div className='analytics'>
          <div className='searchInput'>
            <SearchInput />
            <div className='datePicker'></div>
          </div>
          <Chart />
          <div className='exchangeRank'>
            <div className='exchange'>
              <Exchange />
            </div>
            <div className='rank'>
              <div className='heading'>
                <div className='borderLeft'></div>
                <p className='text'>Alexa Rank</p>
              </div>
              <p className='rankValue'>9940</p>
            </div>
          </div>
        </div>
        <div className='info'>
          <div className='coinLogo'>
            <img src='/logo512.png' alt='Coin logo' srcset='/logo512.png' />
          </div>
          <h2 className='heading'>Info Card</h2>
          <div className='description'>
            <h3 className='heading'>Description: </h3>
            <p className='text'>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident.
            </p>
          </div>
          <div className='url'>
            <span className='website'>
              Website <BsGlobe2 className='icon' />
            </span>
            <span className='reddit'>
              <GrReddit className='icon' />
            </span>
            <span className='github'>
              <BsGithub className='icon github' />
            </span>
          </div>
          <div className='factsWrapper'>
            <h5 className='factsHeading'>Facts</h5>
            <hr />
            <div className='facts'>
              <div className='fact'>
                <p>Hashing Algorithm</p>
                <p>SHA-256</p>
              </div>
              <div className='fact'>
                <p>Country of Origin</p>
                <p>Nigeria</p>
              </div>
              <div className='fact'>
                <p>Category</p>
                <p>Cryptocurrency</p>
              </div>
            </div>
          </div>
          <div className='supplyInfo'>
            <div className='fact'>
              <p>Total Supply</p>
              <p>21000000.0</p>
            </div>
            <div className='fact'>
              <p>Max Supply</p>
              <p>2100000.0</p>
            </div>
            <div className='fact'>
              <p>Circulating</p>
              <p>1876196.0</p>
            </div>
          </div>
        </div>
      </div>
    </AnalyticsStyle>
  );
};
