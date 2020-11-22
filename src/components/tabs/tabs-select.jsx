import React from 'react';
import TabDetail from './tab-detail';
import PropTypes from 'prop-types';

const getComponentByType = (type, film) => {
  console.log(type);
  return <TabDetail film={film} />;
};

const Tabs = ({active, film}) => {
  return (
    <React.Fragment>
      {getComponentByType(active, film)}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  active: PropTypes.string.isRequired,
  film: PropTypes.shape.isRequired,
};

export default Tabs;
