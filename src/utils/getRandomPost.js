const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const getRandomPost = posts => {
  const randomIndex = getRandomInt(posts.length)
  return posts[randomIndex]
}

export default getRandomPost
