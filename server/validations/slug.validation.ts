export default function (value: string) {
  const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
  return regex.test(value)
}