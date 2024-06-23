import React from 'react'

const Connected = (props) => {
  return (
    <div className='h-screen md:w-full w-full  bg-[#6731d4] flex items-center text-white'>
      <div className='container mx-auto md:w-3/4  text-center overflow-hidden'>
        
        <h1 className='md:text-4xl text-white mt-8'>your account ... {props.accounts}</h1>
         { props.status ? (<p>you have already voted!</p>) : (
          <div className='mt-10 flex md:flex-row flex-col item-center '>
            <input type="number"  value={props.number} className='h-11 w-32 text-black mx-auto'   placeholder="type here" onChange={props.handlingnumber} />
          <button onClick={props.givevote} className= 'bg-white w-40 h-11 lg:mt-5 mt-10 rounded-3xl mx-auto text-black font-bold hover:bg-[#cdb6fc] ml-10' >vote</button>
          </div>
         )}
    
      
      
         <table  className='container text-center mt-12'>
          <thead className=''>
            <tr className='text-xl'>
            <th>Index</th>
            <th>Name</th>
            <th>Vote</th>
          </tr>
          </thead>
          <tbody>
            {
            props.candidates.map((candidate,index) => (
              <tr key={index}>
                <td>{candidate.index}</td>
                <td>{candidate.name}</td>
                <td>{candidate.votecount}</td>
              </tr>
            ))
          }
          </tbody>
         </table>

         <div className='container mx-auto md:w-3/4  text-center overflow-hidden' >
          <p className='mt-20 text-2xl font-bold'>Names of Voters </p>
         <table className='container text-center mt-12'>
          <thead><tr>
            <th>index</th>
            <th>voters</th>
          </tr></thead>
          <tbody>
             {
            props.voter.map((data,index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{data}</td>

              </tr>
            ))
          }
          </tbody>
          
          
         </table>
    </div>
        
      </div>
    </div>
  )
}

export default Connected;