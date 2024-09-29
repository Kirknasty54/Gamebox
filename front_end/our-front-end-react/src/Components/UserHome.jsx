import React, { useEffect, useState } from 'react';
import Profile from '../Pages/Profile';

const UserHome = () => {
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

  // return (
  //   <div>
  //     {/* <h1>Welcome to the Home Page</h1>
  //     {user ? (
  //       <p>Hello, {user.userEmail}! You are logged in.</p>
  //     ) : (
  //       <p>Please log in to see your information.</p>
  //     )} */}
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
};

export default UserHome;
