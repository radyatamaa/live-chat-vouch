import React from 'react';
import ReactEmoji from 'react-emoji'
import './Message.css';
import Stc from "string-to-color";

export const Message = ({message: { user, text, time }, name}) => {
    let isSentByCurrentUser = false;
    let isAdminMsg = false;
    let isDate = false;
    const myName = name.trim();
    const trimmedName = name.trim().toLowerCase()
    if (user === 'admin') {
        isAdminMsg = true;
    } else if (user === 'date') {
        isDate = true;
    } else {
        if (user === trimmedName) {
            isSentByCurrentUser = true
        }
    }

    function getColor(value) {
        return Stc(value).replace('#','');
    }

    function checkRTL(s){
        let ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' +
            '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
            rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
            rtlDirCheck = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');
        return rtlDirCheck.test(s);
    }

    function formatTime(time) {
        let date = new Date(time);
        // console.log(date.toUTCString());
        return ("0" + date.getHours()).slice(-2)+":"+("0" + date.getMinutes()).slice(-2);
    }

    let isRTL = checkRTL(text);
    let timeText =  formatTime(time)
    
    return (
        isAdminMsg ? (
            <div className="messageContainer justifyCenter">
                <div className="messageBox backgroundYellow">
                    <p className="messageText">{text}</p>
                </div>
            </div>
        ) : isDate ? (
            <div className="messageContainer justifyCenter">
                <div className="messageBox backgroundLightBlue">
                    <p className="messageText">{text}</p>
                </div>
            </div>
        ) : isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <div class="chat-bubbleSentUser">
                    <p className={isRTL ? `messageTextRTL` : `messageTextSentUser`}>{ReactEmoji.emojify(text)}</p>
                    <span className={isRTL ? `msgTimeStampRTL` : `msgTimeStampSentUser`}>{timeText}</span>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div class="chat-bubble-container">
                    <p class="username">{user}</p>
                    <div class="chat-bubble">
                        <p className={isRTL ? `messageTextRTL` : `messageTextReceiveUser`}>{ReactEmoji.emojify(text)}</p>
                        <span className={isRTL ? `msgTimeStampRTL` : `msgTimeStampReceiveUser`}>{timeText}</span>
                    </div>
                </div>
            </div>
        )
    )
}