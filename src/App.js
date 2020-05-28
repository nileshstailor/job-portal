import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Routes from './routes.jsx';
import Header from './app/ui-component/header/header'
import Footer from './app/ui-component/footer/footer'

function App() {
    return (
        <Router>

            <div id="wrapper">
                {/* Header Container */}
                <Header></Header>
                {/* Header Container  End */}
                <div className='clearfix'></div>
                {/* Main Content */}
                <div className='content'>
                    <Routes></Routes>
                </div>
                {/* Main Content End */}
                <div className='clearfix'></div>
                {/* Footer Container */}
                <Footer></Footer>
                {/* Footer Container End*/}
            </div >
        </Router >
    )
}
export default App;