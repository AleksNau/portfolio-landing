import './App.scss';
import React from "react";
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function App() {


    return (
        <div className="App">
            <Header/>
            <Feedback/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;