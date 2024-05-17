import React from 'react';
import './User.scss';

const UserWrapper = ({ data }) => {
  const handleDelete = (userId) => {
    console.log(`User with ID ${userId} deleted`);
    // Implement delete functionality here
  };

  const userCards = data?.map((user) => (
    <div className="user-wrapper container" key={user.id}>
      <div className="profile-card">
        <div className="top-icons">
          <i className="fas fa-long-arrow-alt-left"></i>
          <i className="fas fa-ellipsis-v"></i>
          <i className="far fa-heart"></i>
        </div>
        <div className="profile">
          <img
            src={user.avatar}
            className="thumbnail"
            alt="Profile thumbnail"
          />
          <div className="check"><i className="fas fa-check"></i></div>
          <h3 className="name">{user.name}</h3>
          <p className="title">{user.job}</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
          <div className="buttons">
            <button type="button" className="btn hire">Hire Me</button>
            <button type="button" className="btn delete" onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        </div>
        <div className="social-icons">
          <div className="icon">
            <a href="/"><i className="fab fa-dribbble">ifei </i></a>
            <h4>12.8k</h4>
            <p>Followers</p> 
          </div>
          <div className="icon">
            <a href="#"><i className="fab fa-behance">enj</i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>
          <div className="icon">
            <a href="#"><i className="fab fa-twitter">mdkj</i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="user-wrapper container">
      {userCards}
    </div>
  );
};

export default UserWrapper;
