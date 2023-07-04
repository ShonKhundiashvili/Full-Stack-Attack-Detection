function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input name="Email" type="email" />
      <label>Password</label>
      <input name="Password" type="password" />
      <button>Submit</button>
    </form>
  );
}

export default Login;
