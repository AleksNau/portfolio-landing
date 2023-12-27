import './App.scss';
import React from "react";
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import apiTelegram from "../../utils/telegramApi";
import PageNotFound from "../PageNotFound/PageNotFound";


function App() {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const pathsWithHeader = ['/'].includes(pathname);
    const pathsWithFooter = ['/'].includes(pathname);

    //Состояния меню
    const [menuActive, setMenuActive] = React.useState(false);
    const onTelegram = (data) => {
        apiTelegram
            .sendData(data)
            .then((res) => {
                if (!res) throw new Error("Пустая форма!");
            })
            .catch(console.error)
            .finally(() => {
                navigate("/");
            })
    };

    return (
        <div className="App">
            {pathsWithHeader && (
                <Header  active={menuActive} setActive={setMenuActive} />
            )}
            <Routes>
                <Route path={'/feedback'} element={<Feedback onSubmitBot={onTelegram}/>}/>
                <Route path={'/'} element={<Main/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>

            {pathsWithFooter && (
                <Footer/>
            )}
        </div>
    );
}

export default App;