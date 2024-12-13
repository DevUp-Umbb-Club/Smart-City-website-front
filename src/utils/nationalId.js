export default function isValidNationalId(value) {
  const numericRegex = /^[0-9]+$/;
  return numericRegex.test(value);
}
