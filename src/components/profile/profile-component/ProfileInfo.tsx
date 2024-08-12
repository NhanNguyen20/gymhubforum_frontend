import React from "react";
import { ProfileInfoProp } from "@/types";
import Picture from "@/components/Picture";

const ProfileInfo = ({ props }: { props: ProfileInfoProp }) => {
  return (
    <div className={props.className}>
      <span>
        <Picture blob={null} alt="Alo" className="" />
      </span>
      <h1>{props.userName}</h1>
      <span>
        <p>
          <strong>Join Date: </strong>
          {props.joinDate}
        </p>
        <p>
          <strong>Last Seen: </strong>
          {props.lastSeen}
        </p>
      </span>
      <span>
        <p>{props.bio} </p>
      </span>
    </div>
  );
};

export default ProfileInfo;
