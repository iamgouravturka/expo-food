import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer csMh-KJ9z9IV4A7Bu8MD-INrtMEE6TYy6JH_IibMeG4GAjCT-jt0qgQszMjLMVtuxQ8uTGg3irb4tLcZCNvrcxGKFGvvYbuHnfQJxyij5KhuN7ufT9SBPBY321ZQYHYx'
    }
})