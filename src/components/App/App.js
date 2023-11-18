import './App.css';
import React, {useEffect, useState} from "react";
import LoadingPreloader from '../../contexts/loadingContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function App() {


    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;