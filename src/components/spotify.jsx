import React from 'react'
import styled from "styled-components"
import body from './body'
import navbar from './navbar';
import footer from './footer'


export default function spotify() {
  return (
    <Container>
        <div className='homebody'>
         <body />
        <div className='body'>
          <navbar />
            <div className='body_content'>
          
            </div>
        </div>
        </div>
        <div className='footer'>
            
        </div>
    </Container>
  )
}
const Container = styled.div`
`;