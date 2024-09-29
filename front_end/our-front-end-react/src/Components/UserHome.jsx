import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import NavBarUser from './NavBarUser';

const UserHome = () => {
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
const navigate = useNavigate();
const [logoutMessage, setLogoutMessage] = useState('');

const handleEditProfile = () => {
    navigate('/settings'); // Navigate to settings page
};

const handleLogout = () => {
    setLogoutMessage('User has successfully logged out');
    // Redirect after a short delay
    setTimeout(() => {
        navigate('/'); // Navigate back to home
    }, 2000); // Wait 2 seconds before redirecting
};
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserSession = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
    if (storedUserSession) {
      setUser(JSON.parse(storedUserSession));
    }
  }, []);

  // Separate useEffect for logging the user once it's set
  useEffect(() => {
    if (user) {
      console.log('User session:', user.userEmail);
    }
  }, [user]); // Runs when 'user' is updated

    return (
        <>
            <NavBarUser/>
            <div className="profile-container">
              {user ? (
                <>
                <div className="profile-header">
                    <img src="./D1.png" alt="Profile" className="profile-picture" />
                    <h1 className="profile-name">{user.name}</h1>
                </div>
                <div className="profile-details">
                    <p className="profile-email">Email: {user.userEmail}</p>
                    <p className="profile-bio">
                        Bio: A passionate gamer and tech enthusiast. Always looking to explore new adventures!
                    </p>
                </div>
                  </>
              ) : (
                    <p>this</p>


                    )}
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
                <div>
                <button className="edit-button" onClick={handleEditProfile}>
                    Edit Profile
                </button>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>

                {logoutMessage && (
                    <div style={{ color: 'green', marginTop: '10px' }}>
                        {logoutMessage}
                    </div>
                )}
            </div>
                </div>
            </div>
        </>
  );
};

export default UserHome;
