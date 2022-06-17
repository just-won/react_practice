import React from 'react';
import PropTypes from 'prop-types';

const PropComponent = (props) => {
    return <div>{props.name}</div>
}

PropComponent.defaultProps = {
    name: "Jimmy",
    age:9
};

// props의 값이나 타입을 지정해준다.
PropComponent.propTypes = {
    name: PropTypes.string,
    age: function (props, propName, componentName) {
        if(!/(7|8)/.test(props[propName])) {
            return new Error(
                "Invalid prop `"+
                propName +
                "` supplied to "+
                componentName +
                "`. Validation failed. "
            );
        }
    }
}

const Component = () => {
    return (
        <div>
            <PropComponent />
        </div>
    )
}

export default Component