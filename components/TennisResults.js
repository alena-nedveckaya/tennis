import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from "./TableHeader";
import TableHeaderSecond from "./TableHeaderSecond";
import TableData from "./TableData";

require("./styles.scss");

class TennisResults extends React.PureComponent {
    // static propTypes = {
    //     dataGames: PropTypes.arrayOf({
    //         PropTypes.shape({
    //         color: PropTypes.string,
    //         fontSize: PropTypes.number
    //     }),
    //
    //     },
    // };
    static defaultProps = {
        dataGames: [
            {
                stage: 123,
                id: 345,
                date: "12.04.2018",
                name1: "string1",
                name2: "string2",
                koef1: 678.5,
                koef2: 987.98,
                set1: 11111,
                set2: 22222,
            },
            {
                stage: 123,
                id: 987,
                date: "12.04.2018",
                name1: "string1",
                name2: "string2",
                koef1: 678.5,
                koef2: 987.98,
                set1: 11111,
                set2: 22222,
            }
        ],
    };

    state = {};

    check = (id) => {
        let oldState = {...this.state}

        oldState[id] = 'checked';
        // console.log('checkAll id', this.state);
        this.setState({...oldState});

    };

    unCheck = (id) => {
        let oldState = {...this.state};

        oldState[id] = 'none';
        this.setState({...oldState});
    };

    checkAll = () => {
        const {dataGames} = this.props;
        let oldState = {...this.state};

        dataGames.map((el) => {

            if (!oldState[el.id]) {
                oldState[el.id] = 'checked';
            }
        });
        this.setState({...oldState});

    };
    unCheckAll = () => {
        const {dataGames} = this.props;
        let oldState = {...this.state}
        dataGames.map((el) => {
            if (oldState[el.id] === 'checked') {
                oldState[el.id] = false;
            }
        });
        this.setState({...oldState});

    };


    render() {
        const {dataGames} = this.props;
        const {check, unCheck, unCheckAll, checkAll} = this;
        console.log('state', this.state);
        const data = dataGames.map((el, i) => <TableData {...el} key={el.id} cbCheck={check} cbUnCheck={unCheck}
                                                         checked={this.state[el.id]}/>)
        return (
            <table className={'table_results'}>
                <tbody>
                <TableHeader/>
                <TableHeaderSecond cbCheckAll={checkAll} cbUnCheckAll={unCheckAll}/>
                {data}
                </tbody>
            </table>)

    }
}

export default TennisResults