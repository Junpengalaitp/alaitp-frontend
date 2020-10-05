import React from 'react';
import {connect} from "react-redux";
import ProjectOrigin from "./content/ProjectOrigin";
import Workout from "./content/Workout";
import TimeManagement from "./content/TimeManagement";
import ReadingHabit from "./content/ReadingHabit";
import CodingPractice from "./content/CodingPractice";
import LearningMethod from "./content/LearningMethod";

const ContentItem = props => {

  let content = <div/>;
  if (props.show) {
    switch (props.content) {
      case "Project Origin":
        content = <ProjectOrigin />
        break;
      case "Workout Routine":
        content = <Workout />
        break;
      case "Time Management":
        content = <TimeManagement />
        break;
      case "Reading Habit":
        content = <ReadingHabit />
        break;
      case "Coding Practice":
        content = <CodingPractice />
        break;
      case "Learning Method":
        content = <LearningMethod />
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