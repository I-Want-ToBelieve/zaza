export default () => {
  const [present, gitsigns] = pcall(require, 'gitsigns')
  if (!present) {
    return
  }
  const options = {
    signs: {
      add: { hl: 'DiffAdd', text: '│', numhl: 'GitSignsAddNr' },
      change: { hl: 'DiffChange', text: '│', numhl: 'GitSignsChangeNr' },
      delete: { hl: 'DiffDelete', text: '', numhl: 'GitSignsDeleteNr' },
      topdelete: { hl: 'DiffDelete', text: '‾', numhl: 'GitSignsDeleteNr' },
      changedelete: { hl: 'DiffChangeDelete', text: '~', numhl: 'GitSignsChangeNr' },
    },
  }
  gitsigns.setup(options)
}
