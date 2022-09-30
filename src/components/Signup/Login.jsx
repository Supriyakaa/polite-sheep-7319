import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiUserPlus } from "react-icons/bi";
import { FaApple, FaArrowAltCircleRight, FaGripLines } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import { AuthContext } from '../../context/AuthContextProvider' 
import { useState } from "react";
const Login = () => {
  const [toggle,setToggle]=useState(false);
  const [text,setText]=useState('')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e)=>{
    if(e.target.name==='name'){
        setText(e.target.value)
    }
  }
  return (
    <Box>
      <Box display={'flex'} gap={'10px'}>
      <Button
        size="xs"
        color={["#0a85ff", "white"]}
        display={["flex", "flex", "flex"]}
        h={["6", "7", "8"]}
        bg={["transparent", "#0a84fe"]}
        pl={[1]}
        pr={[1]}
        _hover={"none"}
        _active={"none"}
        onClick={onOpen}
      >
        <BiUserPlus fontSize={"20px"} />
        {toggle===true?text:'Sign In'}
      </Button>
    
      {toggle && <Button
      ize="xs"
      color={["#0a85ff", "white"]}
      display={["flex", "flex", "flex"]}
      h={["6", "7", "8"]}
      bg={["transparent", "#0a84fe"]}
      pl={[1]}
      pr={[1]}
      _hover={"none"}
      _active={"none"}
      onClick={()=>{
        setToggle(false)
      }}
      >Logout</Button>}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h={"60vh"} bg={"#2d2d2c"}>
          <ModalHeader color={"white"}></ModalHeader>
          <Box
            textAlign={"center"}
            color={"#cdcccc"}
            display={"grid"}
            justifyContent={"center"}
          >
            <Box margin={"auto"}>
              <FaApple fontSize={"60px"} />
            </Box>
            <Text fontSize={"2xl"} fontWeight={"600"} mt={"20px"}>
              Sign in with your Apple ID
            </Text>
            <Text fontSize={"md"} fontWeight={"600"} mt={"10px"}>
              You will be signed in to Apple TV and Apple Music
            </Text>
            <Input
              name={'name'}
              htmlSize={4}
              width="250px"
              margin={"auto"}
              mt={"20px"}
              placeholder={"Apple ID"}
              onChange={handleChange}
            />
            <Input
              htmlSize={4}
              width="250px"
              margin={"auto"}
              mt={"10px"}
              placeholder={"Password"}
              onChange={handleChange}
            />
            <Button
              size="xs"
              color={["#0a85ff", "white"]}
              display={["flex", "flex", "flex"]}
              h={["8"]}
              w={"60px"}
              m={"auto"}
              mt={"10px"}
              bg={["transparent", "#0a84fe"]}
              pl={[1]}
              pr={[1]}
              _hover={"none"}
              _active={"none"}
              onClick={
                ()=>{
                    setToggle(true);
                    onClose()
                }
              }
            >
              <BiUserPlus fontSize={"20px"} />
              Lognin
            </Button>
            <Text color={"#0a84fe"} mt={"20px"} as={Link}>
              Create new Apple ID >
            </Text>
            <Text color={"#0a84fe"} mt={"20px"} as={Link}>
              {" "}
              Forgot Apple ID or Password? >
            </Text>
          </Box>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          {/* <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button >Secondary Action</Button>
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login;
