import React from 'react';

const SortList = ({options, defaultValue, value, onChange}) => {
    return (
        <>
            <div>
                <select style={{margin: '0px 20px'}}
                        value={value}
                        onChange={event => onChange(event.target.value)}
                >
                    <option disabled value="">{defaultValue}</option>
                    {options.map(option =>
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )}
                </select>
            </div>
        </>
    );
};

export default SortList;