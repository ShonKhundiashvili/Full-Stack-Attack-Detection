import { useNavigate } from "react-router-dom";
import {
  Input,
  Form,
  Wrapper,
  ResetPasswordButton,
  Alignp,
  AlignH1,
  BackButton,
} from "./ForgotPassword.style";

function ForgotPassword() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  function returnHomePage() {
    navigate("/login");
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <AlignH1>Forgot Password?</AlignH1>
        <Alignp>Reset password in one quick step</Alignp>
        <Input name="Email" type="email" placeholder="Enter your email" />
        <ResetPasswordButton>Reset Password</ResetPasswordButton>
        <BackButton onClick={returnHomePage}>Back</BackButton>
      </Form>
    </Wrapper>
  );
}

export default ForgotPassword;
