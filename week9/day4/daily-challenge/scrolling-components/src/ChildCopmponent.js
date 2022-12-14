import React from 'react'

function ChildCopmponent(props) {
    return (
        <>
            <div className='bg-white br4 ma3'>
                <div className=' pa3'>
                    <span className=''>{props.icon}</span>
                    <span className=''>{props.label}</span>
                </div>

                <h1 className=' fs-big tc pa3'>{props.number}</h1>
            </div>
        </>
    )
}

export default ChildCopmponent