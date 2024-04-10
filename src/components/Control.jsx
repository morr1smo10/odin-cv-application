import { useState } from 'react'
import GeneralInfoControl from './GeneralInfoControl';
import EducationalInfoControl from './EducationInfoControl';

function Control({generalInfo, generalInfoSubmit, educationInfo, educationInfoSubmit}) {
  return (
    <div className="control_section">
      <h2>Control</h2>
      <GeneralInfoControl 
      generalInfo={generalInfo} 
      generalInfoSubmit={generalInfoSubmit}
      ></GeneralInfoControl>
      <EducationalInfoControl
      educationInfo={educationInfo}
      educationInfoSubmit={educationInfoSubmit}
      ></EducationalInfoControl>
    </div>
  )
}

export default Control;