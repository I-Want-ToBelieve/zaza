const lspSymbol = (name: string, icon: string) => {
  const hl = 'DiagnosticSign' + name
  vim.fn.sign_define(hl, { text: icon, numhl: hl, texthl: hl })
}
lspSymbol('Error', '')
lspSymbol('Info', '')
lspSymbol('Hint', '')
lspSymbol('Warn', '')

vim.diagnostic.config({
  virtual_text: { prefix: '' },
  signs: true,
  underline: true,
  update_in_insert: false,
})
vim.lsp.handlers['textDocument/hover'] = vim.lsp.with(vim.lsp.handlers.hover, {
  border: 'single',
})
vim.lsp.handlers['textDocument/signatureHelp'] = vim.lsp.with(
  vim.lsp.handlers.signature_help,
  { border: 'single', focusable: false, relative: 'cursor' }
)
vim.notify = (msg, log_level) => {
  if (string.match(msg, 'exit code')) {
    return
  }
  if (log_level === vim.log.levels.ERROR) {
    vim.api.nvim_err_writeln(msg)
  } else {
    vim.api.nvim_echo([[msg]], true, {} as any)
  }
}

const win = require('lspconfig.ui.windows')
const _default_opts = win.default_opts
win.default_opts = function (options) {
  const opts = _default_opts(options)
  opts.border = 'single'
  return opts
}
