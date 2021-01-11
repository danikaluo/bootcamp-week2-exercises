const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ user1Id, user2Id }) => ({
  id: casual.uuid,
  followerId: user1Id,
  followingId: user2Id,  
  requestedAt: casual.moment,
  status: casual.string,
}))


const friendData = []

for (let i = 0; i < 20; ++i) {
  const user1Id = casual.random_element(userData).id
  const user2Id = casual.random_element(userData).id
  friendData.push(casual.friend({ user1Id, user2Id }))
}

module.exports = friendData
