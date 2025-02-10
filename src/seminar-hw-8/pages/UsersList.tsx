import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/usersSelectors.tsx';
import { Link } from 'react-router-dom';

const UserList: React.FC = () => {
    const users = useSelector(selectUsers);

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;