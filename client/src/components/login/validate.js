export default function validate(data) {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!emailRegex.test(data.email)) {
    errors.email = "Email requiered";
  }
  if (!passwordRegex.test(data.password)) {
    errors.password = "Password requiered";
  }
  return errors;
}
