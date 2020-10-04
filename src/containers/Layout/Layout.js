import React from "react";
import {Route} from 'react-router'
import SearchResults from "./SearchResult"
import NavBar from '../../components/UI/NavBar'
import MainPage from "./MainPage";
import PersonalPage from "./PersonalPage";
import {mainPageUrl, personalPageUrl, searchResUrl} from "../../constant/url";
import I18NSwitch from "../../components/UI/I18nSwitch";
import BeiAn from "../../Beian";

const Layout = () => {
  return (
    <div>
      <I18NSwitch />
      <Route path={mainPageUrl} exact component={MainPage} />
      <Route path={searchResUrl} component={NavBar} />
      <Route path={searchResUrl} render={() => <SearchResults/>} />
      <Route path={personalPageUrl} render={() => <PersonalPage/>} />
    </div>
  )
}

export default Layout;
