import { useState } from 'react'
import GeneralInfoDisplay from './GeneralInfoDisplay';

function Display({generalInfo}) {
  return (
    <div className="display_section">
      <h2>Display</h2>
      <GeneralInfoDisplay generalInfo={generalInfo}></GeneralInfoDisplay>
    </div>
  )
}

export default Display;