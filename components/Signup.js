import React from 'react';

const Signup = () => {
  return (
    <div class="login_signup_wrapper">
      <p class="login_signup_title">Sign Up</p>
      <p class="login_signup_sub_title">
        Please fill this form to create an account.
      </p>
      <form class="signup_form" action="" method="post">
        <div class="form-group">
          <label>Username</label>
          <br />
          <input type="text" name="username" class="login_signup_input" value="" />
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
          <span class="invalid-feedback"></span>
        </div>
        <br />
        <div class="form-group">
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirm_password"
            class="login_signup_input"
            value=""
          />
          <span class="invalid-feedback"></span>
        </div>
        <br />
        <div class="form-group">
          <label>Email Address</label>
          <br />
          <input type="email" name="email" class="login_signup_input" value="" />
          <span class="invalid-feedback"></span>
        </div>
        <br />
        <div class="form-group">
          <input type="submit" class="login_signup_submit_btn" value="Submit" />
          <input type="reset" class="login_signup_reset_btn" value="Reset" />
        </div>
        <p>
          Already have an account? <a href="">Login here</a>.
        </p>
      </form>
    </div>
  );
};

export default Signup;
