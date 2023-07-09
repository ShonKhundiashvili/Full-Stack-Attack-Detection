import {
  Form,
  Wrapper,
  SubmitButton,
  FieldWrapper,
  Input,
  Title,
  ForgotPassword,
  Icon,
} from "./Login.style";

import logo from './image.png';
import userIcon from './user.png';
import pswIcon from './padlock.png';

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <Wrapper>
      <Title src={logo} alt="logo" />
      <Form onSubmit={handleSubmit}>
        <FieldWrapper>
          <Icon src={userIcon} alt="userIcon" />
          <Input name="Email" type="email" placeholder="Type you email" />
        </FieldWrapper>
        <FieldWrapper>
          <Icon src={pswIcon} alt="pswIcon" />
          <Input
            name="Password"
            type="password"
            placeholder="Type your password"
          />
        </FieldWrapper>
        <ForgotPassword to="/ForgotPassword">Forgot password?</ForgotPassword>
        <SubmitButton>LOGIN</SubmitButton>
      </Form>
    </Wrapper>
  );
}

export default Login;
