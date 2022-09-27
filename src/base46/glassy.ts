const colors = require('base46.colors').dracula
const M: any = {
  NvimTreeWinSeparator: { fg: colors.one_bg2, bg: 'NONE' },
  TelescopeResultsTitle: { fg: colors.black, bg: colors.blue },
}
const hl_groups = [
  'NormalFloat',
  'Normal',
  'Folded',
  'NvimTreeNormal',
  'NvimTreeNormalNC',
  'NvimTreeCursorLine',
  'TelescopeNormal',
  'TelescopePrompt',
  'TelescopeResults',
  'TelescopePromptNormal',
  'TelescopePromptPrefix',
  'CursorLine',
  'Pmenu',
]
for (const [_, groups] of ipairs(hl_groups)) {
  M[groups] = { bg: 'NONE' }
}
M.TelescopeBorder = { fg: colors.grey, bg: 'NONE' }
M.TelescopePromptBorder = { fg: colors.grey, bg: 'NONE' }
export default M
