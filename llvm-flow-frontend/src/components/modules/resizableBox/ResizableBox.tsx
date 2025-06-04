import React from 'react'
import { ResizableBox as ReactResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'
import './ResizableBox.scss'

type ResizableProps = {
  children: React.ReactNode
}

export default function ResizableBox({ children }: ResizableProps) {
  // const width = window.innerWidth * 0.49
  const width = 680
  const height = window.innerHeight * 0.8

  return (
    <ReactResizableBox
      width={width}
      height={height}
      className="layoutflow"
      minConstraints={[300, 300]}
      resizeHandles={['se', 'sw']}
    >
      <div style={{ width: '99%', height: '90%' }}>{children}</div>
    </ReactResizableBox>
  )
}
