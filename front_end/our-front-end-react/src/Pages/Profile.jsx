import React from 'react';
import NavBar from '../Components/NavBarUser';
import './Profile.css';

const likedGames = [
    { id: 1, title: 'Game One', genre: 'Action' },
    { id: 2, title: 'Game Two', genre: 'Adventure' },
    { id: 3, title: 'Game Three', genre: 'Puzzle' },
];

const gameList = [
    { id: 1, title: 'Game A', genre: 'RPG' },
    { id: 2, title: 'Game B', genre: 'Strategy' },
    { id: 3, title: 'Game C', genre: 'Shooter' },
];

function Profile() {
    return (
        <>
            <NavBar />
            <div className="profile-container">
                <div className="profile-header">
                    <img src="./D1.png" alt="Profile" className="profile-picture" />
                    <h1 className="profile-name">John Doe</h1>
                </div>
                <div className="profile-details">
                    <p className="profile-email">Email: johndoe@example.com</p>
                    <p className="profile-bio">
                        Bio: A passionate gamer and tech enthusiast. Always looking to explore new adventures!
                    </p>
                </div>
                
                <div className="profile-games">
                    <h2>Liked Games</h2>
                    <ul>
                        {likedGames.map(game => (
                            <li key={game.id}>
                                {game.title} - {game.genre}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="profile-games">
                    <h2>Game List</h2>
                    <ul>
                        {gameList.map(game => (
                            <li key={game.id}>
                                {game.title} - {game.genre}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="profile-actions">
                    <button className="edit-button">Edit Profile</button>
                    <button className="logout-button">Logout</button>
                </div>
            </div>
        </>
    );
}

export default Profile;

