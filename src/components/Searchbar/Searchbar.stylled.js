import styled from 'styled-components';


export const SearchForm = styled.form`
   display: flex;
    justify-content: center;
    height: 40px;
    font-size: 12px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #191970;
    border: 1px solid rgba(33,33,33,0.2);
   
}
`;

export const SearchInput= styled.input`
      margin-right: 20px;
    width: 300px;
    border: 1px solid rgba(33,33,33,0.2);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 18px;
    padding-left: 15px;
    border: 0;
    border-top-left-radius: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0px;
}
`;

export const SearchButton= styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    font-size: 18px;
    border: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 4px;
}
`;