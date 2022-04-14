import React from 'react'
function Card(props) {
  return (
    <>
       <div className='col-md-3'>
                    <div className='row single-card'>
                    <div className='col-md-8'>
                    <h1>{props.count}</h1>
                    </div>
                    <div className='col-md-4 mr-2'>
                    {props.icon}
                  </div>
                  <div className="row">
                      <div className="col-md-12 py-2">
                      <p>{props.text}</p>
                      </div>
                  </div>  
                  </div>
                  </div>
    </>
  )
}

export default Card
