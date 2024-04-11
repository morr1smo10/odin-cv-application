import { useState } from 'react'
import GeneralInfoDisplay from './GeneralInfoDisplay';
import EducationInfoDisplay from './EducationInfoDisplay';

function Display({generalInfo, educationInfo}) {
  return (
    <div className="display_section">
      <h2>Display</h2>
      <GeneralInfoDisplay generalInfo={generalInfo}></GeneralInfoDisplay>
      <EducationInfoDisplay educationInfo={educationInfo}></EducationInfoDisplay>
    </div>
  )
}

export default Display;