import axiosInstance from './axiosInstance';

export const fetchAllGames = async () => {
  try {
    const response = await axiosInstance.get('/games');
    return response.data; // Adjust based on your backend response structure
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error; // Rethrow for handling in component
  }
};

export const fetchGameById = async (gameId) => {
  try {
    const response = await axiosInstance.get(`/games/${gameId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching game:', error);
    throw error;
  }
};

export const fetchLikedGames = async (userId) => {
  try {
    const response = await axiosInstance.get(`/games/${userId}/likedGames`);
    return response.data;
  } catch (error) {
    console.error('Error fetching liked games:', error);
    throw error;
  }
};

export const likeGame = async (userId, gameId) => {
  try {
    await axiosInstance.post(`/games/users/${userId}/${gameId}/like`);
  } catch (error) {
    console.error('Error liking game:', error);
    throw error;
  }
};

export const unlikeGame = async (userId, gameId) => {
  try {
    await axiosInstance.delete(`/games/users/${userId}/${gameId}/unlike`);
  } catch (error) {
    console.error('Error unliking game:', error);
    throw error;
  }
};
