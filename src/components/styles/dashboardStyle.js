import styled from "styled-components";

export const DashboardStyle = styled.div`
    /* width: 100%; */

    .dashboardWrapper{
        width: 100vw;
        min-height: 100vh;
        background: #17151d;

        display: flex;
        column-gap: 38px;

        .sider{
            width: 64px;
            height: 90vh;
            margin-left: 32px;
            margin-top: 32px;
            
            .menu{
                background: #241f2a;
                color: #3f6eff;
                font-size: 32px;
                width: 100%;
                height: 54px;
                border-radius: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 18px;
                cursor: pointer;
            }

            .sidebar{
                background: #241f2a;
                width: 100%;
                height: 85%;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 14px;
                padding-top: 18px;

                .menuItem{
                    width: 42px;
                    height: 38px;
                    border-radius: 10px;
                    background: #3f6eff;
                    font-size: 14px;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                }

                .unselectedMenu{
                    width: 42px;
                    height: 38px;
                    border-radius: 10px;
                    font-size: 14px;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

            }
        }

        .main{
            width: 100%;
            height: 90vh;
            margin-top: 32px;
            margin-right: 32px;
            color: #fff;
        }

    }
`