export default () => {
  const [has_luasnip, luasnip] = pcall<Parameters<typeof require>, Luasnip>(
    require,
    'luasnip'
  )

  if (!has_luasnip) return

  const options = { history: true, updateevents: 'TextChanged,TextChangedI' }
  luasnip.config.set_config(options)
  require('luasnip.loaders.from_vscode').lazy_load({ paths: vim.g.luasnippets_path || '' })
  require('luasnip.loaders.from_vscode').lazy_load()
  vim.api.nvim_create_autocmd('InsertLeave', {
    callback: function () {
      if (
        require('luasnip').session.current_nodes[vim.api.nvim_get_current_buf()] &&
        !require('luasnip').session.jump_active
      ) {
        require('luasnip').unlink_current()
      }
    },
  })
}
