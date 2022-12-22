import styled from "styled-components";

export const MarketStyle = styled.div`
  /* width: 100%; */

  .coinCompWrapper {
    width: 100%;
    height: 64px;
    background: #7d30f5;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    .borderLeft {
      width: 2px;
      height: 16px;
      background: #fff;
      border-radius: 1px;
      margin-top: -24px;
      margin-left: -1px;
    }

    .content {
      width: 100%;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .coinName {
        font-size: 18px;
      }

      .graph {
        width: 65%;
        height: 80%;
        margin-left: 2%;
        border: 1px solid red;
      }

      .priceChange {
        font-size: 10px;
        color: #32aa62;
        font-weight: 600;
        margin-top: 16px;
      }

      .price {
        font-size: 24px;
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

      .icon {
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

      .marketMain {
        width: 70%;

        .marketLeaders {
          width: 100%;
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
          }

          .coinsWrapper::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
  }
`;
