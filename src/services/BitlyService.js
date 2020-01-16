const fetch = require('node-fetch')

class BitlyService {
  async shortenUrl (longUrl) {
    try {
      const params = {
        long_url: longUrl,
        title: 'Linkdrop demo link'
      }
      const bitlyApiUrl = 'https://api-ssl.bitly.com/v4/bitlinks'
      const result = await fetch(bitlyApiUrl, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.BITLY_TOKEN}`
        },
        method: 'POST',
        body: JSON.stringify(params)
      }).then(res => res.json())
      console.log('Got short link: ', result)
      return result.link
    } catch (err) {
      console.error('Error while creating bitly link: ', err)
      return longUrl
    }
  }
}

export default new BitlyService()
