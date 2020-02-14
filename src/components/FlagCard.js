import React from 'react';
import UserDetail from './UserDetail';

const FlagCard = props => {
  const { email, jobTitle, avatar, content, countryCode } = props.user;
  return(
    <div className="card">      
      <div className="content">
        <UserDetail email={email} jobTitle={jobTitle} avatar={avatar}/>
      </div>
      <div className="content">
        <img 
          className="country image left floated" 
          src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
          alt="countryCode"
        />
        <div className="description">{content}</div>
      </div>
    </div>
  )
};

export default FlagCard;