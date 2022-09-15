
async function loginIn(email,password) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    const data = await response.json()
    console.log(data)
    return data
}


module.exports = {
    loginIn
}
