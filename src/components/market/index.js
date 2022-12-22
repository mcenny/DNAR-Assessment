import React from 'react'
import { MarketStyle } from '../styles/marketStyle'
import { RiSearchLine } from 'react-icons/ri'

const Coin = () => {
  return(
    <MarketStyle>
      <div className='coinCompWrapper'>
        coin
      </div>
    </MarketStyle>
  )
}

export const Market = () => {
  return (
    <MarketStyle>
        <div className='marketWrapper'>
          <div className='marketSearch'>
            <RiSearchLine className='icon'/>
            <input type={'text'} className='input' placeholder='search'/>
          </div>
          <div className='marketBody'>
            <div className='marketMain'>
              <div className='marketLeaders'>
                <h1 className='heading'>Market leaders</h1>
                <div className='coinsWrapper'>
                  <Coin />
                  <Coin />
                </div>
              </div>
            </div>
            <div className='marketSider'></div>
          </div>
        </div>
    </MarketStyle>
  )
}
