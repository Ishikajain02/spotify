import React from 'react'
import styled from 'styled-components'
import Navbarr from './Navbarr'
import Sidebarr from './Sidebarr'
import Footerr from './Footerr'
import Bodyy from './bodyy'
export default function Spotifyy() {
  return (
    <Container>
        <div class ="main-body">
            <Sidebarr />
            <div className='body'>
                <Navbarr />
                <div className='contents'>
                <Bodyy/>
                </div>
            </div>
        </div>
        <div className='footer'>
            <Footerr/>
        </div>
        
        </Container>
  )
}

const Container = styled.div`
 max-width: 100%;
  max-height: 200%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .main-body{
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;
