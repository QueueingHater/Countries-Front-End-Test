import { IUser } from "../modles/index";

export function convertToCountryMap(users: IUser[]): Map<string, IUser[]> {
  const countryMap = new Map<string, IUser[]>();

  for (const user of users) {
    const countryName = user?.location?.country;

    if (!countryMap.has(countryName)) {
      countryMap.set(countryName, []);
    }

    countryMap.get(countryName)?.push(user);
  }

  // @ts-ignore;
  for (const users of countryMap.values()) {
    users.sort(
      (a: IUser, b: IUser) =>
        new Date(a.registered.date).getTime() -
        new Date(b.registered.date).getTime()
    );
  }

  return sortMapByKeyLength(countryMap);
}

function sortMapByKeyLength(map: Map<string, any[]>): Map<string, any[]> {
  const entries = Array.from(map.entries());

  entries.sort((a, b) => a[1].length - b[1].length);

  const sortedMap = new Map<string, any[]>();
  for (const entry of entries) {
    sortedMap.set(entry[0], entry[1]);
  }

  return sortedMap;
}
