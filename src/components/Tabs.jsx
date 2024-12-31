import React, { useState } from "react";

 function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7.5">
      <div className="w-auto mx-auto mt-10">
        <div className="flex w-full md:w-1/2 lg:w-1/2  border-gray-300">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 cursor-pointer py-2 px-4 text-center font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-[#232323] text-[#232323]"
                  : "text-[#718EBF] "
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="w-[100%] relative py-2 rounded-b-lg overflow-hidden">
          {tabs.map(
            (tab) =>
              tab.id === activeTab && (
                <div key={tab.id} className=" animate-fadeIn">
                  {React.isValidElement(tab.content) ? (
                    tab.content
                  ) : (
                    <div>{tab.content}</div> 
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}
export default Tabs;    
