import { Form, Formik, useFormik } from "formik";
import styled from "styled-components";
import FormControl from "./form/FormControl";
import * as Yup from "yup";
import { Button, makeStyles, Typography } from "@material-ui/core";

const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const useStyles = makeStyles((theme) => ({
  password: {
    marginTop: theme.spacing(2),
  },
  forgatPassword : {
    marginTop: theme.spacing(2),
    color: "#0A66C2",
    fontWeight: "bold",
    // display: "inline",
    width: '160px',
    cursor: 'pointer',
    transitionDuration: '100ms',
    textAlign: 'center',
    boxSizing:'border-box',
    padding:'4px 8px',
    marginLeft: '-10px',
    borderRadius: '20px',
    '&:hover' : {
        textDecoration: 'underline',
        backgroundColor: '#D0E8FF'
    }
  },
  formBtn: {
      marginTop: theme.spacing(3),
      padding: '15px',
      borderRadius: '40px',
      backgroundColor: '#0A66C2',
      fontWeight: '500',
  }
}));

const SignIn = () => {
  const classes = useStyles();
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <Container>
      <Header>
        <a>
          <img src="/images/login-logo.svg" alt="header-logo" />
        </a>
      </Header>
      <Content>
        <HeaderContent>
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </HeaderContent>
        <FormContent>
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              control="input"
              type="email"
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <FormControl
              className={classes.password}
              control="input"
              type="password"
              id="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Typography className={classes.forgatPassword}>Forgot password?</Typography>
            <Button
              className={classes.formBtn}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            
            >
              Sign in
            </Button>
          </form>
        </FormContent>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const Header = styled.header`
  img {
    width: 110px;
    height: 34px;
    margin-top: 30px;
    margin-left: 30px;
  }
`;
const Content = styled.div`
  width: 100%;
  margin: 30px auto;
  /* display:flex;
    justify-content: center;
    align-items: center; */
  width: 352px;
  height: 400px;
  /* border:1px solid black; */
  padding: 24px;
  @media (min-width: 768px) {
      
      box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  }
`;
const HeaderContent = styled.div`
  h1 {
    font-weight: 500;
  }
  p {
    font-size: 12px;
  }
`;
const FormContent = styled.div`
  form {
    
  }
  .form-btn {
    margin-top: 20px;
  }
`;
export default SignIn;
