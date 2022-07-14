import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.div`
    margin-top: 32px;
    margin-bottom: 15px;
    strong {
        font-size: 24px;
    }
`;

export const InputSearchContainer = styled.div`
    width:100%;

    input{
        width:100%;
        background: #fff;
        border: none;
        border-radius:25px;
        height: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
        outline: 0;
        padding: 0 16px;

        &::placeholder {
            color: #BCBCBC;
        }
    }

`;

export const Table = styled.table`
    width: 100%;

    th{
        background-color: #bdbebd;
        border-radius: 4px;
        text-align: left;
        padding-top: 5px;
    }

    td{
        background-color: #FFF;
        border-radius: 4px;
        padding-top: 5px;
    }

`;

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #000000;

`;

export const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const PaginationItem = styled.div`
    cursor: pointer;
    span{
        font-size: 16px;
        font-weight: bold;
        color: #008000;
    }
`;


