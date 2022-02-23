import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true)
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }


  return (
    <div>
      <div className="page">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form">
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              className="popup__input"
              required
            />
            <span id="name-error" className="popup__input-error"></span>
            <input
              type="text"
              name="info"
              id="info"
              placeholder="Профессиональная деятельность"
              minLength="2"
              maxLength="200"
              className="popup__input"
              required
            />
            <span id="info-error" className="popup__input-error"></span>
            <button type="submit" className="popup__submit-save">Сохранить</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form">
            <input
              type="text"
              name="card_name"
              id="card-name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              className="popup__input"
              required
            />
            <span id="card-name-error" className="popup__input-error"></span>
            <input
              type="url"
              name="card_link"
              id="card-link"
              placeholder="Ссылка на картинку"
              className="popup__input"
              required
            />
            <span id="card-link-error" className="popup__input-error"></span>
            <button type="submit" className="popup__submit-save">Создать</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form">
            <input
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на картинку"
              className="popup__input"
              required
            />
            <span id="avatar-error" className="popup__input-error"></span>
            <button type="submit" className="popup__submit-save">Сохранить</button>
          </fieldset>
        </PopupWithForm>

        <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups}/>


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
