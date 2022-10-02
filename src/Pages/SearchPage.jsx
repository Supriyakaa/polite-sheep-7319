import { CloseIcon } from "@chakra-ui/icons";
import { Box, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getData from "../API/MovieAPI";
import Banner from "../components/HomePageComponents/Banner";
import Footer from "../components/HomePageComponents/Footer";
import Navbar from "../components/HomePageComponents/Navbar";
import Bcarousel from "../Utils/Bcarousel";
import Carousel from "../Utils/Carousel";
import MCarousel from "../Utils/MCarousel";

const SearchPage = () => {
    const navigate=useNavigate()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1`;
  useEffect(() => {
    setLoading(true);
    getData(url)
      .then((res) => {
        setData(res.data.results);
      })
      .then(() => setLoading(false))
      .catch(() => setLoading(true));
  }, []);
  console.log(data);

  return (
    <Box  overflow={"hidden"} bg={"#2d2c2d"}>
      <Box position={'relative'}>
      <Navbar />
      <CloseIcon onClick={()=>navigate('/')} cursor={'pointer'} color={'white'} fontSize={'xs'} position={'absolute'} right={'6vw'} bottom={'2vw'}/>
      </Box>
      {loading === true && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"80vh"}
        >
          <Spinner color="white" />
        </Box>
      )}

      <Box>
        <Text mt={'2vw'} mb={'2vw'} ml={'2vw'} fontWeight='600' color={'white'} fontSize={'2xl'}>Explore popular series and films.</Text>
      </Box>

      <Box
      display={'grid'}
      gridTemplateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(5,1fr)']}
      
      >{loading === false && data &&
          data.map((item) => {
            return (
              <Box margin={'auto'} pb={'20px'} w={['200px','200px','250px']} key={item.id}>
                <img className="searchcard" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" />
              </Box>
            )
          })}</Box>
    </Box>
  );
};

export default SearchPage;
