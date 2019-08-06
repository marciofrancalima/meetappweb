import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import ReactDatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import './styles';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePickerInput({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });

    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy - HH:mm"
        autoComplete="off"
        locale={pt}
        placeholderText={placeholder}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePickerInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DatePickerInput.defaultProps = {
  placeholder: '',
};
