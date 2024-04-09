import { useState } from 'react'
import Header from './components/Header'
import Control from './components/Control'
import Display from './components/Display'

function App() {
  const [generalInfo, setGeneralInfo] = useState(
    {name: "", email: "", phone: ""}
  );

  function handleGeneralInfoSubmit(name, email, phone) {
    setGeneralInfo({
      name: name,
      email: email,
      phone: phone
    })
  }

  return (
    <>
      <Header></Header>
      <div className="main_page">
        <Control generalInfo={generalInfo} generalInfoSubmit={handleGeneralInfoSubmit}></Control>
        <Display generalInfo={generalInfo}></Display>
      </div>
    </>
  )
}

export default App
