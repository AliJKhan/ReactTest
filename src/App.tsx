import React, {useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {User} from "./Models/User";
import api from "./helpers";
import {Grid, StyledButton, StyledeMemberContainer} from "./Components/Styled";
import useModal from "./Hooks/useModal";
import {Modal} from "./Components/Modal";
import Loader from "./Components/Loader";

function App() {
    const { isShown, toggle } = useModal();
    const [userData, setSingleUserData] = useState<User>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [users, setUsersData] = useState<
        User[] | undefined
    >();
    const fetchData = async () => {
        const apiInstance = await api();
        await apiInstance
            .get(`users`)
            .then((res) => {
                setUsersData(Object.values(res.data.data.users));
                setIsLoading(false);
            })
            .catch((err) => {
                console.debug(err);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    {isLoading ? (
                        <Loader  />
                    ):<Grid>
                        {users && users.map((user, i) =>
                            <StyledeMemberContainer key={i}>
                                <img src={user.avatar}>
                                </img>
                                <h3>{user.firstname}</h3>
                                <p>{user.lastname}</p>
                                <StyledButton onClick={() => {setSingleUserData(user);toggle()}}>
                                    View More
                                </StyledButton>
                            </StyledeMemberContainer>
                        )}
                    </Grid>}

                </div>
            </header>
            <Modal
                isShown={isShown}
                hide={toggle}
                data={userData}
            />
        </div>
    );
}

export default App;
