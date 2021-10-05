import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabel() {
    const [state, setState] = React.useState({
    checkedBetaTester: false,
    checkedAmbassador: false,
  })

  const handleChange = (event) => {
    setState({ ...state, 
      [event.target.name]: event.target.value });
  }

  let {checkedBetaTester, checkedAmbassador} = state;
  
  return (
    <FormGroup >
    <FormControlLabel 
      control=
        {<Checkbox
            checked={checkedBetaTester}
            onChange={handleChange}
            name="betaTester" />} 
      name="betaTester" 
      value="betaTester"  
      label="I'm interested in being a beta tester" />
    <FormControlLabel  
      control=
        {<Checkbox
          checked={checkedAmbassador}
          onChange={handleChange} 
        />} 
      name="ambassador" 
      value="ambassador"  
      label="I'm interested in being an ambassador" />
  </FormGroup>   
  );
}