import { useState, useEffect } from 'react';
import styles from './MessageSlider.module.css'; // Your CSS module for styling
import Button from './Button';

const messages = [
  "Message 1",
  "Message 2",
  "Message 3",
  "Message 4",
  "Message 5"
];

const finalMessage = "Message1  \n Message 2 \n Message 3 \n Message 4 \n Message 5 \n"

const MessageSlider = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setCounter((prevIndex) => (prevIndex + 1))
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className={styles.messageSlider}>
      <div className={styles.messageContainer}>
        {counter < 5 ?
          messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${index === currentMessageIndex ? styles.active : ''}`}
            >
              {message}
            </div>
          ))
          :
          <>
            <div
              key={0}
              className={`${styles.message} ${styles.active} ${styles.displayLinebreak} `}
            >
              {finalMessage}
            </div>
            <div style={{marginTop:'1rem'}}>
            <Button onClick={() => {
            setCounter(0)
            setCurrentMessageIndex(0)
          }} >restart</Button>
          </div>
          </>
         
        }
      </div>
    </div>
  );
};

export default MessageSlider;
