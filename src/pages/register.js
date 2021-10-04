import React from "react"
import { Link } from "gatsby"
import Layout from "../components/UI/Layout"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import MuiLink from "@material-ui/core/Link"
import { Field, Form, FormSpy } from "react-final-form"
import Typography from "../components/Utils/Typography"
import AppForm from "../components/AppForm"
import { email, required } from "../components/Form/validation"
import RFTextField from "../components/Form/RFTextField"
import FormButton from "../components/Form/FormButton"
import FormFeedback from "../components/Form/FormFeedback"
// import CheckboxLabel from "../components/Form/CheckBoxLabel"
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import theme from "../components/UI/Theme"

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  checkbox: {
    color: theme.palette.primary.white,
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}))

function RegisterPage() {
  const classes = useStyles()
  const [sent, setSent] = React.useState(false)

  const validate = values => {
    const errors = required(
      ["firstName", "lastName", "email", "social"],
      values
    )

    if (!errors.email) {
      const emailError = email(values.email, values)
      if (emailError) {
        errors.email = email(values.email, values)
      }
    }

    return errors
  }

  const handleSubmit = () => {
    setSent(true)
  }

  return (
    <Layout>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Interested in Sway?
          </Typography>
          <Typography variant="body2" align="center">
            <MuiLink component={Link} to="/login" underline="always">
            </MuiLink>
          </Typography>
          <Typography variant="h5" gutterBottom  align="center">
            Fill our your information and a Sway teammate will reach out!
          </Typography>
        </React.Fragment>
        <Form 
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit, submitting }) => (
            <form name="register" method="post" action="/success/" data-netlify="true"  onSubmit={handleSubmit} className={classes.form} noValidate>
              <input type="hidden" name="form-name" value="register" />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="fname"
                    fullWidth
                    label="First name"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    autoComplete="lname"
                    fullWidth
                    label="Last name"
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <Field
                autoComplete="social"
                component={RFTextField}
                fullWidth
                label="Social Media Link"
                margin="normal"
                name="social"
                required
              />
              <FormGroup className={classes.checkbox}>
                <FormControlLabel control={<Checkbox />} value="betaTester" color="white" label="I'm interested in being a beta tester" />
                <FormControlLabel  control={<Checkbox />} value="ambassador" color={theme.palette.common.white} label="I'm interested in being an ambassador" />
              </FormGroup>                             
              {/* <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              /> */}
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent ? "Thank you!" : "Find out more"}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
    </Layout>
  )
}

export default RegisterPage
