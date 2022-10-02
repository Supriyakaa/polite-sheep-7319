import { AspectRatio, Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Navbar from '../components/HomePageComponents/Navbar'
import Carousel from "../Utils/Carousel";
import Footer from "../components/HomePageComponents/Footer";
import QNA from "../components/HomePageComponents/QNA";
// const url=`https://api.themoviedb.org/3/movie/${}?api_key=aab69345023f012e488f5334e693cb59&language=en-US`
// https://api.themoviedb.org/3/movie/278/videos?api_key=aab69345023f012e488f5334e693cb59&language=en-US
const SingleMovie = () => {
  const params = useParams();
  // console.log(params);
  const [data,setData]= useState([])
  const [key, setKey] = useState(null);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=aab69345023f012e488f5334e693cb59&language=en-US`
      // `https://api.themoviedb.org/3/movie/{params.id}/images?api_key=aab69345023f012e488f5334e693cb59&language=en-US`
    ).then((res) => {setKey(res.data.results[0].key);setData(res.data.results)});
  }, []);
  console.log(data)
  return (
    <Box bg={'#252728'}>
      <Navbar/>
      <Box mt={'10px'} position={'relative'}>
        {/* <img width={'100vw'} height={'100vh'} src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" /> */}
      <ReactPlayer width={'100vw'} height={'100vh'} playing={true} controls={false} light={false} muted={true} url={`https://www.youtube.com/watch?v=${key}`}></ReactPlayer>
        {/* <Text fontSize={'4xl'} color={'white'} position='absolute' top={'10'}>{data.name}</Text> */}
        <Box>
          <Box position={'absolute'} bottom={'5vh'} left={'7vw'} textAlign={'center'}>
            <Text w={'100px'} margin={'auto'} color={'white'} bg={'black'}>Apple TV+</Text>
            <Box display={'flex'} flexDirection={'column'} width={'fit-content'} gap={'5px'} ml={'20px'}>
              <Button w={'300px'}>Play Free Episode</Button>
              <Button w={'300px'}>Start free Trial</Button>
              <Button w={'300px'}>Add to up next</Button>
            </Box>
          </Box>
          <Box position={'absolute'} bottom={'17vh'} left={'30vw'}>
            <Text color={'white'}>Nominated for 20 Emmy® Awards, including Outstanding Comedy Series. Jason Sudeikis is a football coach hired to manage a British soccer team. <br /> What he lacks in knowledge, he makes up for with  optimism, determination...and biscuits.</Text>
          </Box>
        </Box>
      </Box>
      <Carousel text={'New Comings'} url={`https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1`}/>
      <Carousel text={'Roles Played'} url={`https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1`}/>
      <Footer/>
      <QNA/>
    </Box>
  );
};

export default SingleMovie;
