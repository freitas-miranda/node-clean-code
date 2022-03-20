import { AccountModel } from '../../domain/models/account'
import { AddAccountModel } from '../../domain/usecases/add-account'

export interface AddAccountRespository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
