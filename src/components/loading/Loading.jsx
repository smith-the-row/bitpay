import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'


const Loading = ({load})=>{
    return (
        <div className="container mt-5 d-flex justify-content-center align-items center">
            <BeatLoader color='#27ae61' loading={load} size='15'/>
        </div>
    )
}

export default Loading;