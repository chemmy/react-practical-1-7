import React, { Fragment } from 'react';

const UserDetail = props => {
  const { email, jobTitle, avatar } = props;

  return(
    <Fragment>
      <img 
        className="right floated tiny ui image" 
        src={avatar} 
        alt="img"
      />
      <div className="header left floated">{email}</div>
      <div className="description left floated">{jobTitle}</div>
    </Fragment>
  )
};

export default UserDetail;