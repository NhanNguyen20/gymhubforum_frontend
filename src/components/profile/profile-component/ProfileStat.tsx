import { ProfileStatProps } from "@/types";
import { Statistic } from "antd";
import React from "react";

const profileStat: React.FC<ProfileStatProps> = (props) => {
    const likeCount = props.likeCount;
    const getTitle = () => {
        switch (true) {
            case likeCount <= 10:
                return "Chicken Leg";
                break;
            case likeCount <= 20:
                return "Try-harder";
                break;
            case likeCount <= 40:
                return "Gym Rat";
                break;
            case likeCount <= 100:
                return "Gym Bro";
                break;
            case likeCount <= 500:
                return "Acient Gymmer";
                break;
            default:
                return "Mr.Olympia";
                break;
        }
    }
    return (
        <div>
            <Statistic title = "Like Count" value={props.likeCount}/>
            <Statistic title= "Post Count" value={props.postCount}/>
            <Statistic title= "Follower Count" value={props.followerCount}/>
            <span>
                <p>
                    {getTitle()}
                </p>
            </span>
            
        </div>
    )
}

export default profileStat