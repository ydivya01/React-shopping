import React from 'react'
import { CardComp } from './CardComp'
import Data from './Data.json'

export const BodyComp = () => {
  return (
    <>
      <div className='container m-5' >
        <div className='row'>

          {
            Data.map((value,index) => {
              return <>
                <div className='col-md-3' key={index} >
                  <CardComp key={index}  value={value} />
                </div>

              </>
            })
          }


        </div>
      </div>
    </>
  )
}
