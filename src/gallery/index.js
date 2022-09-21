import React from 'react';
import styled from 'styled-components';
import { Card } from '@mui/material';
// import { useParams } from 'react-router-dom';
import {PortalButton} from '../components/ui/PortalButton.jsx'
import miniImg from '../assets/miniImg.png'
import NFTimg from '../assets/nft-image-example.png';
import CardsContainer from '../components/Containers/CardsWrapper/index.jsx';

const GalleryLayout = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
  box-sizing: border-box;
  background-color: purple;
`

const Wrapper = styled.section`
	margin-left: 10rem;
	align-items: center;
	justify-content: center;
	align-text: center;
  width: 1200px;
	height: 90.0rem;
	left: -7px;
	top: 0px;
	display: block;
`
const DescriptorGridLayout = styled.div`
	display: grid;
	padding-top: 19rem;
	grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`

const GridItem = (props) => {
	return (
		<div>{props.children}</div>
		)
}

const StyledGridItem = styled(GridItem)`
	width: 33%;
	height: 33rem;
`

const GridFigCaption = styled.figcaption`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`

const GridDescriptor = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3,1fr);
  width: 460px;
`

export const Gallery = (props) => {
  
  return (
    <GalleryLayout>
        <Wrapper>
          <DescriptorGridLayout>
            <StyledGridItem>
              <GridDescriptor>
                <h1 style={{color:"#FFFFFF", fontSize:"54px"}}>
                  Crea, Explora y Colecciona
                </h1>
                <p style={{color:"#FFFFFF"}}>
                  The leading NFT Marketplace On Ethereum Home to the Next Generation Of Digital Creators. Discover The Best NFT Collections
                </p>
                <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                  <PortalButton className="primary-button" name="Explora"/>
                  <PortalButton className="secondary-button" name="Crea"/>
                </div>
              </GridDescriptor>
            </StyledGridItem>
            <StyledGridItem>
              <Card style={{backgroundColor:"rgba(50,50,100,.5)"}}>
                <figure>
                  <img src={NFTimg} width="460px" height="560px" alt="nft-card-pic"/>
                  <GridFigCaption>
                    <div style={{gridColumn:"1", gridRow: "1/2", display:"flex", flexDirection:"row", alignItems:"center", gap: "20px" }}>
                      <img src={miniImg} alt="mini-profile-pic"/>
                      <div style={{color:"rgba(255, 255, 255, 1)"}}>
                        <h2>
                          Nyx-92
                        </h2>
                        <p style={{marginTop:"-20px"}}>
                          @collector_name
                        </p>
                      </div>
                    </div>
                    <div style={{gridColumn:"1", gridRow: "2/2", display: "flex", justifyContent:"space-between",}}>
                      <div style={{color:"rgba(255, 255, 255, 1)"}}>
                        <p>
                          2.45 ETH
                        </p>
                        <p style={{marginTop:"-15px"}}>
                          latest Bid
                        </p>
                      </div>
                      <div style={{color:"rgba(255, 255, 255, 1)"}}>
                        <p>
                          0.45 ETH
                        </p>
                        <p style={{marginTop:"-15px"}}>
                          from
                        </p>
                      </div>
                      <div>
                        <p style={{color:"rgba(255, 255, 255, 1)"}}>
                          $1,605.92 MXN
                        </p>
                        <p style={{color:"#9B6DB8", marginTop:"-15px"}}>
                          +12.45%
                        </p>
                      </div>
                    </div>
                  </GridFigCaption>
                </figure>
              </Card>
            </StyledGridItem>
          </DescriptorGridLayout>
          <CardsContainer/>
        </Wrapper>
        
    </GalleryLayout>
  )
};
