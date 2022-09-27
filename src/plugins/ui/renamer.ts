export const open = () => {
  const currName = vim.fn.expand('<cword>') + ' '
  const win = require('plenary.popup').create(currName, {
    title: 'Renamer',
    style: 'minimal',
    borderchars: ['─', '│', '─', '│', '╭', '╮', '╯', '╰'],
    relative: 'cursor',
    borderhighlight: 'RenamerBorder',
    titlehighlight: 'RenamerTitle',
    focusable: true,
    width: 25,
    height: 1,
    line: 'cursor+2',
    col: 'cursor-1',
  })
  const map_opts = { noremap: true, silent: true }
  vim.cmd('normal w')
  vim.cmd('startinsert')
  vim.api.nvim_buf_set_keymap(0, 'i', '<Esc>', '<cmd>stopinsert | q!<CR>', map_opts)
  vim.api.nvim_buf_set_keymap(0, 'n', '<Esc>', '<cmd>stopinsert | q!<CR>', map_opts)
  vim.api.nvim_buf_set_keymap(
    0,
    'i',
    '<CR>',
    "<cmd>stopinsert | lua require'plugins.ui.renamer'.apply(" +
      (currName + (',' + (win + ')<CR>'))),
    map_opts
  )
  vim.api.nvim_buf_set_keymap(
    0,
    'n',
    '<CR>',
    `<cmd>stopinsert | lua require'plugins.ui.renamer'.apply("${currName}, ${win}")<CR>`,
    map_opts
  )
}
export const apply = (curr: any, win: number) => {
  const newName: any[] = vim.trim((vim.fn.getline as any)('.'))
  vim.api.nvim_win_close(win, true)
  if (newName.length > 0 && newName !== curr) {
    const lsp = vim.lsp as any
    const params = lsp.util.make_position_params()
    params.newName = newName
    lsp.buf_request(0, 'textDocument/rename', params)
  }
}
