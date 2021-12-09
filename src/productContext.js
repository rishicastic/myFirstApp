import { createContext, useState } from "react";
import productData from "./Components/productdata";

export const ProductContext = createContext();


export const ProductProvider = props => {
    const [currentUser, setCurrentUser] = useState({});
    const getUser =() =>{
        let user = sessionStorage.getItem('user');
        if (user){
            setCurrentUser(JSON.parse(user));
            return true;
        }else{
            return false;
        }
    }

    const [loggedIn, setLoggedIn] = useState (getUser());
    



    return (
        <ProductContext.Provider value ={ {productData, loggedIn, setLoggedIn, currentUser, setCurrentUser} }>
            {props.children}
        </ProductContext.Provider>
    );

};