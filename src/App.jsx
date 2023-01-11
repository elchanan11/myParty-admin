import "./App.css";
import Home from "./pages/Home";

import {
    BrowserRouter as Router,
    Switch,
    Route,

    Redirect,
    Routes, Navigate,
} from 'react-router-dom'
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


function App() {

    // const admin = () =>{
    //     if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin){
    //       return  true
    //     }else {
    //         return false
    //     }
    // }


    // useEffect(()=>{
    //     setAdmin(
    //         JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin ?
    //         JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin :
    //         false
    //     )
    //     console.log(admin)
    // },[JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin])


    const userAdmin = useSelector(state => state.user.currentUser?.isAdmin)

    console.log(userAdmin)

    return (
        <Router>
                    <Routes>
                        <Route exact path="/" element={
                            userAdmin ?
                                <Home />
                                : <Navigate to={"/login"} />

                        }/>

                        <Route exact path="/newProduct" element={
                            userAdmin ?
                                <NewProduct />
                                : <Login />
                        }/>

                        <Route exact path="/product/:id" element={
                            userAdmin ? <Product /> : <Login />
                        }/>

                        <Route exact path="/login" element={
                            userAdmin !== true
                               ? <Login />
                                : <Navigate to={"/"} />
                        }/>

                        />
                    </Routes>

        </Router>
    );
}

export default App;
