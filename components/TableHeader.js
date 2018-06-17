import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = () => {
    return (
        <tr>
            <td colSpan={7}>
                <button>upload</button>
                <button>clear</button>
            </td>
            <td colSpan={4}>
                <button>get results</button>
            </td>
        </tr>

    )
};
export default TableHeader;