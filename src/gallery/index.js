import React from 'react';
import styled from 'styled-components';
import { Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import miniImg from '../assets/miniImg.png'
import NFTimg from '../assets/nft-image-example.png';

const GalleryLayout = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
  box-sizing: border-box;
  background-color: #652ca8;
`

const Wrapper = styled.section`
	margin-left: 10rem;
	align-items: center;
	justify-content: center;
	align-text: center;
	width: 100rem;
	height: 90.0rem;
	left: -7px;
	top: 0px;
	display: block;
`
const DescriptorGridLayout = styled.div`
	display: grid;
	padding-top: 19rem;
	grid-template-columns: repeat(2, 1fr);
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

const gridFigCaption = styled.figcaption`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`

export const Gallery = (props) => {
  
  return (
    <GalleryLayout>
        <Wrapper>
          <DescriptorGridLayout>
            <StyledGridItem>
              hele
            </StyledGridItem>
            <StyledGridItem>
              <Card>
                <figure>
                  <img src={NFTimg} width="560px" height="660px" alt="nft-card-pic"/>
                  <gridFigCaption>
                    <div style={{gridColumn:"1", gridRow: "1/2", display:"flex", flexDirection:"row", alignItems:"center", gap: "20px" }}>
                      <img src={miniImg} alt="mini-profile-pic"/>
                      <div>
                        <h6>
                          Nyx-92
                        </h6>
                        <p>
                          @collector_name
                        </p>
                      </div>
                    </div>
                    <div style={{gridColumn:"1", gridRow: "2/2", display: "flex", justifyContent:"space-between",}}>
                      <div>
                        <p>
                          2.45 ETH
                        </p>
                        <p>
                          latest Bid
                        </p>
                      </div>
                      <div>
                        <p>
                          0.45 ETH
                        </p>
                        <p>
                          from
                        </p>
                      </div>
                      <div>
                        <p>
                          $1,605.92 MXN
                        </p>
                        <p style={{color:"#9B6DB8"}}>
                          +12.45%
                        </p>
                      </div>
                    </div>
                  </gridFigCaption>
                </figure>
              </Card>
            </StyledGridItem>
          </DescriptorGridLayout>

        </Wrapper>
        
    </GalleryLayout>
  )
};
