import React, { useState } from "react";
import { DashboardStyle } from "./styles/dashboardStyle";
import { HiMenuAlt4 } from "react-icons/hi";
import { SiMarketo } from "react-icons/si";
import { IoStatsChart } from "react-icons/io5";
import { Market } from "./market";
import { Analytics } from "./analytics";

export const Dashboard = () => {
  const [activePage, setActivePage] = useState({
    market: true,
    analytics: false,
  });

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
          {activePage.market && <Market />}
          {activePage.analytics && <Analytics />}
        </div>
      </div>
    </DashboardStyle>
  );
};
