import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Box,Divider } from '@mui/material';
import { setDrawer } from '../features/drawerSlice';

import { setCurrentUser } from "../features/authSlice";

import Parse from "parse";

const Burger = () => {
    const {currentUser} = useSelector((store) => store.auth);
    const drawer = useSelector((state) => state.drawer)
    const dispatch = useDispatch();

    const ToggleDrawer = () => {
        dispatch(setDrawer());
    }

    const HandleOnClick = async() => {  
        try {
            await Parse.User.logOut();
            // To verify that current user is now empty, currentAsync can be used
            const currentUser = Parse.User.current();
            if (currentUser === null) {
                alert('Success! No user is logged in anymore!');
            }
            // Update state variable holding current user
            dispatch(setCurrentUser(null));
            return true;
			} catch (error) {
			if (error && error.message) {
				alert(`Error! ${error.message}`);
			} else {
				alert('An error occurred.');
			}
				return false;
        }
    }

    return (
        <>
            <CssBaseline/>
            <BurgerIcon onClick={ ToggleDrawer}>
                <MenuIcon/>
            </BurgerIcon>
            <Drawer
                open={drawer.drawer}
                anchor="right"
                onClick={ToggleDrawer} 
                
                >
                    <Box
                        sx={{
                            width:"100%",
                        }}
                    >
                        <BurgerUl>
                            <BurgerLi>
                                <BurgerLink to='/About'>Apropos</BurgerLink>
                            </BurgerLi>
                            <Divider sx={{width:"100%"}}/>
                            {currentUser === null ? 
                            <>     
                                <BurgerLi>
                                    <BurgerLink to='/SignIn'>Sign In</BurgerLink>
                                </BurgerLi>
                                <BurgerLi>
                                    <BurgerLink to='/SignUp'>Sign Up</BurgerLink>
                                </BurgerLi>
                            </> : 
                            <>
                                <BurgerLi>
                                    <BurgerLink to='#'  onClick={HandleOnClick}>Log Out</BurgerLink>
                                </BurgerLi>
                                <BurgerLi>
                                    <BurgerLink to='/private'>Chat Box</BurgerLink>
                                </BurgerLi>
                            </>}
                            
                        </BurgerUl>
                    </Box>
                
            </Drawer>
        </>
    )
};

const BurgerUl = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    margin-right: 2rem;
    flex-direction: column;
    justify-content: space-around;
    list-style : none;
`;

const BurgerLi = styled.li`
    margin: 2rem 0;
`;

const BurgerIcon = styled.div`
    margin-right: 2rem;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px white;
    }
    @media (min-width: 767px) {
        display: none;
    }
`;

const BurgerLink = styled(Link)`
    text-decoration: none;
`;

export default Burger
