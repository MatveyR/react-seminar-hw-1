import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserById } from '../redux/usersSelectors.tsx';
import { updateUserName } from '../redux/usersSlice.tsx';
import {RootState} from "../redux/store.tsx";

const UserDetail: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const user = useSelector((state: RootState) =>
        selectUserById(state, parseInt(userId || ''))
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState(user?.name || '');

    const handleSave = () => {
        if (user) {
            dispatch(updateUserName({ id: user.id, name }));
            navigate('/');
        }
    };

    if (!user) {
        return <div>Пользователь не найден</div>;
    }

    return (
        <div>
            <h1>Редактирование пользователя</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSave}>Сохранить</button>
        </div>
    );
};

export default UserDetail;