import React from 'react';
// Chakra Components
import { Box, Text } from '@chakra-ui/react'
import Navbar from '../components/HomePageComponents/Navbar'
import Banner from '../components/HomePageComponents/Banner' 
import Carousel from '../Utils/Carousel';
import MCarousel from '../Utils/MCarousel';
import Bcarousel from '../Utils/Bcarousel';
import Footer from '../components/HomePageComponents/Footer';
import  Login  from '../components/Signup/Login';
import QNA from '../components/HomePageComponents/QNA';
const HomePage = () => {
    return (
        <Box 
        overflow={'hidden'}
        bg={'#2d2c2d'}
        >
            <Navbar/>
            <Banner/>
            <Box id='content'>
            <Carousel text={'Most Popular Now'} url={`https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1`}/>
            <MCarousel text={'Emmy\u24C7 Nominees'} tag={"Explore the series that are up for television's biggest prize."} url={'https://api.themoviedb.org/3/movie/top_rated?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1'}/>
            <Carousel text={'Watch Entire Seasons'} url={`https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1`}/>
            <MCarousel text={'Coming Soon'} tag={"Add to your upnext watchlist today."} url={'https://api.themoviedb.org/3/movie/upcoming?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1'}/>
            <Bcarousel url={'https://api.themoviedb.org/3/movie/top_rated?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1'}/>
            <Carousel text={'Trending'} url={`https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1`}/>
            <Carousel text={'Recently Released'} url={`https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1`}/>
            </Box>
            <Footer/>
            <QNA/>
        </Box>
    );
}

export default HomePage;

// adult: false
// backdrop_path: "/3VQj6m0I6gkuRaljmhNZl0XR3by.jpg"
// genre_ids: (4) [16, 12, 35, 14]
// id: 585511
// original_language: "en"
// original_title: "Luck"
// overview: "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around."
// popularity: 1952.292
// poster_path: "/1HOYvwGFioUFL58UVvDRG6beEDm.jpg"
// release_date: "2022-08-05"
// title: "Luck"
// video: false
// vote_average: 8.2
// vote_count: 513
