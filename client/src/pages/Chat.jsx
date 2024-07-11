import { useContext } from "react";
import {Container,Stack} from "react-bootstrap"
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
    const { userChats,
        isUserChatsLoading,
        userChatsError} = useContext(ChatContext)


    return <Container>
        {userChats?.length < 1 ? null : <Stack direction="horizontal">
            <Stack>List</Stack>
            <p>ChatBox</p>
            </Stack>}
    </Container>;
}
 
export default Chat ;