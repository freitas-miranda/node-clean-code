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
