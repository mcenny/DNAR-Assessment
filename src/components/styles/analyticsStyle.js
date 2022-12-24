import styled from "styled-components";

export const AnalyticsStyle = styled.div`
  .chart {
    width: 100%;
    height: 350px;
    background: #241f2a;
    border-radius: 12px;
    /* padding: 18px; */
    display: flex;
    flex-direction: column;

    .priceInfo {
      display: flex;
      align-items: flex-end;
      column-gap: 20px;
      margin-top: 24px;
      margin-bottom: 32px;
      margin-left: 24px;

      .price {
        font-size: 24px;
        font-weight: 500;
        margin: 0;
      }

      .priceChange {
        font-size: 14px;
        color: #32aa62;
        margin: 0;

        .icon {
          margin-left: 12px;
        }
      }
    }

    .graph {
      height: 100%;
      margin: 0 24px 18px;

      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      /* border: 1px solid #a4a4a4; */
    }

    .graph::-webkit-scrollbar {
      display: none;
    }
  }

  .exchangeCard {
    min-width: 350px;
    width: 100%;
    height: 250px;
    background: #241f2a;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .heading {
      display: flex;
      align-items: center;
      column-gap: 32px;
      margin-top: 14px;

      .borderLeft {
        height: 32px;
        width: 4px;
        background: #2a7ec2;
        border-radius: 2px;
        margin-left: -2px;
      }

      .text {
        font-size: 16px;
      }
    }

    .exchangePrice {
      margin: 0 34px;
      display: flex;
      flex-direction: column;

      .sell-Buy {
        width: 100%;
        display: flex;
        row-gap: 14px;
        justify-content: space-between;

        .exchangeSell-Buy {
          width: 80%;
          font-size: 24px;
          display: flex;
          align-items: center;
          margin: 8px 0;

          span {
            font-size: 12px;
            margin: 0;
            margin-right: 12px;
          }
        }

        .selectCurrency {
          width: 20%;
          select {
            width: 100%;
            height: 42px;
            border: none;
            background: #1d1923;
            padding: 0 8px;
            color: #fff;
            border-radius: 8px;
            border-right: 4px solid #1d1923;
            cursor: pointer;
          }

          select:focus {
            outline: none;
          }
        }
      }
    }

    .exchangeButton {
      margin: 0 34px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 12px;
        width: 60%;
      }

      button {
        background: #2a7ec2;
        width: 40%;
        height: 42px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        padding: 0 5%;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }

  .analyticsWrapper {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    column-gap: 42px;

    .analytics {
      width: 75%;
      display: flex;
      flex-direction: column;
      row-gap: 18px;

      /* border: 1px solid yellow; */

      .exchangeRank {
        width: 100%;
        display: flex;
        align-items: flex-end;
        column-gap: 18px;

        .exchange {
          width: 60%;
        }

        .rank {
          background: #241f2a;
          border-radius: 12px;
          height: 120px;
          min-width: 100px;
          width: 40%;
          display: flex;
          flex-direction: column;

          .heading {
            display: flex;
            width: 100%;
            align-items: center;
            margin-top: 14px;
            margin-bottom: 4px;

            .borderLeft {
              height: 32px;
              width: 4px;
              background: #2a7ec2;
              border-radius: 2px;
              margin-left: -2px;
            }

            .text {
              font-size: 16px;
              width: 100%;
              text-align: center;
            }
          }

          .rankValue {
            width: 100%;
            font-size: 24px;
            text-align: center;
            margin: 0;
          }
        }
      }
    }

    .info {
      background: #241f2a;
      width: 25%;
      border-radius: 12px;

      .coinLogo {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: -12px;

        img {
          background: #fff;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          object-fit: contain;
          margin-right: 12px;
          padding: 4px;
        }
      }

      .heading {
        width: 100%;
        margin: 0 32px 32px;
        font-size: 16px;
        font-weight: 500;
      }

      .description {
        width: 100%;
        border-radius: 12px;
        background: #7d30f5;
        color: #fff;
        padding: 16px 0;
        margin-bottom: 42px;

        .heading {
          margin: 0 16px 6px;
          margin-left: 14px;
          font-weight: 600;
          font-size: 14px;
        }

        .text {
          font-size: 12px;
          margin: 0 24px 0 36px;

          line-height: 1.4;
        }
      }

      .url {
        width: 85%;
        display: flex;
        column-gap: 18px;
        margin: 0 auto 18px;

        .website {
          background: #17151d;
          height: 38px;
          width: 120px;
          border-radius: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          .icon {
            margin-left: 8px;
            color: #2a7ec2;
            font-size: 18px;
          }
        }

        .reddit,
        .github {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #17151d;
          cursor: pointer;

          .icon {
            background: #ff3f18;
            border-radius: 50%;
            object-fit: contain;
            padding: 4px;
            width: 16px;
            height: 16px;
            color: #fff;
          }

          .github {
            background: #2a7ec2;
          }
        }
      }

      .factsWrapper {
        width: 85%;
        margin: 0 auto 18px;

        .factsHeading {
          width: 100%;
          font-size: 16px;
          font-weight: 500;
        }

        hr {
          border: 1px solid #7d30f5;
        }

        .facts {
          display: flex;
          flex-direction: column;

          .fact {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            row-gap: 18px;
          }
        }
      }

      .supplyInfo {
        background: #7d30f5;
        width: 85%;
        margin: 0 auto;
        border-radius: 8px;

        .fact {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          row-gap: 18px;
          margin-right: 16px;
          margin-left: 16px;
        }
      }
    }
  }
`;
