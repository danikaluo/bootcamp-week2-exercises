const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ userId }) => ({
  id: casual.uuid,
  userId,
  des: casual.description,  
  postedAt: casual.moment,
  likes: casual.integer(from = 0, to = 1000)
}))


const postData = []

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  postData.push(casual.post({ userId }))
}

module.exports = postData
