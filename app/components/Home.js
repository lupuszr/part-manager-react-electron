import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';
import Parts from './Parts'
import Management from './Management'
import SearchResult from './SearchResult'

export default class Home extends Component {
  render() {
    const props = this.props;
    const {parts} = this.props
    return (
      <div className={"container " + styles["container"]}>
        {console.log(parts.currentPart)}
        <Parts {...{initialValues:parts.currentPart, ...props}}></Parts>
        <SearchResult {...{results:parts.results, showResults: parts.management.showResults, ...props}}></SearchResult>:
      </div>
    );
  }
}
