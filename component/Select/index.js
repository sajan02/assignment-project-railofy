import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';


const NormalSelect = (props) => {
    return (<Select {...props}/>)
}

NormalSelect.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.object,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default NormalSelect;