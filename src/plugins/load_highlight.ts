const merge_tb = (table1: any, table2: any) => {
  return vim.tbl_deep_extend('force', table1, table2)
}
const extend_default_hl = (highlights: any) => {
  const glassy = require('base46.glassy')
  if (vim.g.transparency || true) {
    for (const [key, value] of pairs(glassy)) {
      if (highlights[key]) {
        highlights[key] = merge_tb(highlights[key], value)
      }
    }
  }
}
export const load_highlight = (name: string) => {
  if (type(name) === 'string') {
    const group: LuaTable<any, any> = require('base46.integrations.' + name).default
    extend_default_hl(group)
    for (const [hl, col] of pairs(group)) {
      vim.api.nvim_set_hl(0, hl, col)
    }
  }
}
