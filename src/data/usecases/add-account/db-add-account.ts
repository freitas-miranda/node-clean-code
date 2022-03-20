import { AccountModel, AddAccount, AddAccountModel, AddAccountRespository, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRespository: AddAccountRespository

  constructor (encrypter: Encrypter, addAccountRespository: AddAccountRespository) {
    this.encrypter = encrypter
    this.addAccountRespository = addAccountRespository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.addAccountRespository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}
