import React from 'react';

// https://contactmentor.com/login-form-react-js-code/
// https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
// https://blog.openreplay.com/user-registration-and-login-with-react-and-axios
const Login = () => {
  return (
    <div class="login_signup_wrapper">
      <p class="login_signup_title">Login</p>
      <p class="login_signup_sub_title">
        Please fill this form to create an account.
      </p>

      <form class="signup_form" action="" method="post">
        <div class="form-group">
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            class="login_signup_input"
            value=""
          />
          <span class="invalid-feedback"></span>
        </div>
        <br />
        <div class="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            class="login_signup_input"
            value=""
          />
          <span class="invalid-feedback">password error</span>
        </div>
        <br />
        <div class="form-group">
          <input type="submit" class="login_signup_submit_btn" value="Submit" />
          <input type="reset" class="login_signup_reset_btn" value="Reset" />
        </div>
        <p>
          Don't have an account? <a href="signup.php">Sign up now</a>.
        </p>
        <p>
          Forgot your password? <a href="">Reset here</a>.
        </p>
        <p>
          Forgot your username? <a href="">Reset here</a>.
        </p>
      </form>
    </div>
  );
};

export default Login;
