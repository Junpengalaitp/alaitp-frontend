import React, {Fragment} from "react";
import {Route} from 'react-router'
import SearchResults from "./SearchResults"
import NavBar from '../../components/UI/NavBar'
import {MainPage} from "./MainPage";
import PersonalPage from "./PersonalPage";
import {mainPageUrl, personalPageUrl, searchResUrl} from "../../constant/url";

const Layout = () => {

  return (
    <Fragment>
      <Route path={mainPageUrl} exact component={MainPage}/>
      <Route path={searchResUrl} component={NavBar}/>
      <Route path={searchResUrl} render={() => <SearchResults/>}/>
      <Route path={personalPageUrl} component={PersonalPage}/>
    </Fragment>
  )
}

export default Layout;
