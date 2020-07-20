import React from 'react';
import NavBar from "../../components/UI/NavBar";
import SideNav from "../../components/PersonalPage/SideNav";
import MediaContent from "../../components/PersonalPage/MediaContent";
import Avatar from "../../components/PersonalPage/avatar";

const PersonalPage = () => {
  return (
    <div>
      <NavBar/>
      <div className="row justify-content-center">
        <div className="col-1">
          <SideNav/>
          <Avatar/>
        </div>
        <div className="col-9">
          <MediaContent/>
        </div>
      </div>
    </div>
  )
}

export default PersonalPage;
