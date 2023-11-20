
"use client"
import CloseAccountPopup from "@/Components/CloseAccountPopup";
import Sidebar from "@/Components/Sidebar";
import Table from "@/Components/CompletedTable";
import Link from "next/link";
import { useState } from "react";
import Dropdowns from "@/Components/Dropdowns";
import Footer from "@/Components/Footer";

const Monitoring = () => {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedTriggerReason, setSelectedTriggerReason] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleOpenCloseAccountPopup = () => {
    setShowCloseAccountPopup(true);
  };

  const handleCloseCloseAccountPopup = () => {
    setShowCloseAccountPopup(false);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <main className="flex">

      {/* Left Side content */}
      <Sidebar />

      {/* Right Side Content */}
      <div className="flex-grow md:ml-72">
        <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white sticky top-0">
          <div className="flex w-full items-center">
            <div className="flex items-center text-3xl font-bold">
              Monitoring
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:mt-7 mt-4">
            <Link href="/Monitoring" className="px-3 border-b-2 border-transparent text-gray-600 pb-1.5">Pending</Link>
            <Link href="#" className="px-3 border-b-2 border-blue-500 text-blue-500 pb-1.5">Completed</Link>
            <button href="/CloseAccount" className="bg-red-200 font-bold text-red-700 hover:bg-red-100 py-1 px-3 rounded-md absolute right-4 mb-4"><a
              className=""
              onClick={() => setPopupOpen(true)}
            >
              ❌ Close Account
            </a></button>
          </div>
        </div>
        <div className="sm:p-7 p-4">

          {/* Search bar and Dropdowns */}
          <Dropdowns handleSearchInputChange={handleSearchInputChange} setSelectedTriggerReason={setSelectedTriggerReason} setSelectedRiskLevel={setSelectedRiskLevel} />

          {/* Data Table */}
          <Table selectedRiskLevel={selectedRiskLevel} selectedTriggerReason={selectedTriggerReason} searchTerm={searchTerm} />

          {/* Footer Page bar */}
          <Footer />

        </div>

        {/* Popup */}

        {isPopupOpen && (
          <CloseAccountPopup closePopup={closePopup} handleOpenCloseAccountPopup={handleOpenCloseAccountPopup} handleCloseCloseAccountPopup={handleCloseCloseAccountPopup} setPopupOpen={setPopupOpen} />
        )}

      </div>
    </main>
  )
};

export default Monitoring;