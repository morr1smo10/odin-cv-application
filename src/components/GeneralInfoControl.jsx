import { useState } from 'react';

function GeneralInfoForm({generalInfo, onClick}) {
  const [name, setName] = useState(generalInfo.name);
  const [email, setEmail] = useState(generalInfo.email);
  const [phone, setPhone] = useState(generalInfo.phone);

  return (
    <form className='general_info_form'>
      <div className="general_info_form_grid">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
        
      <div className="general_info_form_grid">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className="general_info_form_grid">
        <label htmlFor="phone">Phone number: </label>
        <input type="number" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </div>

      <div className="general_info_form_grid">
        <button id='general_info_submit' onClick={() => onClick(name, email, phone)}>Submit</button>
      </div>
    </form>
  )
}

function GeneralInfoControl({generalInfo, generalInfoSubmit}) {
  const [formDisplay, setFormDisplay] = useState(false);

  function handleEditClick() {
    setFormDisplay(true);
  };

  function handleSubmitClick(name, email, phone) {
    generalInfoSubmit(name, email, phone);
    setFormDisplay(false);
  };

  return (
    <div className="general_info_control">
      <h3>General Information</h3>
      {formDisplay ? 
      (<GeneralInfoForm generalInfo={generalInfo} onClick={handleSubmitClick}></GeneralInfoForm>) 
      : 
      (<button onClick={handleEditClick} id='general_info_edit'>Edit</button>)}
    </div>
  )
}

export default GeneralInfoControl;