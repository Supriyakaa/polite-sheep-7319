import Slider from "react-slick";
import React, { useEffect } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import getData from "../API/MovieAPI";
import { Box, Text } from "@chakra-ui/react";

const Bcarousel = (props) => {
  const {text,tag,url}=props
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };  
  const [data, setData] = useState(null);
  useEffect(() => {
    getData(url).then((res) => setData(res.data.results));
  }, []);
  console.log(data);
  return (
    <Box  className="bcard" >
      {/* <Text mb={'20px'} ml={['15vw','2vw','5vw','2vw']} fontSize={'md'} color={'gray'}>{tag}</Text> */}
      <Slider {...settings}>
        {data &&
          data.map((item) => {
              return (
                  <Box position={'relative'} pb={'20px'} w={['200px','200px','100px']} key={item.id}>
                  <Text position={'absolute'} bottom={'10vh'} stroke={'2px solid black'} left={'5rem'} fontWeight={'bold'} fontSize={['2rem']} color={'white'}>{item.title}</Text>
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" />
              </Box>
            )
          })}
      </Slider>
      <center>
      <div style={{border:'none',height:'1px',backgroundColor:'#3c3c3c',marginTop:'20px',width:'92%'}}></div>
      </center>
    </Box>
  );
};

export default Bcarousel;
