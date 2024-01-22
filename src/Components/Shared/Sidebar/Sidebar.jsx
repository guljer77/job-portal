import React from 'react'
import JobsLocation from './JobsLocation'
import Salary from './Salary'
import Experience from './Experience'
import TypeOf from './TypeOf'

function Sidebar({selectHandle, selectHandleClick}) {
  return (
    <div>
      <h4 className='text-[20px] font-medium text-primary pb-5'>Jobs Filter</h4>
      <JobsLocation selectHandle={selectHandle} />
      <Salary selectHandle={selectHandle} selectHandleClick={selectHandleClick} />
      <Experience selectHandle={selectHandle} />
      <TypeOf selectHandle={selectHandle} />
    </div>
  )
}

export default Sidebar