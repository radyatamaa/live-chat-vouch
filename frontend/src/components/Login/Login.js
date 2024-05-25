import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export const Login = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState('');
  const ENDPOINT = process.env.REACT_APP_BACKEND_URL;
  const history = useHistory();
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault(); // Prevent the form from submitting normally
    if (!name || !room) {
      return;
    }

    if (name.length < 3) {
      setError('username mix length 3');
      setLoading(false);
      return
    }

    if (room.length < 3) {
      setError('room id mix length 3');
      setLoading(false);
      return
    }
    
    
    // history.push(`/chat?name=${name}&room=${room}`);
    try {
      // Make an API call to validate the user input
      const response = await axios.post(
        `${ENDPOINT}api/join`,
        { username:name, room },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        }
      );
      setLoading(false)

      if (response.data.is_able_join) {
        // If valid, redirect to /chat
        history.push(`/chat?name=${name}&room=${room}`);
      } else {
        // If not valid, show an error message
        setError(response.data.message || 'Username is Taken');
      }
    } catch (err) {
      console.error(err);
      setError('something wrong error api');
      setLoading(false);
    }

  };

  return (
    <div className="joinOuterContainer">
      <div className="inputList">
      <h1 className="heading">Join Chatroom</h1>
                {error && <p>{error}</p>}

                <div className="inputGroup">
                    <input
                        type="text"
                        className="joinInput"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        placeholder={'Username'}
                        spellCheck="false"
                        autoCapitalize="words"
                        autoComplete="off"
                        required
                        maxLength={15}
                    />
                </div>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="joinInput"
                        onChange={e => setRoom(e.target.value)}
                        value={room}
                        placeholder={'Room ID'}
                        spellCheck="false"
                        autoCapitalize="words"
                        autoComplete="off"
                        required
                        maxLength={5}
                    />
                </div>
      </div>
      <div className="columnFooter">
                <button type="button" className="joinButton" disabled={loading} onClick={handleSubmit}>
                    Join
                </button>
            </div>
    </div>
  );
};
