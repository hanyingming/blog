const config = {}
if (process.env.NODE_ENV === 'production') {
  config.serverUrl = 'http://192.168.1.105:8081/'
} else {
  config.serverUrl = 'http://192.168.1.105:8081/'
}
export default config
