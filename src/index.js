import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Test from './Test';
import ClassComponent from './2-6.LifeCycle/ClassComponent';
import Event from './2-7.Event/Event.js';
import Condition from './2-8.ConditionalRendering/Condition.js';
import List from './2-9.List/List';
import ControlledComponent from './2-10.Form/ControlledComponent';
import UncontrolledComponent from './2-10.Form/UncontrolledComponent';
import State from './3-3.Hooks/State';
import Reducer from './3-3.Hooks/Reducer';
import WelcomeDialog from './3-5.Composition/WelcomeDialog';
import Dialog from './3-6.Composition2/Dialog';
import ThankyouDialog from './3-6.Composition2/ThankyouDialog';
import Input from './3-7.HOC/Input';
import Button from './3-7.HOC/Button';
import reportWebVitals from './reportWebVitals';
import Memo from './3-8.Memorization/Memo';
import Example from './3-11.Portal/Example';
import Component from './3-14.PropTypes/Component';
import StyledComponentExample from './Components/StyledComponentExample';
import Container from './Ch3.Practice/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Example />
    </>
);

reportWebVitals();
