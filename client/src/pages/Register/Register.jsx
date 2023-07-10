import {
    Wrapper,
    Input,
    AlreadyMember,
    FieldWrapper,
    Form,
    Button,
    AlingP,
} from "./Register.style";

function Register() {
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
                <FieldWrapper>
                    <Input name="first name" type="text" placeholder="First name" />
                </FieldWrapper>
                <FieldWrapper>
                    <Input name="last name" type="text" placeholder="Last name" />
                </FieldWrapper>
                <FieldWrapper>
                    <Input name="Email" type="email" placeholder="Email" />
                </FieldWrapper>
                <FieldWrapper>
                    <Input name="Password" type="password" placeholder="Password" />
                </FieldWrapper>
                <Button>Register</Button>
                <AlingP>Already on Atackometer?</AlingP>
                <AlreadyMember to="/login">Log In</AlreadyMember>
            </Form>
        </Wrapper>
    );
}

export default Register;
