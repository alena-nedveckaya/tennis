import React from 'react';
import PropTypes from 'prop-types';

class TableData extends React.PureComponent{
    static propTypes ={
    };



    state = {
        checked:this.props.checked,
    };

    checked= (EO) => {
        const {cbCheck, cbUnCheck,id} = this.props;

        if (EO.target.checked){
            cbCheck(id);
            this.setState({checked:'checked'})
        }
        else{
            cbUnCheck(id);
            this.setState({checked:false})
        }


    };

    componentWillReceiveProps = (newProps) => {
        // console.log('newProps',newProps.checked )
        this.setState({'checked': newProps.checked})
    }



    render(){
        const {stage, id, name1, date, name2, koef1, koef2, set1, set2} = this.props;
        // console.log('checked', this.state.checked)


        return (
            <tr>
                <td><input type={'checkbox'} className={'input'} onClick={this.checked} checked={!!this.state.checked}/></td>
                <td>{stage}</td>
                <td>{id}</td>
                <td>{date}</td>
                <td>{name1}</td>
                <td>{name2}</td>
                <td>{koef1}</td>
                <td>{koef2}</td>
                <td>{set1}</td>
                <td>{set2}</td>
                <td><button>get result</button></td>
            </tr>
        )
    }

}
export default TableData;