import React from 'react'

const TrashIcon = ({ onClick, width = '24', height = '24', color = '#909090' }) => (
  <svg onClick={onClick} className='icon icon_trash' width={width} height={height} viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3.97888 6.3576H5.97888H21.9789' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
    <path d='M8.97888 6.3576V4.3576C8.97888 3.82717 9.1896 3.31846 9.56467 2.94339C9.93974 2.56832 10.4484 2.3576 10.9789 2.3576H14.9789C15.5093 2.3576 16.018 2.56832 16.3931 2.94339C16.7682 3.31846 16.9789 3.82717 16.9789 4.3576V6.3576M19.9789 6.3576V20.3576C19.9789 20.888 19.7682 21.3967 19.3931 21.7718C19.018 22.1469 18.5093 22.3576 17.9789 22.3576H7.97888C7.44845 22.3576 6.93974 22.1469 6.56467 21.7718C6.1896 21.3967 5.97888 20.888 5.97888 20.3576V6.3576H19.9789Z' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
    <path d='M10.9789 11.3576V17.3576' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
    <path d='M14.9789 11.3576V17.3576' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
  </svg>
)

export default TrashIcon
