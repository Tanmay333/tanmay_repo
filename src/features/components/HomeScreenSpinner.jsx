import React from 'react'
import { CSpinner } from '@coreui/react'

function HomeScreenSpinner({ style }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      ...style
    }}>
      <CSpinner color="primary" variant="grow" />
    </div>
  )
}

export default HomeScreenSpinner