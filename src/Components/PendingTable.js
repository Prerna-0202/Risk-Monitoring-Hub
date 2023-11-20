import useData from "@/hooks/useData";
import arrows from "../assets/arrow-up-down.svg";
import Image from 'next/image';

const Table = ({ selectedRiskLevel, selectedTriggerReason, searchTerm }) => {
  const { pendingData } = useData();

  const filteredData = pendingData.filter((item) => {
    return (
      (selectedTriggerReason
        ? item.triggerBy === selectedTriggerReason
        : true) &&
      (selectedRiskLevel ? item.risk === selectedRiskLevel : true) &&
      (searchTerm
        ? Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
        : true)
    );
  });

  const highlightMatches = (text) => {
    if (!searchTerm) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, (match) => `${match}`);
  };

  return (
    <main>
      <table className="w-full text-left">
        <thead className="bg-gray-100 border-2  border-gray-400">
          <tr className="rounded-full">
            <th className="font-bold pt-5 pb-5 pl-4">User</th>
            <th className="font-bold pt-5 pb-5"></th>
            <th className="font-bold pt-5 pb-5 pl-2 flex gap-1">Risk Level
              <Image src={arrows} width={10} alt="arrows" />
            </th>
            <th className="font-bold pt-5 pb-5 pl-2">Trigger Reason</th>
            <th className="font-bold pt-5 pb-5 pl-2 flex gap-1">In queue for
              <Image src={arrows} width={10} alt="arrows" /></th>
            <th className="font-bold pt-5 pb-5 pl-4">Date added on </th>
            <th className="font-bold pt-5 pb-5 pl-2">Previously Reviewed</th>
          </tr>
        </thead>
        <tbody className=" border-2 border-gray-600 rounded-md p-5">
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
                <div className="flex-col items-center font-semibold">
                  {highlightMatches(item.user)}
                  <div className="text-[#777676] text-sm">{item.email}</div>
                </div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="mt-3 cursor-pointer pr-5">
                  <path fill="#4643EE" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                </svg>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 flex-row">
                <div className={`w-3 h-3 rounded-full mr-1 inline-block ${item.risk === 'High' ? 'bg-[#7D2424]' : (item.risk === 'Medium' ? 'bg-[#88670F]' : 'bg-[#006540]')}`}></div>
                <span className={`font-semibold items-center ${item.risk === 'High' ? 'text-[#7D2424]' : (item.risk === 'Medium' ? 'text-[#88670F]' : 'text-[#006540]')}`}>
                  {item.risk}
                </span>
              </td>

              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 font-semibold">
                {item.triggerBy}
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 font-semibold">
                {item.queueTime}
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-col text-[#777676]">{item.date}</div>
                </div>
              </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-col font-semibold">
                    {item.review === 1 ? "Yes" : "No"}
                    <div className="text-gray-400 text-xs">
                      {item.reviewDate}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
