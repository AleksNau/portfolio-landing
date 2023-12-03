import './App.scss';
import React from "react";
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function App() {
    const {pathname} = useLocation();
    const pathsWithHeader = ['/', '/feedback'].includes(pathname);
    const pathsWithFooter = ['/'].includes(pathname);

    return (
        <div className="App">
            {pathsWithHeader && (
                <Header/>
            )}
            <Routes>
                <Route path={'/feedback'} element={<Feedback/>}/>
                <Route path={'/'} element={<Main/>}/>
            </Routes>

            {pathsWithFooter && (
                <Footer/>
            )}
        </div>
    );
}

export default App;