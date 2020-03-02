const axios = require('axios')

class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                (data)
                    ? resolve(data)
                    : reject(new Error('error'))
            }, 150)
        })
    }

    static async get() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = Ajax