import React from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from '../layouts';
import AuthDriver from '../common/auth/AuthFirebase';

import TextField from '@material-ui/core/TextField';

class About extends React.Component {
  state = {
    cpf: 'Meu cpf',
    team: '...'
  };

  saveForm = (event) => {
    console.log("Save user", event);
    AuthDriver.updateUser({
      cpf: this.state.cpf,
      team: this.state.team,
    })
    return false;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const user = AuthDriver.getUser();
    return (
      <Layout>
        <div>
          <Typography variant="body2" gutterBottom>
            About: {user.cpf}
          </Typography>
          <form noValidate autoComplete="off" onSubmit={() => { console.log("CALL"); this.saveForm() }}>
            <TextField
              id="standard-name"
              label="Name"
              value={this.state.cpf}
              onChange={this.handleChange('cpf')}
              margin="normal"
            />

            <TextField
              id="standard-name"
              label="Team"
              value={this.state.team}
              onChange={this.handleChange('team')}
              margin="normal"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </Layout>
    );
  }
}
export default About;
