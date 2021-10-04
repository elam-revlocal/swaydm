import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox value="Beta tester" {..."I'm interested in being a beta tester"}  />
      <Checkbox value="Ambassador"{..."I'm interested in being an ambassador"} />
    </div>
  );
}