import React  from 'react';
import Tabs from '../../components/Tabs';
import Form from '../../components/Form';
function Settings() {

  
  function ProfileForm() {
    return <div><Form/></div>;
  }
  function PreferenceForm() {
    return <div className='min-w-[100vw]'></div>;
  }
  function SecurityForm() {
    return <div className='min-w-[100vw]'></div>;
  }
  
  const tabs = [
    { id: "Tab1", label: "Edit Profile", content:<ProfileForm/>},
    { id: "Tab2", label: "Preference", content: <PreferenceForm/> },
    { id: "Tab3", label: "Security", content:  <SecurityForm/> },
  ];
  return (

    <Tabs tabs={tabs} />
  );
}

export default Settings;