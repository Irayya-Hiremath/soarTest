import React, { useState, useEffect } from 'react';
import { read, write } from './Utility/utils';
import { showToast } from './ToastNotification';
import { Toaster } from 'react-hot-toast';
export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    userProfile: '',
    email: '',
    password: '',
    dateOfBirth: '',
    presentAddress: '',
    permanentAddress: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    write('formData', formData);

    showToast('Success! Data has been saved.', 'success');
  };
  useEffect(() => {
    const storedData = read('formData');
    if (storedData) {
      setFormData(storedData);
    }
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100%] border mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[20%_70%] p-4">
        <div class=" w-[100%] lg:w-[25%] p-4 rounded ">
          <div className="relative mx-auto w-24 h-24">
            <img
              src={formData?.userProfile || null}
              alt="Profile"
              className=" w-24 h-24 object-cover rounded-full"
            />
            {/* Edit Icon */}
            <label
              htmlFor="image-upload"
              className="absolute bottom-0 right-0 w-8 h-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.159 19.555a4.5 4.5 0 01-1.591 1.062l-3.273 1.309a.375.375 0 01-.49-.49l1.308-3.272a4.5 4.5 0 011.063-1.591l12.885-12.886z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25L18.75 6"
                />
              </svg>
            </label>
            <Toaster />
            {/* Hidden Input for File Upload */}
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setFormData({ ...formData, userProfile: imageUrl });
                }
              }}
            />
          </div>
        </div>
        <div class="w-[100%] p-4 flex flex-wrap gap-4 ">
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="name"
              className="block  text-sm font-medium text-[#232323] "
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="userName"
              className="block  text-sm font-medium text-[#232323] "
            >
             User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              required

              value={formData.userName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>

          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="email"
              className="block  text-sm font-medium text-[#232323] "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required

              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="password"
              className="block  text-sm font-medium text-[#232323] "
            >
              Password
            </label>
            <input
              required

              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="dateOfBirth"
              className="block  text-sm font-medium text-[#232323] "
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="presentAddress"
              className="block  text-sm font-medium text-[#232323] "
            >
              Present Address
            </label>
            <input
              required
              type="text"
              id="presentAddress"
              name="presentAddress"
              value={formData.presentAddress    }
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="permanentAddress"
              className="block  text-sm font-medium text-[#232323] "
            >
              Permanent Address
            </label>
            <input
              type="text"
              id="permanentAddress"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
          
          

          

         
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="city"
              className="block  text-sm font-medium text-[#232323] "
            >
              City
            </label>
            <input
              type="text"
              required
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="postalCode"
              className="block  text-sm font-medium text-[#232323] "
            >
              Postal Code
            </label>
            <input
              required
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
          <div className="mb-4 w-[100%] sm:w-[100%] lg:w-[45%]">
            <label
              htmlFor="country"
              className="block  text-sm font-medium text-[#232323] "
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl outline-[#DFEAF2] focus:ring-[#DFEAF2] focus:border-[#DFEAF2]"
            />
          </div>
        </div>
 
       
      </div>
      <button
    type="submit"
    className=" block w-[180px] ml-auto px-4 py-2  bg-[#232323] hover:bg-[#1a1a1a] text-white rounded-md"
  >
    Save
  </button>
    </form>
  );
}
