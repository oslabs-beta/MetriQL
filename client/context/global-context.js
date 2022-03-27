// this file simply creates the contexts, 1 for state and 1 for dispatch
// this is best practice to avoid unnecessary rerenders
// both are imported into GlobalState.js where they are used as Provider elements which will form a wrapper around child components (in our case App)
import { createContext, useContext } from 'react';

const GlobalContext = createContext();

const GlobalDispatch = createContext();

export const SchemaContext = createContext();

export const QueryContext = createContext();

export const GraphContext = createContext();

export const URLContext = createContext();

export const SidebarContext = createContext();

export const HistoryContext = createContext();

export const StatusContext = createContext();

export {GlobalContext, GlobalDispatch};
