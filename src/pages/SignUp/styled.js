import styled from 'styled-components';

export const PageArea = styled.div`
form{
    background-color:#fff;
    border-radius:3px;
    padding:10px;
    bor-shadow:0px 0px 3px #999;

    .area{
        display:flex;
        align-items:center;
        padding:10px;
        max-width:500px;

        .area--title{
            width:200px;
            text-align:right;
            padding-right:25px;
            font-weight:bold;
            font-size:14px;
        }

        .area--input {
            flex:1;


            input {
                width:100%;
                font-size:14px;
                padding:5px;
                border:1px solid #DDD;
                border-radius:3px;
                outline:0;
                transition: all ease .4s;

                &:focus {
                    border:1px solid #666;
                    color:#333;
                }
                
            }

            button{
                background-color:#0089ff;
                border:0;
                outline:0;
                padding:5px 10px;
                border-radius:4px;
                color:#fff;
                font-size:15px;
                cursor:pointer;

                &:hover{
                    background-color:#006fce
                }
            }
        }
    }
}



@media (max-width:600px){
    form{
        .area{
            flex-direction:column;

            .area--title{
                width:auto;
                taxt-align:left;
                margin-bottom:10px;
            }
            select{
                width:100%;
                height:1.7rem;
            }

            .area--input{
                width:100%;

                button{
                    width:100%;
                    padding:1rem;
                }
            }
            
        }
    }
}
`;