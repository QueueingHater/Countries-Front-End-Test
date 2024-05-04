import "./index.css";

interface IProps {
  countries: string[];
  onClickCountries: (c: string) => void;
  curKey: string;
}

export const CountryList = (props: IProps) => {
  const { countries, onClickCountries, curKey } = props;

  return (
    <div className="country-list">
      {countries.map((value) => {
        return (
          <div
            key={value}
            className={
              value === curKey ? "country country-selected" : "country"
            }
            onClick={() => {
              onClickCountries(value);
            }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};
