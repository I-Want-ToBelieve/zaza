const [has_mason, mason] = pcall<Parameters<typeof require>, NeovimPluginSetup>(
  require,
  'mason'
)

if (has_mason) {
  vim.api.nvim_create_augroup('_mason', { clear: true })
  vim.api.nvim_create_autocmd('Filetype', {
    pattern: 'mason',
    callback: function () {
      // require('base46').load_highlight('mason')
    },
    group: '_mason',
  })
  const options = {
    ensure_installed: [
      'lua-language-server',
      'typescript-language-server',
      'css-lsp',
      'html-lsp',
      'json-lsp',
      'rust-analyzer',
    ],
    ui: {
      icons: {
        package_pending: ' ',
        package_installed: ' ',
        package_uninstalled: ' ﮊ',
      },
      keymaps: {
        toggle_server_expand: '<CR>',
        install_server: 'i',
        update_server: 'u',
        check_server_version: 'c',
        update_all_servers: 'U',
        check_outdated_servers: 'C',
        uninstall_server: 'X',
        cancel_installation: '<C-c>',
      },
    },
    max_concurrent_installers: 10,
  }
  vim.api.nvim_create_user_command(
    'MasonInstallAll',
    function () {
      vim.cmd('MasonInstall ' + table.concat(options.ensure_installed, ' '))
    },
    {}
  )
  mason.setup(options)
}
