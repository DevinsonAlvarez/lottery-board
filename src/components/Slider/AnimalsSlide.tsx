function AnimalsCard() {
  return (
    <div className="animals-card">
      <div className="animals-card__title">Lottery Name</div>
      <ul className="animals-card__list">
        {Array(12)
          .fill(undefined)
          .map((_, i) => (
            <li className="animals-card__item" key={i}>
              <div className="animals-card__item-title">
                <div className="animals-card__item-time">09:30 am</div>
                <div className="animals-card__item-name">ANIMAL {i + 1}</div>
              </div>
              <div className="animals-card__item-value">
                <span>{i < 9 ? `0${i + 1}` : i + 1}</span>
              </div>
              <div className="animals-card__item-image">
                <img
                  src="https://placehold.co/44x44"
                  alt="Animal 1"
                  className="animals-card__item-img"
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default function AnimalsSlide() {
  return (
    <div className="animals-slide">
      {Array(5)
        .fill(undefined)
        .map((_, i) => (
          <AnimalsCard key={i} />
        ))}
    </div>
  );
}
