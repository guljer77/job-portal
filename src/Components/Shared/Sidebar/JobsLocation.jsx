import React from 'react'

function JobsLocation({selectHandle}) {
  return (
    <div>
      <h4 className='pb-3 text-[18px] text-primary font-medium'>Location</h4>
      <div className='flex flex-col space-y-2'>
        <label>
          <input className='mr-2' type="radio" onChange={selectHandle} name="test" id="test" value="" />All
        </label>
        <label>
          <input className='mr-2' type="radio" onChange={selectHandle} name="test" value="London" title="London" />London
        </label>
        <label>
          <input className='mr-2' type="radio" onChange={selectHandle} name="test" value="Seattle" title="Seattle" />Seattle
        </label>
        <label>
          <input className='mr-2' type="radio" onChange={selectHandle} name="test" value="Madrid" title="Madrid" />Madrid
        </label>
        <label>
          <input className='mr-2' type="radio" onChange={selectHandle} name="test" value="Boston" title="Boston" />Boston
        </label>
      </div>
    </div>
  )
}

export default JobsLocation