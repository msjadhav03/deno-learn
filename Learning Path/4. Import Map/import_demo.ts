import * as uuid from 'uuid/mod.ts'
import { ApplicationName, logger } from './utils.ts'
import sum from './sum_module.ts'

logger(ApplicationName)
logger(sum(1, 2))
console.log(uuid.v1.generate())