/**
 * @see https://github.com/NvChad/NvChad/blob/main/lua/core/lazy_load.lua
 */

const autocmd = vim.api.nvim_create_autocmd

export const lazy_load = (tb: {
  events: any
  augroup_name: any
  condition: () => any
  plugin: string
}) => {
  autocmd(tb.events, {
    group: vim.api.nvim_create_augroup(tb.augroup_name, {}),
    callback: function () {
      if (tb.condition()) {
        vim.api.nvim_del_augroup_by_name(tb.augroup_name)
        if (tb.plugin !== 'nvim-treesitter') {
          vim.defer_fn(function () {
            ;(require('packer') as Packer).loader(tb.plugin)
            if (tb.plugin === 'nvim-lspconfig') {
              vim.cmd('silent! do FileType')
            }
          }, 0)
        } else {
          ;(require('packer') as Packer).loader(tb.plugin)
        }
      }
    },
  })
}

export default lazy_load

export const on_file_open = (plugin_name: string) => {
  lazy_load({
    events: ['BufRead', 'BufWinEnter', 'BufNewFile'],
    augroup_name: 'BeLazyOnFileOpen' + plugin_name,
    plugin: plugin_name,
    condition: () => {
      const file = vim.fn.expand('%')
      return file !== 'NvimTree_1' && file !== '[packer]' && file !== ''
    },
  })
}

export const gitsigns = () => {
  autocmd(['BufRead'], {
    group: vim.api.nvim_create_augroup('GitSignsLazyLoad', { clear: true }),
    callback: function () {
      vim.fn.system('git rev-parse ' + vim.fn.expand('%:p:h'))
      if (vim.v.shell_error === 0) {
        vim.api.nvim_del_augroup_by_name('GitSignsLazyLoad')
        vim.schedule(function () {
          ;(require('packer') as Packer).loader('gitsigns.nvim')
        })
      }
    },
  })
}
