import React from 'react';
import NavBar from "../../components/UI/NavBar";
import SideNav from "../../components/PersonalPage/SideNav";
import MediaContent from "../../components/PersonalPage/MediaContent";

const PersonalPage = () => {
  return (
    <div>
      <NavBar/>
      <div className="row justify-content-center">
        <div className="col-2">
          <SideNav/>
        </div>
        <div className="col-8">
          <MediaContent/>
        </div>
      </div>
    </div>
  )
}

export default PersonalPage;
