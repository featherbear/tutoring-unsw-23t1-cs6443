import simpleEncryptor from 'simple-encryptor'
import crypto from 'crypto'

// const crypt = simpleEncryptor.createEncryptor(crypto.randomBytes(64).toString())
const crypt = simpleEncryptor.createEncryptor("1234567890123456")

export default crypt