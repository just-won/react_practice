import React, { Component } from 'react'
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme : themes.light
        };
        this.toggleTheme = () => {
            this.setState((prev)=> ({
                theme: prev.theme === themes.dark ? themes.light : themes.dark
            }))
        }
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton changeTheme={this.toggleTheme}/>
                    {/* Consumer는 Props를 갖고있어서 어디서든 사용해서 Context데이터 props로 가져올 수 있음 */}
                    <ThemeContext.Consumer>
                        {theme => (
                            <div 
                            style={{
                                height: 300, 
                                width: 300, 
                                backgroundColor:theme.background
                            }}
                            ></div>
                        )}
                    </ThemeContext.Consumer>
                </ThemeContext.Provider>
                <ThemedButton/>
            </div>
        )
    }
}
