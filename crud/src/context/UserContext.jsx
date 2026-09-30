// src/context/UserContext.jsx
import {createContext, useState} from "react";

// 1. CREATE CONTEXT
// Create a context box to hold global data and functions.
export const UserContext = createContext();

// 2.PROVIDER COMPONENT
// Wraps child component so they can access global state.
export const UserProvider = ({ children }) => {
    // Initial array state holding default users
    const [users,setUsers]=useState([
        {id: 1, name: "Salvation", email: "salvation@email.com"},
        {id: 2, name: "Cleopatra", email: "cleopatra@email.com"}
    ])
    // ----CRUD FUNCTIONS---
    // [C]REATE: Adds a new user record
    const addUser = (newUser) => {
        //Generate a unique ID using current timestamp
        const userWithId = {...newUser, id: Date.now()};
        //Spread the existing array items and append the new records
        setUsers((prevUsers)=>[...prevUsers,userWithId])
    };
    // [R]EAD / [R]ETRIEVE : Handled directly by exposing "users" state array
  
    // [U]PDATE : Modifies an existing user record
    const updateUser = (updatedUser) => {
        //Map iterates over the list; replaces target ID item and leaves others intact
        setUsers((prevUsers)=>prevUsers.map((user)=>
            user.id === updateUser.id ? updatedUser: user
        ))
    }
    

    //[D]ELETE: Remove user by ID
    const deleteUser = (id) => {
        //Filter creates a new array keeping only items whose ID does NOT match
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !==id))
    }
    return(
        //Expose data and functions to all child components
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
            {children}
        </UserContext.Provider>

    )
}