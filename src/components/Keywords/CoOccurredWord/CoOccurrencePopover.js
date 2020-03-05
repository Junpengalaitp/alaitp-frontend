import React from 'react'
import { Popover } from 'react-bootstrap'
import CoOccurredWords from './CoOccurredWords';

export const CoOccurrencePopover = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <div style={{width: 350}}>
      <Popover ref={ref} {...props} outOfBoundaries={false}>
        <Popover.Title as="h3">{children}</Popover.Title>
          <Popover.Content>
            <CoOccurredWords keyword={children}/>
          </Popover.Content>
      </Popover>
      </div>
    )
  }
)
