import React from 'react';
import { Link } from 'react-router-dom';

function UserNav() {

    return(
        <nav>
            <ul>
                <li>
                <Link to={'/user'}>
                Home
                </Link>
                </li>

                <li>
                <Link to={'/user/stats'}>
                Stats
                </Link>
                </li>

                <li>
                <Link to={'/donation'}>
                Donate
                </Link>
                </li>
            </ul>
        </nav>
    );

}

export default UserNav;