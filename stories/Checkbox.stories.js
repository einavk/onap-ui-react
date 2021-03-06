import React from 'react';
import Examples from './utils/Examples.js';

import Checkbox from '../src/components/Checkbox';
import HTMLCheckboxChecked from '../node_modules/onap-ui-common/lib/html/components/checkbox/checkbox-checked.html';
import HTMLCheckboxUnchecked from '../node_modules/onap-ui-common/lib/html/components/checkbox/checkbox-unchecked.html';
import HTMLCheckboxDisabled from '../node_modules/onap-ui-common/lib/html/components/checkbox/checkbox-disabled.html';
import HTMLCheckboxDisabledChecked from '../node_modules/onap-ui-common/lib/html/components/checkbox/checkbox-disabled-checked.html';

let examples = {
	Checked: {
		jsx: <Checkbox checked={true} label='This is the checkbox label' value='myVal' onChange={()=>{}} data-test-id='mycheckbox-1' inputRef={() => {} } />,
		html: HTMLCheckboxChecked
	},
	Unchecked: {
		jsx: <Checkbox label='This is the checkbox label' value='myVal' onChange={()=>{}} data-test-id='mycheckbox-2' inputRef={() => {} } />,
		html: HTMLCheckboxUnchecked
	},
	Disabled: {
		jsx: <Checkbox label='This is the checkbox label' disabled={true} value='myVal' onChange={()=>{}} data-test-id='mycheckbox-4' inputRef={() => {} } />,
		html: HTMLCheckboxDisabled
	},
	'Disabled and Checked': {
		jsx: <Checkbox label='This is the checkbox label' disabled={true} checked={true} value='myVal' onChange={()=>{}} data-test-id='mycheckbox-4' inputRef={() => {} } />,
		html: HTMLCheckboxDisabledChecked
	}
};

const Checkboxes = () => (
	<Examples examples={examples} />
);

export default Checkboxes;
