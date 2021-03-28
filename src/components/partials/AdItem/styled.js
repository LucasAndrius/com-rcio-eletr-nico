import styled from 'styled-components';

export const Item = styled.div`
a{
    display:block;
    border:1px solid #fff;
    margin:0.625rem;
    text-decoration:none;
    padding:0.625rem;
    border-radius:5px;
    color:#000;
    background-color:#fff;
    transition: all ease 0.2s;

    &:hover{
        border:1px solid #ccc;
        background-color:#f7f7f7;

    }

    itemImage, img{
        width:100%;
        border-radius:5px;

    }

    .itemName{
       
        font-weight:bold;

    }
    
    
}
`;