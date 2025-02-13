import { useState, useEffect } from "react"; // Import useEffect
import PropTypes from "prop-types";
import Badge from "../badge/badge";

import './card.css'

function Card({ data }) {
  Card.propTypes = {
    data: PropTypes.shape({
      role: PropTypes.string.isRequired,
      bodyText: PropTypes.string,
    }).isRequired,
  };

  const user = {email: "josh@gmail.com", role: 'ADMIN'}

  if (!data) return null;

  const [text, setText] = useState(data.bodyText || "");
  const [saved, setSaved] = useState(false);
  const [initialData, setInitialData] = useState(!!data.bodyText); // New state

  useEffect(() => {
      setText(data.bodyText || "");
      setInitialData(!!data.bodyText)
  }, [data])


  const handleSave = async () => {
    try {
      await fetch("http://localhost:5050/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: user.role, bodyText: text }),
      });
      setSaved(true);
      setInitialData(true); 
    } catch (error) {
      console.error("Error saving memo:", error);
    }
  };


  return (
    <>
      <div className='cardx' key={data}>
        <div className='card-identity grid'>
          <div>
            <h2 className='card-title'> {data.role}- </h2>
            <Badge data={data.role} />
          </div>
          <div className='spacers' />
          {!saved && !initialData && ( 
            <button
              className={`save-button`}
              onClick={handleSave} 
              disabled={saved}
            >
              SAVE
            </button>
          )}
        </div>
        <textarea
          type="text"
          className={`${saved || initialData ? 'card-not-saved' : 'card-input'} resize-none focus:outline-none`} 
          placeholder="Type something ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={saved || initialData} 
        />
      </div>
    </>
  );
}

export default Card;