import { useState } from 'react'
import GeneralInfoControl from './GeneralInfoControl';

function Control({generalInfo, generalInfoSubmit}) {
  return (
    <div className="control_section">
      <h2>Control</h2>
      <GeneralInfoControl generalInfo={generalInfo} generalInfoSubmit={generalInfoSubmit}></GeneralInfoControl>
    </div>
  )
}

export default Control;