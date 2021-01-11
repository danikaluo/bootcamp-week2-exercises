3 tables (Users, Posts, Friends)

Users:
    userId: int
    firstName: string
    lastName: string
    dob: date
    password: string
    bio: string

Posts:
    userId: int
    des: string
    datePosted: date
    likes: int

Friends:
    requestor: userId
    requested: userId
    dateRequested: date
    status: accepted/declined/requested