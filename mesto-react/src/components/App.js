import React from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div className="page">
        <Header />

        <Main />

        <Footer />

        <div className="popup popup_edit-profile">
          <div className="popup__container">
            <button className="popup__submit-close" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__edit-profile-form" name="edit-profile" novalidate>
              <input
                className="popup__input popup__input_text_name"
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required/>
              <span className="popup__input-error name-error"></span>
              <input
                className="popup__input popup__input_text_info"
                type="text"
                name="info"
                id="info"
                placeholder="Профессиональная деятельность"
                minlength="2"
                maxlength="200"
                required/>
              <span className="popup__input-error info-error"></span>
              <button className="popup__submit-save" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_add-card">
          <div className="popup__container">
            <button className="popup__submit-close" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form popup__add-card-form" name="add-card" novalidate>
              <input
                className="popup__input popup__input_text_card-name"
                type="text"
                name="card_name"
                id="card-name"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required/>
              <span className="popup__input-error card-name-error"></span>
              <input
                className="popup__input popup__input_text_card-link"
                type="url"
                name="card_link"
                id="card-link"
                placeholder="Ссылка на картинку"
                required/>
              <span className="popup__input-error card-link-error"></span>
              <button className="popup__submit-save" type="submit">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup popup_edit-avatar">
          <div className="popup__container popup__edit-avatar-container">
            <button className="popup__submit-close" type="button"></button>
            <h2 className="popup__title popup__title-avatar">Обновить аватар</h2>
            <form className="popup__form popup__edit-avatar" name="edit-avatar" action="#" novalidate>
              <input
                className="popup__input popup__input_text_avatar-link"
                type="url"
                name="avatar"
                id="avatar"
                placeholder="Ссылка на картинку"
                required/>
              <span className="popup__input-error avatar-error"></span>
              <button className="popup__submit-save" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <template id="card-template">
          <li className="element">
            <button className="element__button-delete" type="button"></button>
            <img className="element__image" src="#"/>
            <div className="element__info">
              <h2 className="element__title"></h2>
              <div className="element__likes">
                <button className="element__like-button" type="button"></button>
                <span className="element__likes-number"></span>
              </div>
            </div>
          </li>
        </template>

        <div className="popup popup_show-image">
          <div className="popup__container popup__show-container">
            <button className="popup__submit-close" type="button"></button>
            <img className="popup__image" src="#" alt/>
            <h2 className="popup__image-title"></h2>
          </div>
        </div>

        <div className="popup popup_del-card">
          <div className="popup__container popup__del-container">
            <button className="popup__submit-close" type="button"></button>
            <form className="popup__form popup__del-image">
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="popup__submit-save" type="submit">Да</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
