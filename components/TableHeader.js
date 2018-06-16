import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = () => {
    return (
        <tr>
            <td colSpan={7}>
                <button>button1</button>
                <button>button2</button>
            </td>
            <td>
                <button>button3</button>
            </td>
        </tr>

    )
}