import React from 'react';
import TabOverview from './tab-overview';
import TabDetail from './tab-detail';
import TabReviews from './tab-reviews';
import PropTypes from 'prop-types';

const tabNames = [`Overview`, `Detail`, `Reviews`];

const getComponentByType = (type, film, filmReviews, rating, users) => {
  switch (type) {
    case `Detail`:
      return <TabDetail film={film} />;
    case `Reviews`:
      return <TabReviews users={users} filmReviews={filmReviews} />;
  }

  return <TabOverview rating={rating} ratings={filmReviews.length} film={film} />;
};

const tabsNav = (active, onTabClick) => {
  console.log(`active is ${active}, onTabClick is ${onTabClick}`);
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabNames.map((tabName) => {
          const className = active === tabName ? `movie-nav__item--active` : ``;
          return (
            <li key={tabName} className={`movie-nav__item ${className}`}>
              <a href="#" className="movie-nav__link" onClick={(evt) => onTabClick(evt, tabName)}>
                {tabName}
              </a>
            </li>);
        }
        )}
      </ul>
    </nav>
  );
};


export default class TabsSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onClickTab = this._onClickTab.bind(this);
    this.state = {
      active: `Overview`,
    };
  }

  _onClickTab(evt, name) {
    evt.preventDefault();
    this.setState({active: name});
  }

  render() {
    const {film, filmReviews, rating, users} = this.props;
    return (
      <div className="movie-card__desc">
        {tabsNav(this.state.active, this._onClickTab)}
        {getComponentByType(this.state.active, film, filmReviews, rating, users)}
      </div>
    );

  }

}

TabsSelect.propTypes = {
  film: PropTypes.shape.isRequired,
  filmReviews: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
};

tabsNav.propTypes = {
  active: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};
