import { useState } from 'react'

function EducationalInfoForm({educationInfo, onClick, index}) {
  var iniital_school = "";
  var iniital_major = "";
  var iniital_start = "";
  var iniital_end = "";
  if (index !== educationInfo.length) {
    iniital_school = educationInfo[index].school;
    iniital_major = educationInfo[index].major;
    iniital_start = educationInfo[index].start;
    iniital_end = educationInfo[index].end;
  }

  const [school, setSchool] = useState(iniital_school);
  const [major, setMajor] = useState(iniital_major);
  const [start, setStart] = useState(iniital_start);
  const [end, setEnd] = useState(iniital_end)

  return (
    <form className='education_info_form'>
      <div className="education_info_grid">
        <label htmlFor="school">School: </label>
        <input type="text" name="school" id="school" value={school} onChange={(e) => setSchool(e.target.value)}/>
      </div>

      <div className="education_info_grid">
        <label htmlFor="major">Major: </label>
        <input type="text" name="major" id="major" value={major} onChange={(e) => setMajor(e.target.value)}/>
      </div>

      <div className="education_info_grid">
        <label htmlFor="start">Start date: </label>
        <input type="month" name="start" id="start" value={start} onChange={(e) => setStart(e.target.value)}/>
      </div>

      <div className="education_info_grid">
        <label htmlFor="end">End date: </label>
        <input type="month" name="end" id="end" value={end} onChange={(e) => setEnd(e.target.value)}/>
      </div>

      <div className="education_info_grid">
        <button id='education_info_submit' onClick={() => onClick(index, school, major, start, end)}>Submit</button>
      </div>
    </form>
  )
}

function EducationListItem({education, index, onClick}) {
  return (
    <li key={index}>
      {education.school}
      <button className='education_edit_btn' onClick={() => onClick(index)}>Edit</button>
    </li>
  )
}

function EducationalInfoControl({educationInfo, educationInfoSubmit}) {
  const [formDisplay, setFormDisplay] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  function handleInsertClick() {
    setFormDisplay(true);
  };

  function handleSubmitClick(id, school, major, start, end) {
    if (!(school === "" || major === "" || start === "" || end === "")) {
      var new_id = 0
      if (id !== educationInfo.length) {
        new_id = educationInfo.length;
      } else {
        new_id = educationInfo.length + 1;
      }
      setCurrIndex(new_id);
      educationInfoSubmit(id, school, major, start, end);
    }
    setFormDisplay(false);
  };

  function handleEditClick(index) {
    setCurrIndex(index);
    setFormDisplay(true);
  }

  const educationList = educationInfo.map(
    (education, index) => 
    <EducationListItem 
    education={education} 
    index={index} onClick={handleEditClick}></EducationListItem>)

  return (
    <div className="enducation_info_control">
      <h3>Education Information</h3>
      {educationInfo.length === 0 ? 
      null 
      :
      <ul className='control_education_list'>
        {educationList}
      </ul>
      }
      {formDisplay ? 
      (<EducationalInfoForm 
        educationInfo={educationInfo}
        onClick={handleSubmitClick} 
        index={currIndex}></EducationalInfoForm>) 
      : 
      (<button onClick={handleInsertClick} id='education_info_insert'>Insert</button>)}
    </div>
  )
}

export default EducationalInfoControl;