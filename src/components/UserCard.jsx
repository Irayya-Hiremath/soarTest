

import React, { useState } from "react";

import UserOne from '../images/user/user-01.png';
import UserTwo from '../images/user/user-02.png';
import UserThree from '../images/user/user-03.png';
import UserFour from '../images/user/user-04.png';
import UserFive from '../images/user/user-05.png';
import UserSix from '../images/user/user-06.png';
import { Icon } from '@iconify/react';

const UserCard = () => {
  const users = [
    { id: 1, name: "Livia Bator", role: "CEO", img:UserOne },
    { id: 2, name: "Randy Press", role: "Director", img:UserTwo},
    { id: 3, name: "Workman", role: "Designer", img:UserThree },
    { id: 4, name: "Workman", role: "Designer", img: UserFour },
    { id: 5, name: "Workman", role: "Designer", img: UserFive },
    { id: 6, name: "Workman", role: "Developer", img: UserSix },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleSelectUser = (userId) => {
    setSelectedUser(userId);
  };

  const handleNext = () => {
    if (scrollIndex + 3 < users.length) {
      setScrollIndex(scrollIndex + 2);
    }
  };
  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className="border lg:w-[445px] md:w-[445px] p-4 bg-white  rounded-lg shadow-md">
      <div className="flex  items-center space-x-4 ">
     
          {scrollIndex > 0 && (
             <div
        
             className=" h-[50px] cursor-pointer flex justify-center items-center w-[50px] bg-[#FFFFFF] shadow-xl rounded-full hover:bg-gray-300"
           >
        
          <Icon  onClick={handlePrev} style={{height:'25px',width:'25px',}} icon="material-symbols-light:chevron-backward" />
          </div>

      )}
      
      
        {users.slice(scrollIndex, scrollIndex + 3).map((user) => (
          <div
            key={user.id}
            onClick={() => handleSelectUser(user.id)}
            className=' flex-col h-[127px] items-center cursor-pointer '
            
          >
            <img
              src={user.img}
              alt={user.name}
              className="w-[70px] h-[70px] rounded-full object-cover border-2"
            />
            <p className={`text-center text-[14px] md:text-sm lg:text-sm font-medium${selectedUser === user.id ?'text-[#232323] font-bold':'text-[#232323] font-normal'}`}>{user.name}</p>
            <p className={`text-center text-[10px] md:text-xs lg:text-xs font-medium${selectedUser === user.id ?'text-[#718EBF] font-bold':'text-[#718EBF] font-normal'}`}
            
            >{user.role}</p>
          </div>
        ))}
        <div
        
          className=" h-[50px] cursor-pointer flex justify-center items-center w-[50px] bg-[#FFFFFF] shadow-xl rounded-full hover:bg-gray-300"
        >
           
        {scrollIndex + 3 < users.length && (
        
            <Icon  onClick={handleNext} style={{height:'25px',width:'25px',}} icon="material-symbols-light:arrow-forward" />

        )}
        
        </div>
      </div>

        <div className="flex justify-between content-center items-center mt-2">
          <h3 className="text-[14px] md:text-sm lg:text-sm text-[#718EBF] ">Write Amount</h3>
          <div className=" border rounded-full flex justify-between bg-[#EDF1F7]  items-center ">
          <input
            placeholder="0.00"
            className=" outline-none bg-[#EDF1F7] mx-2 m-1 w-1/2 border-none hover:border-none hover:outline-none  "
          />
          <div className=" bg-[#232323] text-white px-4 py-2 rounded-full flex items-center justify-center">
          Send
          <Icon   style={{height:'22px',width:'26px',padding:'4px'}} icon="streamline:mail-send-email-message-solid" />

          </div>

          </div>
        </div>
    </div>
  );
};

export default UserCard;

