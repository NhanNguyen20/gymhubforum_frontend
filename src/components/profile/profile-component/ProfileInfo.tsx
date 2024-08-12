import React from "react";
import { ProfileInfoProp } from "@/types";
import Picture from "@/components/Picture";

const ProfileInfo: React.FC<ProfileInfoProp> = (props) => {
    return (
        <div className={props.className}>
            <span><Picture blob={null} alt="Alo" className="" /></span>
            <h1>{props.username}</h1>
            <span>
                <p><strong>Join Date: </strong>{props.joinDate}</p>
                <p><strong>Last Seen: </strong>{props.lastSeenDate}</p>
            </span>
            <span>
                <p>{props.bio} </p>
            </span>
        </div>
    )
}

export default ProfileInfo