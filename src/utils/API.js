import Cache from './cache'

const getPath = topic => `https://www.reddit.com/r/${topic}.json`

const fetchPost = async topic => {
  if (Cache.isValid(topic))
    return Cache.get(topic)

  const response = await fetch(getPath(topic))
  const parsedResponse = await response.json()
  Cache.set(topic, parsedResponse)
  return parsedResponse
}

export default fetchPost
