import { useEffect, useState } from "react";
import { IUser } from "../../modles";
import { convertToCountryMap } from "../../utils";

export const useUserMap = () => {
  const [userMap, setUserMap] = useState<Map<string, IUser[]>>();

  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const jsonData = await response.json();
    setUserMap(convertToCountryMap(jsonData.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return userMap;
};
