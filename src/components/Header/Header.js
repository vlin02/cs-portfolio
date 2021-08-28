// @flow strict
import React from "react";
import styles from "./Header.module.scss";
import TextLoop from "react-text-loop";
import ReactIcon from "../../../static/svg/react.svg?name=ReactIcon"
import GraphqlIcon from "../../../static/svg/graphql-ar21.svg?name=GraphqlIcon"
import ApolloIcon from "../../../static/svg/apollo-graphql-1.svg?name=ApolloIcon"
import AwsIcon from "../../../static/svg/aws.svg?name=AwsIcon"
import MongodbIcon from "../../../static/svg/mongodb-ar21.svg?name=MongodbIcon"

const Header = () => {
  return (  
    <div className={styles["header"]}>
      <TextLoop interval={1000} mask={true} className={styles["loop"]}>
        <div className={styles["icon"]}><ReactIcon className={styles["icon"]}/>🪝 me right in</div>
        <div className={styles["icon"]}><GraphqlIcon className={styles["icon"]}/>&nbsp;REST (Api) in peace</div>
        <div className={styles["icon"]}><AwsIcon className={styles["icon"]}/>&nbsp;still adding services!</div>
        <div className={styles["icon"]}><MongodbIcon className={styles["icon"]}/>&nbsp;it's in my&nbsp;<i>collection</i></div>
      </TextLoop>
    </div>
  );
};

export default Header;
