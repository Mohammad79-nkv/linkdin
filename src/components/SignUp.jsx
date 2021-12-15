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
  const classes = useStyles();
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <Container>
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
              By clicking Agree & Join, you agree to the LinkedIn<span>User Agreement, Privacy Policy,</span> 
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
        </MainContent>
      </Main>
      <Footer></Footer>
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
`;
const Footer = styled.div`
  background: #ffffff;
  height: 50px;
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
      color:#666666;
      span {
        color:#0A66C2;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
      }
  }
`;

export default SignUp;
