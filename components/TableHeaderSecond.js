import React from 'react';
import PropTypes from 'prop-types'


class TableHeaderSecond extends React.PureComponent {

    chooseAll = (EO) => {
        const {cbCheckAll, cbUnCheckAll} = this.props;


        (EO.target.checked)
            ?
            cbCheckAll()
            :
            cbUnCheckAll()

    };

    render() {
        return (
            <tr>
                <td><input type={'checkbox'} onClick={this.chooseAll} /></td>
                <td>stage</td>
                <td>id</td>
                <td>date</td>
                <td>name 1</td>
                <td>name 2</td>
                <td>koef 1</td>
                <td>koef 2</td>
                <td>set 1</td>
                <td>set 2</td>
                <td>
                    <button>button 4</button>
                </td>
            </tr>
        )
    }
};
export default TableHeaderSecond;