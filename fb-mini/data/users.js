const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  firstName: casual.first_name,
  lastName: casual.last_name,
  dob: casual.date(format = 'YYYY-MM-DD'),
  email: casual.email,
  password: casual.password,
  bio: casual.short_description,  
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
