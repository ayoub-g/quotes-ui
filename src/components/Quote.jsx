import React, { useState, useEffect } from "react";
import "./Quote.css";
import { useParams, useHistory } from "react-router-dom";
import NextIcon from "../assets/next.svg";
import PreviousIcon from "../assets/previous.svg";

const Quote = () => {
  const quotesLength = 102;
  const history = useHistory();

  let { id } = useParams();
  id = id ? parseInt(id, 10) : 0;
  console.log("from quote", id);
  const [quoteObject, setQuoteObject] = useState({ quote: "", author: "" });

  useEffect(() => {
    getQuote();
  }, [id]);

  const getQuote = async () => {
    const res = await fetch(`http://localhost:3001/${id}`, {
      method: "GET",
    });
    if (res.status === 200) {
      setQuoteObject(await res.json());
    }
  };
  const nextQuote = () => {
    console.log("nextQuote");
    id = id < quotesLength - 1 ? id + 1 : 0;

    history.push(`/${id}`);
  };
  const previousQuote = () => {
    console.log("previousQuote");
    id = id > 0 ? id - 1 : quotesLength - 1;
    history.push(`/${id}`);
  };

  if (quoteObject && quoteObject.quote && quoteObject.author)
    return (
      <div className="quote-main">
        <div className="quote-container">
          <h2>{quoteObject.quote}</h2>
          <h3>{quoteObject.author}</h3>
        </div>
        <div className="nav">
          <div>
            <img src={PreviousIcon} onClick={previousQuote} alt="next" />
          </div>
          <div>
            <img src={NextIcon} onClick={nextQuote} alt="previous" />
          </div>
        </div>
      </div>
    );
  else return <h2>Loading...</h2>;
};

export default Quote;
