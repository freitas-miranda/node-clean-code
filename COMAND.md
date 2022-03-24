## ->> GIT

# Editar as configurações do git
git config --global --edit

# Juntar a alteração atual no último commit
git add .
git commit --amend --no-edit



## ->> NPM

# Criar package.json
npm init -y

# Lint para msgs de commit
npm i -D git-commit-msg-linter

# Adicionar typescript (tsconfig.json)
npm i -D typescript @types/node

# Lint (.eslintrc.json; .eslintignore)
npm install --save-dev typescript@^4 eslint@^7.12.1 eslint-plugin-promise@^5.0.0 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 @typescript-eslint/eslint-plugin@^4.0.1 eslint-config-standard-with-typescript@latest

# Hooks para os comandos do git (.huskyrc.json; tsconfig.json)
npm i -D husky

# Executar o lint apenas nos arquivos alterados (.lintstagedrc.json)
npm i -D lint-staged

# Testes (./node_modules/.bin/jest --init)
npm i -D jest @types/jest ts-jest

# Email validator
npm i validator
npm i -D @types/validator

# Adicionar Encrypter
npm i bcrypt
npm i -D @types/bcrypt

# Adicionar mongodb
npm i mongodb@3.5.1
npm i -D @types/mongodb@3.3.14
npm i -D @shelf/jest-mongodb@1.1.3

npm remove mongodb
npm remove @types/mongodb
npm remove @shelf/jest-mongodb

# Adicionar express
npm i express@4.17.1
npm i -D @types/express@4.17.13

# Adicionar sucrase (Transformar TS em JS)
npm i -D sucrase@3.12.1

# Adicionar supertest (Simular requisições HTTP)
npm i -D supertest@4.0.2
npm i -D @types/supertest@2.0.8

# Adicionar fast-glob (Manipular arquivos)
npm i fast-glob
