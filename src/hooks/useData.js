import { useContext } from "react";
import DataContext from "@/store/DataProvider/dataContext";

const useData = () => {
  const data = useContext(DataContext);

  const pendingData = data.data.filter((i) => i.isPending);

  const completedData = data.data.filter((i) => !i.isPending);

  const closeAccount = ({ email, reason, note }) => {
    data.closeAccount(email);
  };

  return {
    closeAccount,
    data: data.data,
    pendingData,
    completedData,
  };
};

export default useData;
