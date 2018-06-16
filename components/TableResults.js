import React from 'react';
import PropTypes from 'prop-types';

class TableResults extends React.PureComponent{
    static propTypes = {

    }
    static defaultProps = {
        number1 :123,
        number2: 345,
        date: "12.04.2018",
        string1 : "string1",
        string2 : "string2",
        number3 : 678.5,
        number4 : 987.98,
        number5 :11111,
        number6: 22222,
    };

    render(){
        <table>
            <TableHeader/>
        </table>

    }
}