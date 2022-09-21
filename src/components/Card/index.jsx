import React from 'react'
import { Card } from '@mui/material';
import styled from 'styled-components';


const GridFigCaption = styled.figcaption`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`

const ElementCard = (props) => {
  return (
    <React.Fragment>
        <Card style={{backgroundColor:"rgba(50,50,100,.5)"}}>
                <figure>
                  <img
                    style={{objectFit:"contain"}}
                    src={props.img}
                    width={props.width}
                    height={props.height}
                    alt="nft-card-pic"/>
                  <GridFigCaption>
                    <div style={{gridColumn:"1", gridRow: "1/2", display:"flex", flexDirection:"row", alignItems:"center", gap: "20px" }}>
                      <img src={props.mini} alt={props.altt ? props.altt : "img"}/>
                      <div style={{color:"rgba(255, 255, 255, 1)"}}>
                        <h2>
                          {props.name}
                        </h2>
                        <p style={{marginTop:"-20px"}}>
                          {props.usr}
                        </p>
                      </div>
                    </div>
                    <div style={{gridColumn:"1", gridRow: "2/2", display: "flex", justifyContent:"space-between",}}>
                      <div style={{color:"rgba(255, 255, 255, 1)"}}>
                        <p>
                          {props.lastBid ? props.lastBid : props.floorPrice} ETH
                        </p>
                        <p style={{marginTop:"-15px"}}>
                          {props.lastBid ? "latest Bid" : "Floor price"}
                        </p>
                      </div>
                      <div style={{color:"rgba(255, 255, 255, 1)"}}>
                        <p>
                          {props.price ? props.price : null}
                        </p>
                        <p style={{marginTop:"-15px"}}>
                          {props.price ? "from" : null}
                        </p>
                      </div>
                      <div>
                        <p style={{color:"rgba(255, 255, 255, 1)"}}>
                          {props.mxn} MXN
                        </p>
                        <p style={{color:"#9B6DB8", marginTop:"-15px"}}>
                          {props.profit}%
                        </p>
                      </div>
                    </div>
                  </GridFigCaption>
                </figure>
              </Card>
    </React.Fragment>
  )
}

export default ElementCard