
const Dropdowns = ({ handleSearchInputChange, setSelectedTriggerReason, setSelectedRiskLevel }) => {
    return (
        <main>
            <div className="flex w-full items-center mb-7">
                <div className="relative">
                    <input type="search" id="search" name="search" className="pl-8 mr-4 h-9 bg-transparent border border-gray-300  rounded-md text-sm px-40" placeholder="Search..." onChange={handleSearchInputChange} />
                    <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <div className="dropdown inline-block">
                    <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700  border border-gray-200 leading-none py-0 bg-gray-100 mr-3">
                        <span className="mr-1">Trigger Reason</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className=""><a onClick={() => setSelectedTriggerReason("IP Change")} className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Hard Flag</a></li>
                        <li className=""><a onClick={() => setSelectedTriggerReason("Unusual Activity")} className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Temp Flag</a></li>
                        <li className=""><a onClick={() => setSelectedTriggerReason("Flagged Keywords")} className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Restricted Unflag</a></li>
                        <li className=""><a onClick={() => setSelectedTriggerReason("FIFO")} className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Unflag</a></li>
                        <li className=""><a onClick={() => setSelectedTriggerReason("Account Dormancy")} className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Reviewed</a></li>
                        <li className=""><a onClick={() => setSelectedTriggerReason("")} className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">All</a></li>
                    </ul>
                </div>
                <div className="dropdown inline-block">
                    <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 border border-gray-200 leading-none py-0 bg-gray-100 mr-3" onClick={() => setSelectedRiskLevel("High")}>
                        <span className="mr-1">Risk Level</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className=""> <a
                            className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                            onClick={() => setSelectedRiskLevel("High")}
                        >
                            High
                        </a>
                        </li>
                        <li className=""> <a
                            className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                            onClick={() => setSelectedRiskLevel("Medium")}
                        >
                            Medium
                        </a>
                        </li>
                        <li className="">
                            <a
                                className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                                onClick={() => setSelectedRiskLevel("Low")}
                            >
                                Low
                            </a>
                        </li>
                        <li className=""> <a
                            className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                            onClick={() => setSelectedRiskLevel("")}
                        >
                            All
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                    <span className="mr-3">Page 2 of 4</span>
                    <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 leading-none py-0">
                        <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 leading-none py-0">
                        <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Dropdowns