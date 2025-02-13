import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Badge from "../badge/badge";

import './card.css'

function Card({ data, isNewCard, onRefresh, cardIndex }) {
  Card.propTypes = {
    data: PropTypes.shape({
      role: PropTypes.string.isRequired,
      bodyText: PropTypes.string,
    }).isRequired,
    isNewCard: PropTypes.bool,
    onRefresh: PropTypes.func,
    cardIndex: PropTypes.number,
  };

  if (!data) return null;

  const [text, setText] = useState(data.bodyText || "");
  const [saved, setSaved] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [initialData, setInitialData] = useState(!!data.bodyText);

  useEffect(() => {
    if (isNewCard) {
      // Reset states for new card
      setSaved(false);
      setInitialData(false);
      setText("");
    }
  }, [isNewCard, saved]);

  const handleSave = async () => {
    try {
      await fetch("api/memo/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: data.role, bodyText: text }),
      });
      
      if (isNewCard) {
        // Reset states before refreshing
        setSaved(false);
        setInitialData(false);
        setText("");
        setIsEdit(false);
      } else {
        setSaved(true);
        setInitialData(true);
      }
      await onRefresh();
    } catch (error) {
      console.error("Error saving memo:", error);
    }
  };

  const cardName = () => {
    return data.role === "ADMIN" ? "ADMIN" : "MEMO";
  };

  if (isNewCard && !isEdit) {
    return (
      <>
        <div className='add-new-card' onClick={() => setIsEdit(true)}>
          <div className='grid'>
            <h1 className="add-card-plus">+</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='cardx'   key={data}>
        <div className='card-identity grid'>
          <div>
            <h2 className='card-title'> {cardName()}-{cardIndex} </h2>
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