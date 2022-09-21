import React from 'react'
import styled from 'styled-components'
import ElementCard from '../../Card'

import NFTexmpl from '../../../assets/nft-example.png'

const CardsGridLayout = styled.section`
    display: grid;
    grid-temaplate-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
`

const GridItem = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;

    width: 324.09px;
    height: 472px;
    border-radius: 20px;

    background: linear-gradient(155.14deg, rgba(0, 0, 0, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%);
    filter: drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12));
    backdrop-filter: blur(7.5px);
`

const CardsContainer = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",}}>
        <h1 style={{color:"#FFFFFF", fontSize:"47px"}}>
            Recomendados
        </h1>
        <CardsGridLayout>
            <GridItem>
                <ElementCard
                    img={NFTexmpl}
                    name="COOLGUYZZ"
                    usr="Coolguyzz.io"
                    floorPrice="0,05"
                    mxn="$1,605.97"
                    profit="-12.45"
                    width="235px"
                    height="281px"
                />
            </GridItem>
        </CardsGridLayout>
    </div>
  )
}

export default CardsContainer