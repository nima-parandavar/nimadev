export default function (filename: string) {
  const ext = filename.split('.').at(-1)
  const now = Date.now().toString()
  const random = Math.floor(Math.random() * 1e6)
  return { filename: `${now}-${random}`, ext }
}