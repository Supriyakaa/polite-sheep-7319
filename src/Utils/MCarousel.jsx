import Slider from "react-slick";
import React, { useEffect } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import getData from "../API/MovieAPI";
import { Box, Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
const MCarousel = (props) => {
  const {text,tag,url}=props
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  return (
    <Box  className="mcard" >
      <Text fontWeight={'bold'} textAlign={['center','left']} ml={[0,5]} mb={'7px'} fontSize={'2xl'} color={'white'}>{text}</Text>
      <Text mb={'20px'} textAlign={['center','left']} ml={[0,5]} fontSize={'md'} color={'gray'}>{tag}</Text>
      <Slider {...settings}>
        {data &&
          data.map((item) => {
            return (
              <Box pb={'20px'} w={['200px','200px','100px']} key={item.id}>
                <Link to={`/SingleMovie/${item.id}`}><img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" /></Link>
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

export default MCarousel;
