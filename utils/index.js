import { storageKey, apiKey } from './constants.js'
import { apiReq, delay } from './request.js'
import { checkIsStartWithLoad, asyncReq, simpleUploadFile } from './utils.js'
const config = require('./config.js')

export {
  config,
  storageKey,
  apiKey,
  apiReq,
  delay,
  checkIsStartWithLoad,
  asyncReq,
  simpleUploadFile
}
