import bcrypt from 'bcrypt'
// import { HashComparer, Hasher } from '../../data/protocols/cryptography'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  constructor (private readonly salt: number) {}

  async encrypt (plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

  async hash (plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

  async compare (plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest)
  }
}
