function GeneralInfoDisplay({generalInfo}) {
  if (generalInfo.name === "" || generalInfo.email === "" || generalInfo.phone === "") {
    return (
      <div className="general_info_warning">
        <h3>Please enter the general information</h3>
      </div>
    );
  } else {
    return (
      <div className="general_info_display">
        <h3 className="display_name_field">{generalInfo.name}</h3>
        <p className="display_email_field">{generalInfo.email}</p>
        <p className="display_phone_field">{generalInfo.phone}</p>
      </div>
    )
  }
}

export default GeneralInfoDisplay;