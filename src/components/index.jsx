import React, { useEffect, useState } from "react";
import { DashboardStyle } from "./styles/dashboardStyle";
import { HiMenuAlt4 } from "react-icons/hi";
import { SiMarketo } from "react-icons/si";
import { IoStatsChart } from "react-icons/io5";
import { Market } from "./market";
import { Analytics } from "./analytics";
import axios from "axios";

export const Dashboard = () => {
  const [activePage, setActivePage] = useState({
    market: true,
    analytics: false,
  });

  const [selectedCoin, setSelectedCoin] = useState();
  const [market, setMarket] = useState();

  const handleSelectCoin = (coinId) => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => {
        setSelectedCoin(res.data);
        setActivePage({
          market: false,
          analytics: true,
        });
      })
      .catch((error) => {
        // console.log(error, "error");
      });

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`
      )
      .then((res) => {
        setMarket(res.data.prices);
        setActivePage({
          market: false,
          analytics: true,
        });
      })
      .catch((error) => {});
  };

  return (
    <DashboardStyle>
      <div className='dashboardWrapper'>
        <div className='sider'>
          <div className='menu'>
            <HiMenuAlt4 />
          </div>
          <div className='sidebar'>
            <span
              className={activePage.market ? "menuItem" : "unselectedMenu"}
              onClick={() => {
                setActivePage({ market: true, analytics: false });
              }}
            >
              <SiMarketo />
            </span>
            <span
              className={activePage.analytics ? "menuItem" : "unselectedMenu"}
              onClick={() => {
                setActivePage({ market: false, analytics: true });
              }}
            >
              <IoStatsChart />
            </span>
          </div>
        </div>
        <div className='main'>
          {activePage.market && (
            <Market handleSelectCoin={handleSelectCoin} market={market} />
          )}
          {activePage.analytics && selectedCoin && (
            <Analytics selectedCoin={selectedCoin} />
          )}
        </div>
      </div>
    </DashboardStyle>
  );
};
