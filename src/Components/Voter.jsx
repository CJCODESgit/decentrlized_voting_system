import React from 'react'

const Voter = (props) => {
  return (
    <div>
         <table>
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
  )
}

export default Voter