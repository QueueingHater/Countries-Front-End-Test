import { useEffect, useMemo, useState } from "react";
import { CountryList } from "./components/CountryList";
import { UserList } from "./components/UserList";
import { convertToCountryMap } from "./utils";
import { IUser, Gender } from "./modles";
import "./App.css";
import { useUserMap } from "./components/hooks";

function App() {
  const userMap = useUserMap();
  const [key, setKey] = useState("");
  const [selectedGender, setSelectedGender] = useState(Gender.All);

  useEffect(() => {
    if (selectedGender !== Gender.All) setSelectedGender(Gender.All);
  }, [key, userMap]);

  const countries = useMemo(() => {
    if (!userMap) return [];
    return Array.from(userMap.keys());
  }, [userMap]);

  const users = useMemo(() => {
    if (!key) return [];
    if (!userMap) return [];
    const userList = userMap.get(key) || [];

    if (selectedGender === Gender.All) return userList;
    return userList.filter(
      (value) => value.gender === selectedGender.toLowerCase()
    );
  }, [key, userMap, selectedGender]);

  const onSelectChange = (event: any) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div className="App">
      <CountryList
        curKey={key}
        countries={countries}
        onClickCountries={setKey}
      />
      <UserList userList={users} />

      <div>
        <label htmlFor="gender">Select Gender: </label>
        <select id="gender" value={selectedGender} onChange={onSelectChange}>
          <option value={Gender.All}>{Gender.All}</option>
          <option value={Gender.Female}>{Gender.Female}</option>
          <option value={Gender.Male}>{Gender.Male}</option>
        </select>
        <p>Selected Gender: {selectedGender}</p>
      </div>
    </div>
  );
}

export default App;
