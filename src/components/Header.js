import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <HeaderBlock>
        <HeaderTitle>
            <h1>Chat Box</h1>
            <img src='' alt=''/>
        </HeaderTitle>
        <HeaderNav>
            <HeaderUl>
                <HeaderLi>
                    <HeaderBtn>A propos</HeaderBtn>
                </HeaderLi>
                
                <HeaderLi>
                    <HeaderBtn>Chat</HeaderBtn>
                </HeaderLi>
            </HeaderUl>
            <HeaderUl>
                <HeaderLi>
                    <HeaderBtn>Login</HeaderBtn>
                </HeaderLi>
            </HeaderUl>
        </HeaderNav>
    </HeaderBlock>
  )
}

const HeaderBlock = styled.div`
    width: 100%;
   
    background-color: grey;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderNav = styled.nav`
    width: 30%;
    display: flex;
    justify-content: space-between;
`;

const HeaderUl = styled.ul`
width: 50%;
display: flex;
justify-content: space-between;
list-style: none;
`;

const HeaderLi = styled.li`

`;

const HeaderBtn = styled.button`

`;

const HeaderTitle = styled.div`
    margin-left: 2rem;
`;

export default Header
