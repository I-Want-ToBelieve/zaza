;(require('nvim-semantic-tokens') as NeovimPluginSetup).setup({
  preset: 'backtolife',
})
const on_full = require('nvim-semantic-tokens.semantic_tokens').on_full

const lsp = vim.lsp as any
lsp.buf.semantic_tokens_range = (start_pos: any, end_pos: any) => {
  const params = lsp.util.make_given_range_params(start_pos, end_pos)

  lsp.buf_request(
    0,
    'textDocument/semanticTokens/range',
    params,
    vim.lsp.with(on_full, {
      on_token (ctx: any, token: any) {
        vim.notify(token.type + ('.' + table.concat(token.modifiers, '.')))
      },
    })
  )
}
