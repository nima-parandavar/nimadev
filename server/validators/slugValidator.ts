export default (value: string) => {
  const reg = /^[a-z0-9]+(-?[a-z0-9])*$/
  return reg.test(value)
}