import React from "react";

import profileAvatar from '../images/Avatar-profile.jpg';

const Main = () => {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={profileAvatar} alt="Аватар профиля"/>
            <button className="profile__avatar-btn"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button"></button>
            <p className="profile__description"></p>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="elements">
          <ul className="elements__list">

          </ul>
        </section>
      </main>
    </>
  );
};

export default Main;
