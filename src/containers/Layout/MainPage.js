import React from 'react'
import SearchBar from '../../components/Search/SearchBar'
import Intro from './Intro'
import {i18nText} from "../../constant/i18nText";
import {connect} from "react-redux";
import BeiAn from "../../Beian";

const MainPage = props => {
  return (
    <div>
      <main className="main-page">
        <div className="main-page--search">
          <h1 className="main-page--search_heading">{i18nText("mainPageHeading", props.language)}</h1>
          <SearchBar/>
          <Intro/>
        </div>
      </main>
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
