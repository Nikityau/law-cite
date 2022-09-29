import React from "react";
import {useNavigate} from "react-router-dom";

export const NavContext = React.createContext({});

const NavHOC = (component) => {

    return function Nav() {

        const navigate = useNavigate();

        const navByPath = (path) => {
            navigate(path)
        }

       return (
           <NavContext.Provider value={{
                navByPath
           }}>
               { component }
           </NavContext.Provider>
       )
    }

}

export default NavHOC;