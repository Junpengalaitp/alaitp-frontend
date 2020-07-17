import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Axios from "axios";
import {i18nTextUrl} from "../../constant/url";

const ContentItem = props => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.show) {
      requestI18nText()
    }
  }, [props.show, props.language])


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


  let content = <div/>;
  if (props.show) {
    content = (
      <div>
        <p>{text}</p>
      </div>
    )
  }
  return content;
}

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(ContentItem);