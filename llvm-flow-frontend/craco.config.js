/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.json',
      },
    },
  ],
}
