import React, { useEffect } from 'react'
import styled from 'styled-components';
import { selectUserPhoto, selectUserName, setUserLogin, setSignOut } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {auth, provider} from '../firebase';
import { useHistory } from 'react-router-dom';

function Header() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const history = useHistory();
    const dispatch = useDispatch();

useEffect(()=>{
    // this to set user in the redux store from  firebase authentication
auth.onAuthStateChanged(async (user)=>{
    if(user){
        dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }));
        history.push('/');
    }
})

}, [])

   const signIn = () =>{
          auth.signInWithPopup(provider)
          .then((result)=>{
              let user = result.user;
              dispatch(setUserLogin({
                  name: user.displayName,
                  email: user.email,
                  photo: user.photoURL
              }));
              // redirect to home pahe
              history.push('/')
          })
   }
   const signOut = () =>{

        auth.signOut();
        
        dispatch(setSignOut());
        // redirect to login page
        history.push("/login");
        
   }
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            {
                !userName ? ( 
                    <LoginContainer>
                        <LoginButton  onClick={signIn}>Login</LoginButton>
                    </LoginContainer>
                
                ):(
         <>
                            <NavMenu>
                                    <a>
                                        <img src="/images/home-icon.svg" alt="" />
                                        <span>HOME</span>
                                    </a>
                                    <a>
                                        <img src="/images/search-icon.svg" alt="" />
                                        <span>SEARCH</span>
                                    </a>
                                    <a>
                                        <img src="/images/watchlist-icon.svg" alt="" />
                                        <span>WATCHLIST</span>
                                    </a>
                                    <a>
                                        <img src="/images/original-icon.svg" alt="" />
                                        <span>ORIGINALS</span>
                                    </a>
                                    <a>
                                        <img src="/images/movie-icon.svg" alt="" />
                                        <span>MOVIES</span>
                                    </a>
                                    <a>
                                        <img src="/images/series-icon.svg" alt="" />
                                        <span>SERIES</span>
                                    </a>
                            </NavMenu>
                            <UserImg 
                               onClick={signOut}
                               src={userPhoto}/>
                    
            </>       )
            }
            
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    // when the width more great will have to hidden 
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
   display: flex;
   flex: 1;
   margin-left: 25px;
   align-items: center;
   a{
       display: flex;
       align-items: center;
       padding: 0 12px;
       img{
           height: 20px;
       }
       span{
           font-size: 13px;
           letter-spacing: 1.42px;
           position: relative;
            // this like a div after each the line 
           &:after{
               content:"";
               height: 2px;
               background:white;
               position: absolute;
               left: 0;
               right: 0;
               bottom: -6px;
               opacity: 0;
            //    to line for animation
               transform-original: left center;
               transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
               transform: scaleX(0); // this will make the line hidden
           }
       }
       &:hover{ // when we put cursor over it 
           span:after{
            transform: scaleX(1);
            opacity: 1;
           }
       }
   }
`
const UserImg = styled.img`
   width: 48px;
   height: 48px;
   border-radius: 50%;
   cursor: pointer;
`
const LoginButton = styled.div`
   border: 1px solid #f9f9f9;
   padding: 8px 16px;
   border-radius: 4px;
//    letter-spacing: 1.5px;
   text-transform: uppercase;

   background-color: rgba(0, 0, 0, 0.6);
   &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
   }
`
const LoginContainer = styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;
`