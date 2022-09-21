import React from 'react';
import styled from 'styled-components';

// import { useParams } from 'react-router-dom';
import {PortalButton} from '../components/ui/PortalButton.jsx'
import miniImg from '../assets/miniImg.png'
import NFTimg from '../assets/nft-image-example.png';
import CardsContainer from '../components/Containers/CardsWrapper/index.jsx';
import ElementCard from '../components/Card/index.jsx';

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
              <ElementCard
                img={NFTimg}
                name="Nyx-92"
                usr="@collector_name"
                lastBid="2.45"
                price="0.45 ETH"
                mxn="$1,605.92"
                profit="+12.45"
                mini={miniImg}
                width="460px"
                height="560px"/>
            </StyledGridItem>
          </DescriptorGridLayout>
          <CardsContainer/>
        </Wrapper>
        
    </GalleryLayout>
  )
};
