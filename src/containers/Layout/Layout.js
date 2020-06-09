import React, { Fragment } from "react";
import { Route } from 'react-router'
import SearchResults from "./SearchResults"
import NavBar from '../../components/UI/NavigationBar'
import { MainPage } from "./MainPage";
import PersonalPage from "./PersonalPage";

const Layout = () => {

  return (
    <Fragment>
      <Route path='/alaitp-frontend' exact component={MainPage} />
      <Route path='/alaitp-frontend/keywords' component={NavBar} />
      <Route path='/alaitp-frontend/keywords' render={() => <SearchResults />} />
      <Route path='/alaitp-frontend/personal-page' component={PersonalPage} />
    </Fragment>
  )
}

export default Layout;
