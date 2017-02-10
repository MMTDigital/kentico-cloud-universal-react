import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

const renderTarget = document.getElementById('app');
if (renderTarget === undefined)
	throw Error('Cannot find renderTarget');

ReactDOM.render(<AppRoutes />, renderTarget);
