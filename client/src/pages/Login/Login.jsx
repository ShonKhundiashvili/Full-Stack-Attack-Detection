import {
  Form,
  Wrapper,
  SubmitButton,
  FieldWrapper,
  Input,
  Title,
  ForgotPassword,
} from "./Login.style";

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
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <FieldWrapper>
          <label>Email</label>
          <Input name="Email" type="email" placeholder="Type you email" />
        </FieldWrapper>
        <FieldWrapper>
          <label>Password</label>
          <Input
            name="Password"
            type="password"
            placeholder="Type your password"
          />
        </FieldWrapper>
        <ForgotPassword to="/ForgotPassword">Forgot password?</ForgotPassword>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
}

export default Login;
