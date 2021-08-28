nnoremap <silent> <leader>lM viw:lua vim.lsp.buf.semantic_tokens_range()<cr>
command! LspInspectTokenCursor execute "norm viw\<esc>" | lua vim.lsp.buf.semantic_tokens_range()

