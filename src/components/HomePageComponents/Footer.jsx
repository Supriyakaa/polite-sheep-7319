import React from 'react';
import { background, Box, Image, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg={'black'} 
        p={'20px'}
        className={'fot'}
        >
            <Box textAlign={'center'} display={'grid'} justifyContent={'center'}>
                
                <Box 
                margin={'auto'}
                w={['60px','100px']}
                h={['60px','100px']}
                 bg={'url(https://tv.apple.com/assets/brands/TV_App_Logo-d343000dfd3ca454ca8705a7aa7dcf4f.png)'
                 }
                 backgroundRepeat={'no-repeat'}
                 backgroundSize={'cover'}
                 pb={'50px'}
                 ></Box>

                <Box pb={'20px'} pt={'10px'}>
                  <Text color='white' fontWeight={'700'} fontSize={['xl','4xl']}>Watch Apple TV+ here  or <br /> anywhere.</Text>
                </Box> 
                
                <Box pb={'20px'} pt={'10px'}>
                    <Text color={'white'} fontSize={['xs','md','xl']}>
                       Find Apple TV+ on the Apple TV app, available on Apple devices, smart <br /> TVs, and more.
                    </Text>
                </Box>
            
                <Box  pb={'20px'} pt={'10px'} color={'blue'}>

                    <a href="https://support.apple.com/guide/tvplus/welcome/web">See all suported devices</a>
                </Box>

                <Box display={'flex'} w={['70vw','30vw']} pb={'20px'} pt={'10px'} margin={['auto','auto']}>
                    <Box  w={'fit-content'} textAlign={'center'} w={'100px'}>
                        <Image src='https://tv.apple.com/assets/icons/product_landing_apple_tv_wht-9610e73e2ef117d35da65eed60d2624a.png'/>
                        <Text color={'white'} >Apple TV</Text>
                    </Box>
                    
                    <Box  w={'fit-content'} textAlign={'center'} pb={'20px'} pt={'10px'} w={'100px'}>
                        <Image src='https://tv.apple.com/assets/icons/product_landing_iPhone_wht-0adcded885905e1a22bfc7ae9bf45fa8.png'/>
                        <Text color={'white'} >Apple TV</Text>
                    </Box>

                    <Box  pb={'20px'} pt={'10px'} w={'fit-content'} textAlign={'center'} w={'100px'}>
                        <Image src='https://tv.apple.com/assets/icons/product_landing_iPad_wht-ac93596ed7aeb5e1c15ba18bcb7bfd13.png'/>
                        <Text color={'white'} >Apple TV</Text>
                    </Box>

                    <Box pb={'20px'} pt={'10px'}  w={'fit-content'} textAlign={'center'} w={'100px'}>
                        <Image src='https://tv.apple.com/assets/icons/product_landing_mac_wht-37e6f73080a15fe8a35b85e7ba8f5468.png'/>
                        <Text color={'white'} >Apple TV</Text>
                    </Box>

                    <Box pb={'20px'} pt={'10px'} w={'fit-content'} textAlign={'center'} w={'100px'}>
                        <Image src='https://tv.apple.com/assets/icons/product_landing_airplay_wht-f348507fa5bdc6b005b126f0654aa663.png'/>
                        <Text color={'white'} >Apple TV</Text>
                    </Box>
                    
                </Box>

            </Box>
            <Box textAlign={'center'} display={'grid'} justifyContent={'center'} >

                <Box>
                    <Text  color={'white'} fontSize={'3xl'}>See it on your big screens</Text>
                </Box>

                <Box color={'blue'}>

                    <a href="https://support.apple.com/guide/tvplus/welcome/web">Set up your Device </a>
                </Box>

                <Box color={'blue'}>
                    <a href="https://support.apple.com/guide/tvplus/welcome/web">Explore compatable Devices </a>
                </Box>

                <Box display={'flex'} w={['70vw','15vw']} margin={['auto','auto']}>
                     <Box  w={'fit-content'} textAlign={'center'} w={'100px'}>
                        <Image src='https://tv.apple.com/assets/icons/banner_usb_lrg_wht-67ed29cf6e5f5add9b2814937f976197.png'/>
                        <Text color={'white'} >Streaming Devices</Text>
                    </Box>

                    
                    <Box  w={'fit-content'} textAlign={'center'} w={'100px'}>
                        <Image src='https://tv.apple.com/assets/icons/banner_tv_lrg_wht-e0ef12292435df4d9416312f322dbe32.png'/>
                        <Text color={'white'} >Smart TVs</Text>
                    </Box>

        
                    <Box  w={'fit-content'} textAlign={'center'} w={'100px'}>
                        <Image src='https://tv.apple.com/assets/icons/banner_controller_lrg_wht-5eca7993879258c2ff5e8425055643b6.png'/>
                        <Text color={'white'} >Gaming Consoles</Text>
                    </Box>

                    
                </Box>

            </Box>
        </Box>
    );
}

export default Footer;
