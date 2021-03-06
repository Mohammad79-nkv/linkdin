import { Form, Formik, useFormik } from "formik";
import styled from "styled-components";
import FormControl from "../form/FormControl";
import * as Yup from "yup";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../store/user";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

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

const useStyles = makeStyles((theme) => ({
  password: {
    marginTop: theme.spacing(2),
  },
  forgatPassword: {
    marginTop: theme.spacing(2),
    color: "#0A66C2",
    fontWeight: "bold",
    // display: "inline",
    width: "160px",
    cursor: "pointer",
    transitionDuration: "100ms",
    textAlign: "center",
    boxSizing: "border-box",
    padding: "4px 8px",
    marginLeft: "-10px",
    borderRadius: "20px",
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "#D0E8FF",
    },
  },
  formBtn: {
    marginTop: theme.spacing(3),
    padding: "15px",
    borderRadius: "40px",
    backgroundColor: "#0A66C2",
    fontWeight: "500",
  },
}));

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const onSubmit = async (values) => {
    const { email, password } = values;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const { email, photoURL, displayName } = user;
        const userDitails = {
          email,
          photoURL,
          displayName,
        };
        dispatch(signInUser(userDitails));
        toast.success(`Hello ${email}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.replace("/home");
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  <Helmet>
    <title>LinkedIn|Sign In</title>
  </Helmet>;
  const classes = useStyles();
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <Container>
      <Helmet>
        <title>LinkedIn | Sign In</title>
      </Helmet>
      ;
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
            <Typography className={classes.forgatPassword}>
              Forgot password?
            </Typography>
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
      <SignUpSection>
        <p>New to LinkedIn?</p>
        <Link to="/register">Join now</Link>
      </SignUpSection>
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
  /* height: 400px; */
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
const SignUpSection = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-size: 16px;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default SignIn;
