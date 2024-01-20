module.exports = {
  plugins: [
    require('prettier-plugin-packagejson'),
    require('@trivago/prettier-plugin-sort-imports')
  ],
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  endOfLine: 'lf',
}
