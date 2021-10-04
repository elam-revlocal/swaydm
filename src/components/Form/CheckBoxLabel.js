import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabel() {
  return (
    <FormGroup >
      <FormControlLabel control={<Checkbox />} label="I'm interested in being a beta tester" />
      <FormControlLabel control={<Checkbox />} label="I'm interested in being an ambassador" />
    </FormGroup>
  );
}