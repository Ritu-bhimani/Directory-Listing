// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // @mui
// import {
//   Stack,
//   IconButton,
//   InputAdornment,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// // components
// import { Field, Form, Formik, useFormik } from "formik";
// import * as yup from "yup";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// const Login = () => {
//   const navigate = useNavigate();
//   localStorage.setItem("email", "admin@gmail.com");
//   // const [showPassword, setShowPassword] = useState(false);
//   const [showPassword, setShowPassword] = useState({
//     password: false,
//     ConfirmPassword: false,
//   });

//   const handleClickShowPassword = (field: any) => {
//     setShowPassword((prevShowPassword: any) => ({
//       ...prevShowPassword,
//       [field]: !prevShowPassword[field],
//     }));
//   };
//   const initialValues = {
//     userName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   // -----------  validationSchema
//   const validationSchema = yup.object({
//     userName: yup.string().required("User Name is required"),
//     email: yup.string().email("Invalid email").required("Email is required"),
//     password: yup.string().required("Password is required"),
//     confirmPassword: yup
//       .string()
//       .required("Confirm Password is required")
//       .oneOf([yup.ref("newPassword"), ""], "Password does not match"),
//   });
//   const handleSubmit = (values: any) => {
//     if (values.email === "admin@gmail.com" && values.password === "Admin@123") {
//       navigate("/");
//     }
//   };

//   return (
//     <div>
//       {" "}
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values, handleChange, errors, touched }: any) => (
//           <Form>
//             <Stack spacing={3} mb={2}>
//               <div className="textfiled-row" style={{ marginBottom: 0 }}>
//                 <label>userName</label>
//                 <Field
//                   className="textfiled"
//                   name="userName"
//                   value={values.userName}
//                   as={TextField}
//                   onChange={handleChange}
//                   error={touched.userName && errors.userName}
//                   helperText={touched.userName && errors.userName}
//                 />
//               </div>
//               <div className="textfiled-row" style={{ marginBottom: 0 }}>
//                 <label>Email</label>
//                 <Field
//                   className="textfiled"
//                   name="email"
//                   value={values.email}
//                   as={TextField}
//                   onChange={handleChange}
//                   error={touched.email && Boolean(errors.email)}
//                   helperText={touched.email && errors.email}
//                 />
//               </div>
//               <div className="textfiled-row" style={{ marginBottom: 0 }}>
//                 <label>Password</label>
//                 <Field
//                   className="textfiled"
//                   name="password"
//                   type={showPassword.password ? "text" : "password"}
//                   value={values.password}
//                   as={TextField}
//                   onChange={handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => handleClickShowPassword("password")}
//                           edge="end"
//                         >
//                           {showPassword ? (
//                             <RemoveRedEyeIcon />
//                           ) : (
//                             <VisibilityOffIcon />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                   error={touched.password && Boolean(errors.password)}
//                   helperText={touched.password && errors.password}
//                 />
//               </div>
//               <div className="textfiled-row" style={{ marginBottom: 0 }}>
//                 <label>Confirm Password</label>
//                 <Field
//                   className="textfiled"
//                   name="confirmPassword"
//                   type={showPassword.ConfirmPassword ? "text" : "password"}
//                   value={values.confirmPassword}
//                   as={TextField}
//                   onChange={handleChange}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() =>
//                             handleClickShowPassword("ConfirmPassword")
//                           }
//                           edge="end"
//                         >
//                           {showPassword.ConfirmPassword ? (
//                             <RemoveRedEyeIcon />
//                           ) : (
//                             <VisibilityOffIcon />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                   error={touched.confirmPassword && Boolean(errors.confirmPassword)}
//                   helperText={touched.confirmPassword && errors.confirmPassword}
//                 />
//               </div>
//             </Stack>
//             <Stack
//               direction="row"
//               alignItems="center"
//               justifyContent="space-between"
//               sx={{ my: 2 }}
//             >
//               <FormControlLabel
//                 control={<Checkbox name="remember" />}
//                 label="Remember me"
//               />
//             </Stack>
//             <Button
//               className="save-btn"
//               fullWidth
//               size="large"
//               type="submit"
//               variant="contained"
//               onClick={handleSubmit}
//             >
//               Signup
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  CircularProgress,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    password: false,
    ConfirmPassword: false,
  });

  const handleClickShowPassword = (field: any) => {
    setShowPassword((prevShowPassword: any) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field],
    }));
  };
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  };

  // -----------  validationSchema
  const validationSchema = yup.object({
    userName: yup.string().required("User Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), ""], "Password does not match"),
  });

  const handleSubmit = async (values: any) => {
    try {
      if (
        !values.userName ||
        !values.email ||
        !values.password ||
        !values.confirmPassword
      ) {
        // Handle undefined values
        console.error("Email or password is undefined");
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        values
      );
      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("Signup failed:", response.data);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <Stack spacing={3} mb={2}>
              <div className="textfiled-row" style={{ marginBottom: 0 }}>
                <label>userName</label>
                <Field
                  className="textfiled"
                  name="userName"
                  value={values.userName}
                  as={TextField}
                  onChange={handleChange}
                  error={touched.userName && errors.userName}
                  helperText={touched.userName && errors.userName}
                />
              </div>
              <div className="textfiled-row" style={{ marginBottom: 0 }}>
                <label>Email</label>
                <Field
                  className="textfiled"
                  name="email"
                  value={values.email}
                  as={TextField}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
              <div className="textfiled-row" style={{ marginBottom: 0 }}>
                <label>Password</label>
                <Field
                  className="textfiled"
                  name="password"
                  type={showPassword.password ? "text" : "password"}
                  value={values.password}
                  as={TextField}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => handleClickShowPassword("password")}
                          edge="end"
                        >
                          {showPassword.password ? (
                            <RemoveRedEyeIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </div>
              <div className="textfiled-row" style={{ marginBottom: 0 }}>
                <label>Confirm Password</label>
                <Field
                  className="textfiled"
                  name="confirmPassword"
                  type={showPassword.ConfirmPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  as={TextField}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            handleClickShowPassword("ConfirmPassword")
                          }
                          edge="end"
                        >
                          {showPassword.ConfirmPassword ? (
                            <RemoveRedEyeIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </div>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FormControlLabel
                control={<Checkbox name="remember" />}
                label="Remember me"
              />
            </Stack>
            <Button
              className="save-btn"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              Signup
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
