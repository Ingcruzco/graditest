import { createContext } from "react";

//this context allow us to share the state through all tree components without pass one to one between components
//in this context we are going to save products state
export const ShoppingContext=createContext(null);