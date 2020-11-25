import React from 'react';
import Dashboard from './react/components/Dashboard';
import PageHeader from './react/components/PageHeader';
import Counter from './react/components/Counter';

const App = () => (
	<div
		style={ {
			display: 'flex',
			flexDirection: 'column',
			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		} }
	>
		<PageHeader />
		<Counter />
		<Dashboard />
	</div>
);
export default App;
