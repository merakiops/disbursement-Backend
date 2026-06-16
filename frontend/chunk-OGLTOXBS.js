// src/app/auth/auth.utils.ts
var passwordStrengthValidator = (control) => {
  const value = control.value || "";
  const hasUpperCase = /[A-Z]+/.test(value);
  const hasLowerCase = /[a-z]+/.test(value);
  const hasNumeric = /[0-9]+/.test(value);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]+/.test(value);
  const hasMinLength = value.length >= 8;
  const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial && hasMinLength;
  return !valid ? { weakPassword: true } : null;
};
var passwordsMatchValidator = (formGroup) => {
  const password = formGroup.get("newPassword")?.value;
  const confirmPassword = formGroup.get("confirmPassword")?.value;
  if (!password || !confirmPassword)
    return null;
  return password === confirmPassword ? null : { passwordMismatch: true };
};

export {
  passwordStrengthValidator,
  passwordsMatchValidator
};
//# sourceMappingURL=chunk-OGLTOXBS.js.map
