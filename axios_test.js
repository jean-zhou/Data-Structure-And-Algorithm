async function goFetch(linkObj) {
    let checkUrl = linkObj.url
    let response = await axios.get(checkUrl, {
        proxy: {
            host:'172.18.100.92',
            port: 8080
        },
        timeout: 10000
    })
    .catch( err => {
        console.log(`${checkUrl} error ${err}`)
    })
}