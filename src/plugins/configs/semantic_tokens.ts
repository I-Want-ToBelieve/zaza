;(require('nvim-semantic-tokens') as NeovimPluginSetup).setup({
  preset: 'backtolife',
})
const on_full = require('nvim-semantic-tokens.semantic_tokens').on_full
;(vim.lsp as any).buf.semantic_tokens_range = (start_pos: any, end_pos: any) => {
  const params = (
    vim.lsp as unknown as {
      util: {
        make_given_range_params: (this: void, a: any, b: any) => any
      }
    }
  ).util.make_given_range_params(start_pos, end_pos)
  ;(
    vim.lsp as unknown as {
      buf_request: (this: void, a: any, b: any, c: any, d: any) => any
    }
  ).buf_request(
    0,
    'textDocument/semanticTokens/range',
    params,
    vim.lsp.with(on_full, {
      on_token (this: void, ctx: any, token: any) {
        vim.notify(token.type + ('.' + table.concat(token.modifiers, '.')))
      },
    })
  )
}
