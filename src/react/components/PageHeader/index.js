import React from 'react';
import { WMPageHeader } from '@workmarket/front-end-components-next';
import styles from './styles';

const PageHeader = () => (
	<div style={ styles }>
		<WMPageHeader
			routes={ [
				{ label: 'User Settings' },
			] }
		/>
	</div>
);

export default PageHeader;
