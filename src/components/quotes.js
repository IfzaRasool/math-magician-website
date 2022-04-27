import React from 'react';
import quotes from './images/quotes1.jpg';

const Quotes = () => (
  <div className="quotes">
    <img src={quotes} alt="quotes" className="quotesImg" />
    <div className="quotes-container">
      <h2>Math Magicians</h2>
      <p>
        {' '}
        Mathematics is a game played according to certain simple rules
        with meaningless marks on paper. David Hilbert
      </p>
    </div>
  </div>
);
export default Quotes;
