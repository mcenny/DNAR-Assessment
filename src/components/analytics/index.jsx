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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({ selectedCoin, market }) => {
  const percentageChange = selectedCoin.market_data.price_change_percentage_24h;
  console.log(market, ":: market");
  return (
    <AnalyticsStyle>
      <div className='chart'>
        <div className='priceInfo'>
          <h3 className='price'>
            {`$${selectedCoin.market_data.current_price.usd
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
          </h3>
          <p
            className='priceChange'
            style={percentageChange >= 0 ? null : { color: "red" }}
          >
            {percentageChange >= 0 ? "+" : ""}
            {percentageChange}%
            <span
              className='icon'
              style={percentageChange >= 0 ? null : { color: "red" }}
            >
              {percentageChange >= 0 ? <BsGraphUp /> : <BsGraphDown />}
            </span>
          </p>
        </div>
        <div className='graph'>
          <App />
        </div>
      </div>
    </AnalyticsStyle>
  );
};

const Exchange = ({ selectedCoin }) => {
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

export const Analytics = ({ selectedCoin, market }) => {
  return (
    <AnalyticsStyle>
      <div className='analyticsWrapper'>
        <div className='analytics'>
          <div className='searchInput'>
            <SearchInput />
            <div className='datePicker'></div>
          </div>
          <Chart selectedCoin={selectedCoin} market={market} />
          <div className='exchangeRank'>
            <div className='exchange'>
              <Exchange selectedCoin={selectedCoin} />
            </div>
            <div className='rank'>
              <div className='heading'>
                <div className='borderLeft'></div>
                <p className='text'>Alexa Rank</p>
              </div>
              <p className='rankValue'>
                {selectedCoin.public_interest_stats.alexa_rank}
              </p>
            </div>
          </div>
        </div>
        <div className='info'>
          <div className='coinLogo'>
            <img
              src={selectedCoin.image.thumb}
              alt='Coin logo'
              srcset={selectedCoin.image.thumb}
            />
          </div>
          <h2 className='heading'>Info Card</h2>
          <div className='description'>
            <h3 className='heading'>Description: </h3>
            <p className='text'>
              {selectedCoin.description.en.substring(0, 150) + "..."}
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
                <p>{selectedCoin.hashing_algorithm || "Unknown"}</p>
              </div>
              <div className='fact'>
                <p>Country of Origin</p>
                <p>{selectedCoin.country_origin || "Unknown"}</p>
              </div>
              <div className='fact'>
                <p>Category</p>
                <p>{selectedCoin.categories[0]}</p>
              </div>
            </div>
          </div>
          <div className='supplyInfo'>
            <div className='fact'>
              <p>Total Supply</p>
              <p>{selectedCoin.market_data.total_supply.toFixed(2)}</p>
            </div>
            <div className='fact'>
              <p>Max Supply</p>
              <p>
                {selectedCoin.market_data.max_supply
                  ? selectedCoin.market_data.max_supply.toFixed(2)
                  : "Unknown"}
              </p>
            </div>
            <div className='fact'>
              <p>Circulating</p>
              <p>{selectedCoin.market_data.circulating_supply.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </AnalyticsStyle>
  );
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    coin: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    coin: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    coin: 9800,
    amt: 2290,
  },
  {
    name: "Page E",
    uv: 1890,
    coin: 4800,
    amt: 2181,
  },
  {
    name: "Page D",
    uv: 2780,
    coin: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    coin: 4800,
    amt: 2181,
  },
  {
    name: "Page B",
    uv: 3000,
    coin: 1398,
    amt: 2210,
  },
  {
    name: "Page F",
    uv: 2390,
    coin: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    coin: 4300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <LineChart
      width={1000}
      height={250}
      data={data}
      margin={{
        top: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='coin'
        stroke='#2a7ec2'
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
