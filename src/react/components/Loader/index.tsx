import React from 'react';
import { WMCircularProgress } from '@workmarket/front-end-components-next';
import styles from './styles';

const Loader = () => (
	<div style={ styles }>
		<WMCircularProgress
			size={ 50 }
			thickness={ 5 }
		/>
	</div>
);

export default Loader;
