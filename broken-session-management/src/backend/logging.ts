import bunyan from 'bunyan'

globalThis.logger = bunyan.createLogger({ name: "Broken Session Demo" })
export default logger
declare global {
    var logger: bunyan
}


