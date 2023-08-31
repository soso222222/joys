import React from 'react'
import Modal from './Modal'

function Confirm({...props}) {
    return (
        <Modal {...props} close={false} size={'sm'}/>
    )
}

export default Confirm