import Cache from '../utils/cache'

const getPath = topic => `https://www.reddit.com/r/${topic}.json`

const getTopic = async topic => {
  const cachedResponse = Cache.get(topic)
  if (cachedResponse) return cachedResponse

  const response = await fetch(getPath(topic))
  const parsedResponse = await response.json()
  Cache.set(topic, parsedResponse)

  return parsedResponse
}

export default getTopic
