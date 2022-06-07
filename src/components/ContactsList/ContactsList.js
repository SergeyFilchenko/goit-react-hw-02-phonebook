import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

export default function ContactsList({ list, onClick }) {
  return (
    <ul>
      {list.map(({ name, number, id }, idx) => (
        <Contact
          key={id}
          idx={idx}
          name={name}
          number={number}
          onClick={() => {
            onClick(id);
          }}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
