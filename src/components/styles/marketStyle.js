import styled from "styled-components";

export const MarketStyle = styled.div`
  /* width: 100%; */

  .coin {
    background: #7d30f5;
    height: 64px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    font-size: 18px;
    cursor: pointer;
  }

  .siderCard {
    /* width: 100%;?? */
    background: #7d30f5;
    border-radius: 12px;
    padding: 14px 6px 6px 18px;
    margin-bottom: 16px;
  }
    .heading {
      font-size: 14px;
      font-weight: 400;
      margin: 0;
      margin-bottom: 12px;
    }

    .text {
      font-size: 12px;
    }

    .icon {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: #17151d;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #2a7ec2;
      margin-left: auto;
      margin-top: -24px;
      cursor: pointer;
    }
  }

  .coinCompWrapper {
    width: 100%;
    height: 64px;
    background: #7d30f5;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    .borderLeft {
      width: 3px;
      height: 16px;
      background: #fff;
      border-radius: 1px;
      margin-top: -24px;
      margin-left: -1.5px;
    }

    .content {
      width: 100%;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .coinName {
        font-size: 18px;
        width: 15%;
      }

      .graphChange {
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* column-gap: 8px; */

        .graph {
          width: 80%;
          height: 80%;

          hr{
            width: 100%;
            border: 0.5px solid #a4a4a4;
          }
        }

        .priceChange {
          font-size: 10px;
          color: #32aa62;
          font-weight: 600;
          margin-top: 24px;
        }
      }

      .price {
        font-size: 24px;
        width: 15%;
        text-align: right;
      }
    }
  }

  .marketWrapper {
    width: 100%;

    .marketSearch {
      width: 90%;
      height: 42px;
      border: 1px solid #241f2a;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      margin-bottom: 18px;
   
      .searchIcon{
        color: #3f6eff;
        width: 54px;
        font-size: 20px;
      }

      .input {
        background: none;
        border: none;
        width: 100%;
        height: 34px;
        color: #fff;
        padding: 0 8px;
      }

      .input:active {
        border: none;
      }

      .input:focus {
        border: none;
        outline: none;
      }
    }

    .marketBody {
      width: 100%;
      display: flex;
      column-gap: 24px;

      .marketMain {
        width: 70%;

        .marketLeaders {
          /* width: 100%; */
          height: 280px;
          background: #241f2a;
          border-radius: 12px;
          padding: 24px;
          padding-bottom: 0;
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;

          .heading {
            margin: 0;
            padding: 0;
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 36px;
          }

          .coinsWrapper {
            /* height: 85%; */
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;

            .coinsList {
              display: flex;
              gap: 16px;
              flex-wrap: wrap;
            }
          }

          .coinsWrapper::-webkit-scrollbar {
            display: none;
          }
        }
      }

      .marketSider {
        width: 25%;
        height: 82vh;
        border-radius: 12px;
        background: #241f2a;
        margin-left: auto;
        display: flex;
        flex-direction: column;

        .siderHeader{
            margin-left: 16px;
            font-weight: 500;
        }
        
        .wrapper{
            /* height: 50%; */
            direction: flex;
            flex-direction: column;
            row-gap: 16px;
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;

        }

        .wrapper::-webkit-scrollbar {
          display: none;
        }
      }

    }
  }
`;
