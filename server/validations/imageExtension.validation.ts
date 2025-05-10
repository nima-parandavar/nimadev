export default function (value: string) {
  const regex = /^.*\.(jpg|jpeg|png|webp)$/
  return regex.test(value)
}