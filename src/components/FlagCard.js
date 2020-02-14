import React, { Fragment } from 'react';

const FlagCard = props => {
  const { countryCode, content } = props;
  return(
    <Fragment>
      <img 
        className="country image left floated" 
        src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
        alt="countryCode"
      />
      <div className="description">{content}</div>
    </Fragment>
  )
};

export default FlagCard;