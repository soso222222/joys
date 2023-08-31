import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { requestAddress } from '../../Service/Common'
import Modal from '../molecules/Modal'

function FindAddress({isActive}) {
  
  const getAddress = () => {
    const address = requestAddress({
      // currentPage: seq + 1, 
      // countPerPage: pageView,
      // keyword: word
    })
  }
  useEffect( () => {
    
  },[])
  return (
    <Modal
      title="주소검색"
      isActive={isActive}
    >
      <>
        
      </>
    </Modal>
  )
}

const Wrapper = styled.div`

`
export default FindAddress