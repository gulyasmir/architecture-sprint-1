import React from 'react';

// Динамическое подключение удалённого модуля Gallery
const Card = React.lazy(() => import('../../gallery-microfrontend/components/Card'));

function Gallery({ cards, onCardClick, onCardLike, onCardDelete }) {
    const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

    return (
        <section className="places page__section">
            <ul className="places__list">
                {cards.map((card) => (
                <Card
                    key={card._id}
                    card={card}
                    onCardClick={onCardClick}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                />
                ))}
            </ul>
        </section>
    )
}

export default Gallery;