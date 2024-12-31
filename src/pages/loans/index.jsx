// import React from 'react'

// export default function Loans() {
//   return (
//     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">Loans</div>
//   )
// }

import React, { useState,useEffect } from 'react';
import { read, write } from '../../components/Utility/utils';
import Tabs from '../../components/Tabs';
import Form from '../../components/Form';
function Loans() {
  // const [image, setImage] = useState(null);

  // Handle image upload
  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setImage(imageUrl);
  //   }
  // };
  
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

export default Loans;