import useData from "@/hooks/useData";
import { useRef } from "react";

const CloseAccountPopup = ({ closePopup, setPopupOpen }) => {
  const email = useRef();
  const { closeAccount } = useData();

  const onCloseAccount = (e) => {
    e.preventDefault();
    closeAccount({ email: email.current.value });
    closePopup();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={closePopup}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 className="text-lg font-semibold mb-4">Close Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              ref={email}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-black">
              Want to file UAR?
            </label>
            <span className="text-sm font-medium text-black mx-5">
              <input type="checkbox" className="mt-2 mx-1" /> Yes
            </span>
            <span className="text-sm font-medium text-black mx-5">
              <input type="checkbox" className="mx-1 mt-2" />
              No
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">
              Reason
            </label>
            <input type="text" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">
              Note
            </label>
            <textarea
              type="text"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex">
            <div className="mb-4 text-xl pr-6 mt-3">
              <input type="checkbox" className="border-b mx-2 rounded-full " />
              <label className="text-base font-medium text-gray-600 ">
                Charge Closure fee
              </label>
            </div>
            <button
              type="submit"
              className="bg-gray-200 text-gray-400 font-semibold px-4 hover:bg-[#4643EE] hover:text-white                                ] rounded-md "
              onClick={onCloseAccount}
            >
              Close Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CloseAccountPopup;
