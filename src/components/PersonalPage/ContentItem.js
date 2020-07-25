import React, {useCallback, useEffect, useState} from 'react';
import {connect} from "react-redux";
import Axios from "axios";
import {i18nTextUrl} from "../../constant/url";
import ProjectInitiative from "./content/ProjectInitiative";
import Workout from "./content/Workout";
import TimeManagement from "./content/TimeManagement";
import WorkHabit from "./content/WorkHabit";

const ContentItem = props => {
  const [text, setText] = useState("");

  const requestI18nText = () => {
    const language = props.language
    const type = props.content
    console.log("requesting with: ", type, "language: ", language);
    Axios.get(`${i18nTextUrl}/${type}/${language}`)
      .then(res => {
        console.log("requesting res: ", res);
        setText(res.data)
      })
  }
  /**
   * wrap requestI18nText in useCallback to avoid useEffect dependency warning
   */
  const getI18nText = useCallback(requestI18nText, [])

  useEffect(() => {
    if (props.show) {
      // console.log(props.content)
      getI18nText()
    }
  }, [getI18nText, props.show, props.language])


  let content = <div/>;
  if (props.show) {
    switch (props.content) {
      case "Project Initiative":
        content = <ProjectInitiative />
        break;
      case "Workout Routine":
        content = <Workout />
        break;
      case "Time Management":
        content = <TimeManagement />
        break;
      case "Work Habit":
        content = <WorkHabit />
        break;
      default:
        return content
    }
  }
  return content;
}

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(ContentItem);