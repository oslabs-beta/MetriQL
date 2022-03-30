import { useState, useContext } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

import SchemaVisual from '../components/SchemaVisual'
import Schema from "./Schema";
import classes from "../../styles/SideBar.module.css";
import { SidebarContext } from "../context/global-context";
import { initialDisplayState } from "../context/global-reducer";
import StorageIcon from '@mui/icons-material/Storage';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';

function SideBar({ openDB }) {
    const { displayState, displayDispatch, urlState } = useContext(SidebarContext);

    // const closeSidebar = () => {
    //     displayDispatch({
    //       type: "UPDATE_SIDEBAR_DISPLAY",
    //       payload: false,
    //     });
    //   };

    const openDBHandler = () => {
        return openDB();
    };

    const handleSchemaOpen = (value) => {
        console.log('openplease')
        displayDispatch({
            type: "UPDATE_SCHEMA_DISPLAY",
            payload: value,
        });
    };

    const handleSchemaClose = () => {
        console.log('please close')
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
    };

    const handleSchemaVisClose = () => {
        displayDispatch({
            type: "UPDATE_D3_DISPLAY",
            payload: false,
        });
    };

    return (
            <div>
                <nav className={classes.sidebar} >
                    <ul className={classes.mainMenu}>

                        <li className={classes.menuItemOne}>
                            <a onClick={openDBHandler} className={classes.menuA}>
                            <StorageIcon style={{fill: '#6415FF'}}/>
                                <div className={classes.menuTxtHld}>
                                    <i className={classes.menuIcon}></i>
                                    <span className={classes.menuTxt}>Change Database</span>
                                </div>
                            </a>
                        </li>

                        <li className={classes.menuItem}>
                            <a onClick={() => handleSchemaOpen("types")} className={classes.menuA}>
                                <FeaturedPlayListIcon style={{fill: '#6415FF'}}/>
                                <div className={classes.menuTxtHld}>
                                    <i className={classes.menuIcon} class="fa=solid fa-igloo"></i> 
                                    <span className={classes.menuTxt}>View Types</span>
                                </div>
                                
                            </a>
                            <Dialog
                                    onClose={handleSchemaClose}
                                    open={displayState.schema === "types"}
                                >
                                    <Schema schema={urlState} view={"types"} />
                                </Dialog>
                        </li>

                        <li className={classes.menuItem}>
                            <a onClick={() => handleSchemaOpen("resolvers")} className={classes.menuA}>
                                <FeaturedPlayListIcon style={{fill: '#6415FF'}}/>
                                <div className={classes.menuTxtHld}>
                                    <i className={classes.menuIcon}></i>
                                    <span className={classes.menuTxt}>View Resolvers</span>
                                </div>
                                
                            </a>
                            <Dialog
                                    onClose={handleSchemaClose}
                                    open={displayState.schema === "resolvers"}
                                >
                                    <Schema schema={urlState} view={"resolvers"} />
                                </Dialog>
                        </li>

                        <li className={classes.menuItem}>
                            <a onClick={() => handleSchemaVisOpen("visuals")} className={classes.menuA}>
                               <InsertPhotoIcon style={{fill: '#6415FF'}}/>
                                <div className={classes.menuTxtHld}>
                                    <i className={classes.menuIcon}></i>
                                    <span className={classes.menuTxt}>Visualizer</span>
                                </div>
                                
                            </a>
                            <Dialog
                                    onClose={handleSchemaVisClose}
                                    open={displayState.visuals}
                                    fullWidth={true}
                                    maxWidth={'xl'}
                                >
                                    <SchemaVisual visuals={urlState} />
                                </Dialog>
                        </li>

                        <li className={classes.menuItem}>
                            <a href="https://github.com/oslabs-beta/MetriQL" className={classes.menuA} target='_blank'>
                               <SaveAltOutlinedIcon style={{fill: '#6415FF'}}/>
                                <div className={classes.menuTxtHld}>
                                    <i className={classes.menuIcon}></i>
                                    <span className={classes.menuTxt}>Download</span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
       
    );
}

export default SideBar;