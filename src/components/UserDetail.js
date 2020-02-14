import React from 'react';
import FlagCard from './FlagCard';

const UserDetail = props => {
  const { email, jobTitle, avatar, content, countryCode } = props.user;

  return(
    <div className="card">      
      <div className="content">
        <img 
          className="right floated tiny ui image" 
          src={avatar} 
          alt="img"
        />
        <div className="header left floated">{email}</div>
        <div className="description left floated">{jobTitle}</div>
      </div>
      <div className="content">
        <FlagCard
          content={content}
          countryCode={countryCode}
        />
      </div>
    </div>
  )
};

export default UserDetail;