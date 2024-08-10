import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    try {
      const response = await fetch(`/send?message=${message}`);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Arduino Serial Communication</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={sendMessage}>Send to Arduino</button>
    </div>
  );
}

export default App;
