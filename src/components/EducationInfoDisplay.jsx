function EducationDisplayItem({education}) {
  return (
    <div className="education_display_item">
      <h3 className="education_display_school">{education.school}</h3>
      <p className="education_display_major">Major: {education.major}</p>
      <p className="education_display_date">{education.start} - {education.end}</p>
    </div>
  )
}

function EducationInfoDisplay({educationInfo}) {
  if (educationInfo.length !== 0) {
    const educationDisplayList = educationInfo.map(
      education => 
      <EducationDisplayItem 
      education={education} 
      ></EducationDisplayItem>)
    return (
      <div className="education_display">
        <h2>Education</h2>
        {educationDisplayList}
      </div>
    )
  }
}

export default EducationInfoDisplay;