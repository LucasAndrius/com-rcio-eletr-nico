import styled from 'styled-components';

export const SearchArea = styled.div`

background-color:#ddd;
border-bottom:#ccc;
padding:20px 0;

.searchBox{
    background-color:#9bb83c;
    padding:20px 15px;
    border-radius:6px;
    box-shadow:1px 1px 1px 0.3px rgba(0,0,0,0.2);
    display:flex;

    form{
        flex:1;
        display:flex;

        input, select{
            height:40px;
            border:0;
            border-radius:5px;
            outline:0;
            font-size:15px;
            color:#000;
            margin-right:20px;
        }

        input{
            flex:1;
            padding:0 10px;
        }

        select{
            width:100px;
        }

        button{
            background-color:#49aeef;
            font-size:15px;
            border:0;
            border-radius:5px;
            color:#fff;
            padding:0 20px;
            cursor:pointer;
        }
    }   
}

.categoryList{
    display:flex;
    flex-wrap:wrap;
    margin-top:1.25rem;
    
    .categoryItem{
        width:25%;
        display:flex;
        
        align-items:center;
        justify-content:center;

        color:#000;
        text-decoration:none;
        height:3,12rem;
        margin-bottom:0.625rem;

        &:hover{
            color:#666;
        }

        img{    
            width:2.81rem;
            height:2.81rem;
            margin-right:0.625rem;
        }
    }
}

@media (max-width:600px){
    .searchBox form{
        flex-direction:column;

        input{
            padding:10px;
            margin-right:0;
            margin-bottom:10px;
            text-align:center;
        }

        select{
            width:100%;
            margin-bottom:10px;
        }

        button{
            height:40px;
        }
    }

    .categoryList .categoryItem{
       width:50%;
       justify-content:flex-start;
       padding:10px;
    }
}


`;

export const PageArea = styled.div`
h2{
    font-size:1.25rem;

}
.list{
    display:flex;
    flex-wrap:wrap;

    .adItem{
        width:25%;
    }
}

.seeAllLink{
    color:#111;
    text-decoration:none;
    font-weight:bold;
    display:inline-block;
    margin-top:0.625rem;
}



@media (max-width:600px){

margin:10px;

    .list .adItem{
        width:50%;
    }
}

`;