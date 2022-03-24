import { useState, useContext } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import classes from '../../styles/SideBar.module.css'
import { QueryContext, SQLContext } from '../context/global-context';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Schema from './Schema';
import SchemaVisual from './SchemaVisual'

function SideBar({ openDB }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const { urlState, sqlState } = useContext(QueryContext);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  }

  const openDBHandler = () => {
    return openDB();
  }

  const [openType, setOpenType] = useState(false);

  const handleTypeOpen = () => {
    setOpenType(true);
  };
  const handleTypeClose = () => {
    setOpenType(false);
  };

  
  const [openResolver, setOpenResolver] = useState(false);

  const handleResolverOpen = () => {
    setOpenResolver(true);
  };
  const handleResolverClose = () => {
    setOpenResolver(false);
  };

  const [openSchemaVis, setOpenSchemaVis] = useState(false);

  const handleSchemaVisOpen = () => {
    setOpenSchemaVis(true);
  };
  const handleSchemaVisClose = () => {
    setOpenSchemaVis(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


  return (
    <div>
      <nav className={showSidebar ? classes.sidebarActive : classes.sidebar}>
        <ul className={classes.sideMenu} onClick={closeSidebar} >
          <li className={classes.sidebarToggle}>
            <AiIcons.AiOutlineClose className={classes.closeSide} />
          </li>
          <li className={classes.navText}>
            <a onClick={openDBHandler}>DB Entry</a>
          </li>
          <li className={classes.navText}>
            <a  onClick={handleTypeOpen}>View Types</a>
            <BootstrapDialog
              onClose={handleTypeClose}
              aria-labelledby="customized-dialog-title"
              open={openType}
            >
              <Schema schema={urlState} view={'types'}/>
            </BootstrapDialog>
          </li>
          <li className={classes.navText}>
            <a onClick={handleResolverOpen}>View Resolvers</a>
            <BootstrapDialog
              onClose={handleResolverClose}
              aria-labelledby="customized-dialog-title"
              open={openResolver}
            >
              <Schema schema={urlState} view={'resolvers'} />
            </BootstrapDialog>
          </li>
          <li className={classes.navText}>
            <a onClick={handleSchemaVisOpen}>Schema Visualizer</a>
            <BootstrapDialog
              onClose={handleSchemaVisClose}
              aria-labelledby="customized-dialog-title"
              open={openSchemaVis}
            >
              <SchemaVisual visual={sqlState}/>
            </BootstrapDialog>
          </li>
        </ul>
      </nav>
      <FaIcons.FaBars className={classes.sidebarBar} onClick={openSidebar}/>
    </div>
  )
}

export default SideBar;