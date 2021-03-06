import React, {Fragment} from 'react'
import CoOccurrenceWordCloud from './CoOccurrenceWordCloud'
import Axios from 'axios'
import Spinner from "../../UI/Spinner/Spinner";
import {correlateWordReqUrl} from "../../../constant/url";

// max total number of keywords in cloud
const wordNum = 30;

/**
 * contains word could, handling request for correlated words
 */
class CoOccurredWords extends React.Component {
  state = {
    category: "all",
    coOccurredWords: []
  };

  requestCoOccurrence(category = null) {
    const word = this.props.keyword.replace('#', '%23');
    if (category === null) {
      category = this.state.category;
    }
    console.log("requesting with: ", word, "category: ", category);
    Axios.get(`${correlateWordReqUrl}/${word}/${wordNum}/${category}`)
    .then(res => {
      console.log("requesting res: ", res);
      this.setState({coOccurredWords: res.data.words})
    })
  }

  componentDidMount() {
    this.requestCoOccurrence()
  }

  render() {
    let cloud = <Spinner />
    if (this.state.coOccurredWords.length !== 0) {
      cloud = (
        <Fragment>
          <CoOccurrenceWordCloud
            keyword={this.props.keyword}
            coOccurredWords={this.state.coOccurredWords}
            selectCategory={category => this.requestCoOccurrence(category)} />
        </Fragment>
      )
    }
    return cloud;
  }
}

export default CoOccurredWords;