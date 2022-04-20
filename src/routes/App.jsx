import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

//Containers
import Login from '../containers/Login';
import Layout from '../containers/Layout';
import RecoveryPassword from '../containers/RecoveryPassword';

//Pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';

//Styles
import '../styles/global.css';

const App =()=> {
    return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/login" element={ <Login/> }/>
                <Route path="/recovery-password" element={ <RecoveryPassword/> }/>

                <Route path="/send-email" element={ <SendEmail/> }/>
                <Route path="/new-password" element={ <NewPassword/> }/>
                <Route path="/account" element={ <MyAccount/> }/>


                {/*

					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
                */}


                <Route path="*" element={ <NotFound/> } />

            </Routes>
        </Layout>
    </BrowserRouter>
    )
}

export default App;