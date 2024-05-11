import React from 'react';
import {PrettyChatWindow} from 'react-chat-engine-pretty';

function ChatComponent(props) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div style={{height: "90vh", padding: "75px", width: "100%"}}>
                <PrettyChatWindow
                    projectId="b75e5bd5-cd84-404c-b820-06feff8c98c0"
                    username="john_smith"
                    secret="pass1234"
                    style={{height: '100vh', width: '100%'}}
                />
            </div>
        </div>
        // <div className="flex justify-center items-center h-screen">
        //     <div style={{height: "90vh", padding: "75px"}}>
        //         <PrettyChatWindow
        //             projectId="b75e5bd5-cd84-404c-b820-06feff8c98c0"
        //             username="john_smith"
        //             secret="pass1234"
        //             style={{height: '100vh'}}
        //         />
        //     </div>
        // </div>
    );
}

export default ChatComponent;