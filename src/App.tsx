import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './seminar-hw-8/redux/store.tsx';
import UserList from './seminar-hw-8/pages/UsersList.tsx';
import UserDetail from './seminar-hw-8/pages/UserDetails.tsx';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <Link to="/">Список пользователей</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/users/:userId" element={<UserDetail />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;