import React from "react";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import DashboardNav from "../../containers/DashboardNav/DashboardNav";
import Navbar from "../../containers/Navbar/Navbar";
import Layout from "../../hoc/Layout/Layout";
import BrowseModels from "../BrowseModels/BrowseModels";
import HelpPage from "../HelpPage/HelpPage";
import MyBookmarks from "../MyBookmarks/MyBookmarks";
import MyLikes from "../MyLikes/MyLikes";
import MyModels from "../MyModels/MyModels";
import Newsletter from "../Newsletter/Newsletter";
import QApage from "../QApage/QApage";
import Overview from "../Overview/Overview";
import GettingStarted from "../GettingStarted/GettingStarted";
import classes from "./Dashboard.module.css";

const Dashboard = (props) => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      history.push(location.pathname + "/overview");
    } else if (location.pathname === "/dashboard/") {
      history.push(location.pathname + "overview");
    }
  });
  let content = null;
  let path = location.pathname.split("/")[2];

  switch (path) {
    case "overview":
      content = <Overview />;
      break;
    case "getting_started":
      content = <GettingStarted />;
      break;
    case "my_models":
      content = <MyModels />;
      break;
    case "models":
      content = <BrowseModels />;
      break;
    case "my_likes":
      content = <MyLikes />;
      break;
    case "my_bookmarks":
      content = <MyBookmarks />;
      break;
    case "q_a":
      content = <QApage />;
      break;
    case "newsletter":
      content = <Newsletter />;
      break;
    case "help":
      content = <HelpPage />;
      break;
    default:
      content = <div className={classes.default}></div>;
      break;
  }
  return (
    <div className={classes.Dashboard}>
      <Navbar />
      <div className={classes.container}>
        <DashboardNav match={props.match} />
        <Layout>{content}</Layout>
      </div>
    </div>
  );
};

export default Dashboard;
