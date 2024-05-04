import { IUser } from "../../modles";
import "./index.css";

interface IProps {
  userList: IUser[];
}

export const UserList = (props: IProps) => {
  const { userList } = props;

  return (
    <div className="user-list">
      {userList.map((value) => {
        return (
          <div key={value.login.uuid} className="user">
            <b>Name: </b>
            <span>{`${value.name.title} ${value.name.first} ${value.name.last}`}</span>
            <br />
            <b>Gender: </b>
            <span>{value.gender}</span>
            <br />
            <b>City: </b>
            <span>{value.location.city}</span>
            <br />
            <b>State: </b>
            <span>{value.location.state}</span>
            <br />
            <b>Date Registered: </b>
            <span>{value.registered.date}</span>
          </div>
        );
      })}
    </div>
  );
};
