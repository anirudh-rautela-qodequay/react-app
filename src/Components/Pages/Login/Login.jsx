// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Loader from "../../Layout/Loader/Loader.jsx";

// // function Login() {
// //   const navigate = useNavigate();
// //   const [formValues, setFormValues] = useState({});
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleInput = (e) => {
// //     const { name, value } = e.target;
// //     setFormValues({ ...formValues, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     localStorage.setItem("credentials", JSON.stringify(formValues));
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       navigate("/dashboard");
// //     }, 5000);
// //   };

// //   return (
// //     <div>
// //       {isLoading ? (
// //         <Loader />
// //       ) : (
// //         <form onSubmit={handleSubmit}>
// //           <label htmlFor="username">Username</label>
// //           <input
// //             type="text"
// //             id="username"
// //             name="username"
// //             onChange={handleInput}
// //           />
// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             onChange={handleInput}
// //           />
// //           <button type="submit">Login</button>
// //         </form>
// //       )}
// //     </div>
// //   );
// // }

// // export default Login;

// import React from "react";
// import { useForm, Controller } from "react-hook-form";

// const LoginPage = () => {
//   const { control, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log("Login Data:", data);
//     // Handle login logic here (e.g., API call)
//   };

//   return (
//     <div
//       style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
//     >
//       <h2>Login</h2>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
//       >
//         {/* Email Field */}
//         <Controller
//           name="email"
//           control={control}
//           defaultValue=""
//           rules={{
//             required: "Email is required",
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               message: "Invalid email address",
//             },
//           }}
//           render={({ field, fieldState: { error } }) => (
//             <div>
//               <input
//                 {...field}
//                 type="email"
//                 placeholder="Email"
//                 className={error ? "error" : ""}
//               />
//               <p className={`error-message ${error ? "visible" : ""}`}>
//                 {error?.message || ""}
//               </p>
//             </div>
//           )}
//         />

//         {/* Password Field */}
//         <Controller
//           name="password"
//           control={control}
//           defaultValue=""
//           rules={{ required: "Password is required" }}
//           render={({ field, fieldState: { error } }) => (
//             <div>
//               <input
//                 {...field}
//                 type="password"
//                 placeholder="Password"
//                 className={error ? "error" : ""}
//               />
//               <p className={`error-message ${error ? "visible" : ""}`}>
//                 {error?.message || ""}
//               </p>
//             </div>
//           )}
//         />

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             padding: "10px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#45cb85",
//             color: "#fff",
//             cursor: "pointer",
//             fontWeight: "bold",
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Loader from "../../Layout/Loader/Loader.jsx";

// Yup Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Email must include a valid domain (e.g., .com, .org)"
    ),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Use Yup resolver
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Handle login logic here (e.g., API call)
    localStorage.setItem("credentials", JSON.stringify(data));
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 5000);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            width: "100%",
            // margin: "50px auto",
            height:"80vh",
          }}
          className="flex-full-center"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" ,width:"400px"}}
            >
            
            <h2 style={{textAlign: "center"}}>Login</h2>
            {/* Email Field */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className={errors.email ? "error" : ""}
                  />
                  <p
                    className={`error-message ${errors.email ? "visible" : ""}`}
                  >
                    {errors.email?.message || ""}
                  </p>
                </div>
              )}
            />

            {/* Password Field */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className={errors.password ? "error" : ""}
                  />
                  <p
                    className={`error-message ${
                      errors.password ? "visible" : ""
                    }`}
                  >
                    {errors.password?.message || ""}
                  </p>
                </div>
              )}
            />

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#45cb85",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
