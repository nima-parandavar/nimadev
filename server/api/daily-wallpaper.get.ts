export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const response = await $fetch<API>("https://bing.biturl.top/", {
    method: 'GET',
    query: query
  })
  return response
})

interface API {
  start_date: string,
  end_date: string,
  url: string,
  copyright: string,
  copyright_link: string
}