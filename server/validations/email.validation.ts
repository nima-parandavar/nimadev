export default function (value: string) {
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return regex.test(value);
}
