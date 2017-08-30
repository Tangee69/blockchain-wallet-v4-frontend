import { isEmpty } from 'ramda'
import bip39 from 'bip39'
import { isNumeric, isEmail, isGuid } from 'services/ValidationHelper'
import { parse } from 'libphonenumber-js'

const required = value => value ? undefined : 'Required'

const validNumber = value => isNumeric(value) ? undefined : 'Invalid number'

const requiredNumber = value => isNumeric(value) && value > 0 ? undefined : 'Invalid number'

const validEmail = value => isEmail(value) ? undefined : 'Invalid email address'

const validMmemonic = value => bip39.validateMnemonic(value) ? undefined : 'Invalid passphrase'

const validWalletId = value => isGuid(value) ? undefined : 'Invalid wallet identifier'

const validMobileNumber = value => !isEmpty(parse(value)) ? undefined : 'Invalid mobile number'

export { required, requiredNumber, validNumber, validEmail, validMmemonic, validWalletId, validMobileNumber }
