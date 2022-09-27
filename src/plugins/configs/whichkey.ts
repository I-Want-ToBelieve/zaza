export default () => {
  const [present, wk] = pcall(require, 'which-key')
  if (!present) {
    return
  }
  const options = {
    icons: { breadcrumb: '»', separator: '  ', group: '+' },
    popup_mappings: { scroll_down: '<c-d>', scroll_up: '<c-u>' },
    window: { border: 'none' },
    layout: { spacing: 6 },
    hidden: ['<silent>', '<cmd>', '<Cmd>', '<CR>', 'call', 'lua', '^:', '^ '],
    triggers_blacklist: { i: ['j', 'k'], v: ['j', 'k'] },
  }
  wk.setup(options)
}
