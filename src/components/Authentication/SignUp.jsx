import { Form, Formik, useFormik } from "formik";
import styled from "styled-components";
import FormControl from "../form/FormControl";
import * as Yup from "yup";
import { Button, makeStyles, Typography } from "@material-ui/core";
import GoogleLogin from "./GoogleLogin";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
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
// const onSubmit = (values) => {
//   const { email, password } = values;
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((res) => {
//       toast.success("User Created!", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       history.replace("/login");
//     })
//     .catch((err) => console.log(err));
// };

const useStyles = makeStyles((theme) => ({
  password: {
    marginTop: theme.spacing(2),
  },
  //
  formBtn: {
    marginTop: theme.spacing(3),
    padding: "15px",
    borderRadius: "40px",
    backgroundColor: "#0A66C2",
    fontWeight: "500",
  },
}));

const SignUp = () => {
  const onSubmit = (values) => {
    const { email, password } = values;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("User Created!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.replace("/login");
      })
      .catch((err) => {
        toast.success(`${err.message}`, {
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

  const history = useHistory();
  const classes = useStyles();
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <Container>
      <Helmet>
        <title>LinkedIn | Sign Up</title>
      </Helmet>
      <Main>
        <MainHeader>
          <a>
            <img src="/images/login-logo.svg" />
          </a>
          <h2>Make the most of your professional life</h2>
        </MainHeader>
        <MainContent>
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
            <p>
              By clicking Agree & Join, you agree to the LinkedIn
              <span>User Agreement, Privacy Policy,</span>
              and <span>Cookie Policy</span>.
            </p>
            <Button
              className={classes.formBtn}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Agree & Join
            </Button>
          </form>
          <SectionTwo>
            <span className="center">or</span>
            <span className="left-line"></span>
          </SectionTwo>
          <Google>
            <GoogleLogin />
          </Google>
          <SignInSection>
            <p>Already on LinkedIn?</p>
            <Link to="/login">Sign in</Link>
          </SignInSection>
        </MainContent>
      </Main>
      <Footer>
        <FirstSection>
          <a>About</a>
          <a>User Agreement</a>
          <a>Cookie Policy</a>
          <a>Brand Policy</a>
          <a>Community Guidelines</a>
        </FirstSection>
        <SecondSection>
          <a>Accessibility</a>
          <a>Privacy Policy</a>
          <a>Copyright Policy</a>
          <a>Guest Controls</a>
        </SecondSection>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  /* background: skyblue; */
  height: 100vh;
  /* overflow: hidden; */
`;
const Main = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  background-color: #f3f2ef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  /* justify-content: center; */
  @media (max-width: 1160px) {
    background-color: #ffffffff;
  }
`;
const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 110px;
    height: 34px;
  }
  h2 {
    padding: 24px 16px;
  }
`;
const MainContent = styled.div`
  width: 400px;
  height: 500px;
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  p {
    /* display:none */
    font-size: 12px;
    text-align: center;
    margin: 16px 0;
    color: #666666;
    span {
      color: #0a66c2;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SectionTwo = styled.div`
  width: 100%;
  text-align: center;
  padding: 24px;
  position: relative;
  .left-line {
    position: absolute;
    top: 32px;
    right: 0;
    display: inline-block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .center {
    position: absolute;
    top: 20px;
    right: 145px;
    background-color: #ffffffff;
    z-index: 5;
    padding: 0 20px;
  }
`;
const Google = styled.div`
  /* width: 100px; */
  margin-top: 20px;
`;

const SignInSection = styled.div`
  display: flex;
  align-items: center;
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
const Footer = styled.div`
  background: #ffffff;
  height: 50px;
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-right: 200px;
  color: rgba(0, 0, 0, 0.6);
`;
const FirstSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  a {
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
      text-decoration: underline !important;
      color: rgba(0, 0, 0, 1) !important;
    }
  }
  @media (max-width: 1160px) {
    flex-direction: column;
    justify-content: space-between;
    a {
      margin-bottom: 10px;
      margin-left: 20px;
    }
  }
`;
const SecondSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  a {
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      text-decoration: underline !important;
      color: rgba(0, 0, 0, 1) !important;
    }
  }
  @media (max-width: 1160px) {
    flex-direction: column;
    justify-content: space-between;
    a {
      margin-bottom: 10px;
      margin-left: 20px;
    }
  }
`;

export default SignUp;
