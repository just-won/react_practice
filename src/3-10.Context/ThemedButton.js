// import React, { Component } from 'react'
// import { ThemeContext } from './ThemeContext';

// class ThemedButton extends Component {
//     render() {
//         let props = this.props;
//         let theme = this.context;   
//         return (
//             <button {...props}
//             onClick={props.changeTheme}
//             style={{ backgroundColor: theme.background, color: theme.foreground}}>
//             Button
//             </button>
//         )
//     }
// }

// ThemedButton.contextType = ThemeContext

// export default ThemedButton;

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = (props) => {

    const theme = useContext(ThemeContext);

    return (
        <button
            onClick={props.changeTheme}
            style={{ backgroundColor: theme.background, color: theme.foreground}}>
        Button
        </button>
    )
}

export default ThemedButton
