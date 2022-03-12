export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Parametro não informado: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
