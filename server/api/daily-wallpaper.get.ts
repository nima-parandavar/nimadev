export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { unsplashAPI } = useRuntimeConfig(event)

  try {
    const response = await $fetch<API>("https://api.unsplash.com/photos/random", {
      method: 'GET',
      params: {
        orientation: 'landscape'
      },
      headers: {
        'Accept-Version': 'v1',
        'Authorization': `Client-ID ${unsplashAPI}`
      }
    })
    console.log(response)
    return response
  } catch {
    const response = await $fetch<API>("https://bing.biturl.top/", {
      method: 'GET',
      params: {
        format: 'json',
        index: 0,
        mkt: 'fa-IR',
        resolution: 1920
      },

    })
    return response
  }

})

interface API {
  start_date: string,
  end_date: string,
  url: string,
  copyright: string,
  copyright_link: string
}