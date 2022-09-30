import { Box, Select, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const QNA = () => {
    return (
        <Stack bg={'#252728'} display={'grid'} justifyContent={'center'}>
            <Text fontSize={'5xl'} fontWeight={600} color={'white'}>Questions? Answers.</Text>
            <Select color={'white'} w={'60vw'} m={'auto'} fontWeight={500} placeholder='What is Apple TV+?' size='lg' />
            <Select color={'white'} w={'60vw'} m={'auto'} fontWeight={500} placeholder='What does Apple TV+ include?' size='lg' />
            <Select color={'white'} w={'60vw'} m={'auto'} fontWeight={500} placeholder='Where can I watch Apple TV+?' size='lg' />
            <Select color={'white'} w={'60vw'} m={'auto'} fontWeight={500} placeholder='Can I watch Apple TV+ on my phone?' size='lg' />
            <Select color={'white'} w={'60vw'} m={'auto'} fontWeight={500} placeholder='How to watch Apple TV+ on Android or Windows?' size='lg' />
            <Select color={'white'} w={'60vw'} m={'auto'} fontWeight={500} placeholder='What movies are on Apple TV+?' size='lg' />
            <Text color={'gray'} mt={'10px'}>Copyright © Apple INC 2022 All rights reserved.</Text>
        </Stack>
    );
}

export default QNA;
