import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, LogoImg, TMDBLogoImg, Content } from "./Header.style";
import { Context } from "../../context";

const Header = () => {
    const [user, setUser] = useContext(Context);
    const handleLogout = () => (
        setUser(null)
    );

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                {
                    user
                        ? (
                            <div>
                                <span>Logged in as: {user.username}</span>
                                <span>|</span>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )
                        : (
                            <Link to='/login'>
                                <span>Log in</span>
                            </Link>
                        )
                }
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
}

export default Header;
