import React from "react";
import {Link} from 'react-router-dom';
import "./PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404 Error Page</h1>
            <p className="zoom-area">Wrong page </p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link to="/"
                   className="more-link">Go back</Link>
            </div>
        </div>
    );
};

export default PageNotFound;