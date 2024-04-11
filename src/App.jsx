import { useState } from 'react'
import Header from './components/Header'
import Control from './components/Control'
import Display from './components/Display'

function App() {
  const [generalInfo, setGeneralInfo] = useState(
    {name: "", email: "", phone: ""}
  );

  const [educationInfo, setEducationInfo] = useState([]);

  function handleGeneralInfoSubmit(name, email, phone) {
    setGeneralInfo({
      name: name,
      email: email,
      phone: phone
    })
  }

  function handleEducationInfoSubmit(id, school, major, start, end) {
    if (id === educationInfo.length) {
      setEducationInfo(
        [
          ...educationInfo,
          { id: id, school: school, major: major, start: start, end: end }
        ]
      )
    } else {
      setEducationInfo(
        educationInfo.map(education => {
          if (education.id === id) {
            return { ...education, school: school, major: major, start: start, end: end };
          } else {
            return education;
          }
        })
      )
    }
  }

  return (
    <>
      <Header></Header>
      <div className="main_page">
        <Control 
        generalInfo={generalInfo} 
        generalInfoSubmit={handleGeneralInfoSubmit} 
        educationInfo={educationInfo}
        educationInfoSubmit={handleEducationInfoSubmit}></Control>
        <Display generalInfo={generalInfo} educationInfo={educationInfo}></Display>
      </div>
    </>
  )
}

export default App
