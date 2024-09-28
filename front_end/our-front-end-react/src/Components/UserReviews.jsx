import React from 'react'

function UserReviews(){
    const[review, setReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            try{
                const response = await axios.get(`/api/Reviews/${id}`);
                if(Array.isArray(response.data)){
                    getReviews(response.data);
                } else{
                    console.error('Response data is not an array:', response.data)
                    getReviews([]);
                }
            } catch(error){
                console.error('Error fetching game: ', error)
            }
        };
        getReviews();
    }, []); 

    const allReviews = Array(1).fill().map((_, index) => ({
        id: index,
        username: 'Username',
        title: 'Game Title',
        review: 'Games Description',
        date: 'Year',
        rating: '4/5'
    }));
  return (
    <div>
      
    </div>
  )
}
export default UserReviews
