import React, {Fragment} from 'react';
import {connect} from "react-redux";
import BeiAn from "../../Beian";
import Media from "react-media";
import LandingPage from "./LandingPage";
import MobilePage from "./MobilePage";

const MainPage = () => {
  return (
    <div>
      <Media queries={{
        small: "(max-width: 991px)",
        large: "(min-width: 992px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && <MobilePage />}
            {matches.large && <LandingPage />}
          </Fragment>
        )}
      </Media>

      <BeiAn />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(MainPage);
