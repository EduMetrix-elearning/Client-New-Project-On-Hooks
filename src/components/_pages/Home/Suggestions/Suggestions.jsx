import React, { useState } from "react";
import "./suggestions.scss";
import { useEffect } from "react";
import { followFriend, getStudentsToFollow } from "../../../../api";
// import { userInfo } from '../../../../utils/localStorage_Utils'
import { useDispatch, useSelector } from "react-redux";
import { followings } from "../../../../slices/followSlice";

export default function Suggestions() {
  const dispatch = useDispatch();
  const userInfo = useSelector((s) => s.Authentication.user);
  const networks = useSelector((s) => s.Network);

  const [peoples, setPeoples] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function asyncFunction() {
      const response = await getStudentsToFollow();
      setPeoples(response.data.data);
    }
    asyncFunction();
  }, [update, userInfo]);

  function followButtonHandle(people) {
    let obj = {
      user_name: people.user_name,
      follower_id: userInfo.id,
    };
    console.log(obj);
    followFriend(obj)
      .then(
        (res) => (
          dispatch(followings(networks.followings + 1)), setUpdate(!update)
        )
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className="Suggestions">
      <div className="title">
        <h6>People suggestions</h6>
      </div>
      <div className="suggestions_inner_div">
        {peoples &&
          peoples.map((people, i) => {
            return (
              <div className="people" key={i}>
                <div>
                  <img src={people.student_photo} alt="" />
                  <p>{people.student_fname + " " + people.student_lname}</p>
                </div>
                <i
                  className="fa fa-user-plus"
                  onClick={() => followButtonHandle(people)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
