import styled from "styled-components";

export const MarketStyle = styled.div`
    /* width: 100%; */

    .coinCompWrapper{
        width: 100%;
        height: 64px;
        background: #7d30f5;
        border-radius: 12px;
        margin-bottom: 16px;
    }

    .marketWrapper{
        width: 100%;

        .marketSearch{
            width: 90%;
            height: 42px;
            border: 1px solid #241f2a;
            border-radius: 8px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            margin-bottom: 18px;

            .icon{
                color: #3f6eff;
                width: 54px;
                font-size: 20px;
            }

            .input{
                background: none;
                border: none;
                width: 100%;
                height: 34px;
                color: #fff;
                padding: 0 8px;
            }

            .input:active{
                border: none;
            }

            .input:focus{
                border: none;
                outline: none;
            }


        }

        .marketBody{
            width: 100%;

            .marketMain{
                width: 70%;

                .marketLeaders{
                    width: 100%;
                    height: 350px;
                    background: #241f2a;
                    border-radius: 12px;
                    padding: 24px;

                    .heading{
                        margin: 0;
                        padding: 0;
                        font-size: 32px;
                        font-weight: 500;
                        margin-bottom: 36px;

                    }

                }
            }
        }
    }

`