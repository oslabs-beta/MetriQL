import { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

import SchemaVisual from '../components/SchemaVisual'
import Schema from "./Schema";
import classes from "../../styles/SideBar.module.css";
import { SidebarContext } from "../context/global-context";
import { initialDisplayState } from "../context/global-reducer";

function SideBar({ openDB }) {
  const { displayState, displayDispatch, urlState } = useContext(SidebarContext);

  const openSidebar = () => {
    displayDispatch({
      type: "UPDATE_SIDEBAR_DISPLAY",
      payload: true,
    });
  };

  const closeSidebar = () => {
    displayDispatch({
      type: "UPDATE_SIDEBAR_DISPLAY",
      payload: false,
    });
  };

  const openDBHandler = () => {
    return openDB();
  };

  const handleSchemaOpen = (value) => {
    displayDispatch({
      type: "UPDATE_SCHEMA_DISPLAY",
      payload: value,
    });
  };

  const handleSchemaClose = () => {
    displayDispatch({
      type: "UPDATE_SCHEMA_DISPLAY",
      payload: false,
    });
  };

  const handleSchemaVisOpen = () => {
    displayDispatch({
      type: "UPDATE_D3_DISPLAY",
      payload: true,
    });
    console.log("handle open")
  };

  const handleSchemaVisClose = () => {
    displayDispatch({
      type: "UPDATE_D3_DISPLAY",
      payload: false,
    });
  };

  return (
    <div>
      <nav
        className={displayState.sidebar ? classes.sidebarActive : classes.sidebar}
      >
        <ul className={classes.sideMenu} onClick={closeSidebar}>
          <li className={classes.sidebarToggle}>
            <AiIcons.AiOutlineClose className={classes.closeSide} />
          </li>
          <li className={classes.navText}>
            <a onClick={openDBHandler}>DB Entry</a>
          </li>
          <li className={classes.navText}>
            <a onClick={() => handleSchemaOpen("types")}>View Types</a>
            <Dialog
              onClose={handleSchemaClose}
              open={displayState.schema === "types"}
            >
              <Schema schema={urlState} view={"types"} />
            </Dialog>
          </li>
          <li className={classes.navText}>
            <a onClick={() => handleSchemaOpen("resolvers")}>View Resolvers</a>
            <Dialog
              onClose={handleSchemaClose}
              open={displayState.schema === "resolvers"}
            >
              <Schema schema={urlState} view={"resolvers"} />
            </Dialog>
          </li>
          <li className={classes.navText}>
            <a onClick={() => handleSchemaVisOpen("visuals")}>Schema Visualizer</a>
            <Dialog
              onClose={handleSchemaVisClose}
              open={displayState.visuals}
              fullWidth={true}
              maxWidth={'xl'}
            >
              <SchemaVisual visuals={urlState}/>
            </Dialog>
          </li>
        </ul>
      </nav>
      <FaIcons.FaBars className={classes.sidebarBar} onClick={openSidebar} />
    </div>
  );
}

export default SideBar;
