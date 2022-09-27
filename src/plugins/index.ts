import * as utils from '@zaza/utils'

const is_vscode = vim.g.is_vscode
const can_load = () => !vim.g.is_vscode

const [has_packer, packer] = pcall(require, 'packer') as [boolean, Packer]

if (has_packer) {
  vim.cmd('packadd packer.nvim')

  packer.init((require('packages') as typeof import('../packages')).packer_init_config)

  const use = utils.formal_fn(packer.use)

  /**
   * @see https://github.com/wbthomason/packer.nvim/issues/432
   * @see https://github.com/wbthomason/packer.nvim#compiling-lazy-loaders
   * If you use a function value for config or setup keys in any plugin specifications, it must not have any upvalues (i.e. captures)
   */
  use('nvim-lua/plenary.nvim', {
    module: 'plenary',
  })

  // Is using a standard Neovim install, i.e. built from source or using a
  // provided appimage.
  use('lewis6991/impatient.nvim')

  use('MunifTanjim/nui.nvim', {
    disable: is_vscode,
    cond: can_load,
  })

  // Packer can manage itself
  use('wbthomason/packer.nvim', {
    cmd: (require('plugins.cmds') as typeof import('./cmds')).packer_cmds,
    module: 'packer',
    config () {
      require('plugins.index')
    },
  })

  use('rcarriga/nvim-notify', {
    disable: is_vscode,
    cond: can_load,
    module: 'notify',
  })

  use('backtolife2021/nvim-semantic-tokens', {
    disable: is_vscode,
    cond: can_load,
    module: 'nvim-semantic-tokens',
    as: 'nvim-semantic-tokens',
    opt: false,
    config () {
      require('plugins.configs.semantic_tokens')
    },
  })

  // use('NvChad/extensions', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   module: ['telescope', 'nvchad'],
  // })
  // use('NvChad/base46', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   as: 'dracula',
  //   config () {
  //     const [ok, base46] = pcall(require, 'base46')

  //     if (ok) {
  //       base46.load_theme()
  //     }
  //   },
  // })
  // use('NvChad/ui', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   after: 'dracula',
  //   config () {
  //     const [present, nvchad_ui] = pcall(require, 'nvchad_ui')

  //     if (present) nvchad_ui.setup()
  //   },
  // })

  use('dracula/vim', {
    disable: is_vscode,
    cond: can_load,
    as: 'dracula',
    config () {
      vim.cmd('colorscheme dracula')
      vim.cmd('hi! link LspParameter DraculaOrangeItalic')
      vim.cmd('hi! link LspVariableReadOnly DraculaPurple')
      vim.cmd('hi! link LspFunction DraculaGreen')
      vim.cmd('hi! link LspMember DraculaGreen')
      // vim.cmd('hi! link LspNamespace DraculaCyan')
      // vim.cmd('hi! link LspNamespaceDeclaration DraculaCyan')
      vim.cmd('hi! link LspProperty  Identifier')
      vim.cmd('hi! link LspEnumMember Identifier')
      // vim.cmd('hi! link LspClass DraculaCyan')
      vim.cmd('hi! link LspOperator DraculaPink')
      vim.cmd('hi! link @constructor.imported Identifier')
      vim.cmd('hi! link @namespace.imported Identifier')
      vim.cmd('hi! link @namespace.exported Identifier')
      vim.cmd('hi! link @variable.imported.specifier Identifier')
      vim.cmd('hi! link @operator.module DraculaPurple')
      // vim.cmd('hi! link @constructor.jsx DraculaCyanItalic')
      vim.cmd('hi! link @field Identifier')
    },
  })

  use('nvim-treesitter/nvim-treesitter', {
    disable: is_vscode,
    cond: can_load,
    module: 'nvim-treesitter',
    run: ':TSUpdate',
    setup () {
      ;(require('lazy_load') as typeof import('./lazy_load')).on_file_open(
        'nvim-treesitter'
      )
    },
    config () {
      require('plugins.configs.treesitter')
    },
  })

  use('nvim-treesitter/playground', {
    disable: is_vscode,
    cond: can_load,
  })

  // use('icedman/nvim-textmate', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   config () {
  //     const [has_nvim_textmate, nvim_textmate] = pcall<
  //       Parameters<typeof require>,
  //       NeovimPluginSetup
  //     >(require, 'nvim-textmate')

  //     if (!has_nvim_textmate || typeof nvim_textmate === 'string') return null

  //     nvim_textmate.setup({
  //       quick_load: true,
  //       theme_name: 'Dracula',
  //       override_colorscheme: true,
  //       debug_scopes: true,
  //     })
  //   },
  // })

  use('williamboman/mason.nvim', {
    disable: is_vscode,
    cond: can_load,
    module: 'mason',
    cmd: (require('plugins.cmds') as typeof import('./cmds')).mason_cmds,
    config () {
      require('plugins.configs.mason')
    },
  })

  use('jose-elias-alvarez/null-ls.nvim', {
    disable: is_vscode,
    cond: can_load,
    module: 'null-ls',
    config () {
      require('null-ls').setup()
    },
  })

  /**
   * @see https://github.com/neovim/nvim-lspconfig
   * @see https://github.com/NvChad/NvChad/blob/c5fe1f711e/lua/plugins/init.lua#L116
   */
  use('neovim/nvim-lspconfig', {
    disable: is_vscode,
    cond: can_load,
    opt: true,
    after: 'nvim-semantic-tokens',
    setup () {
      ;(require('lazy_load') as typeof import('./lazy_load')).on_file_open('nvim-lspconfig')
    },
    config () {
      require('plugins.configs.lspconfig').default()
    },
  })

  use('williamboman/mason-lspconfig.nvim', {
    disable: is_vscode,
    cond: can_load,
    after: ['nvim-lspconfig', 'mason.nvim'],
    config () {
      require('mason-lspconfig').setup({
        ensure_installed: [
          'sumneko_lua',
          'rust_analyzer',
          'tsserver',
          'jsonls',
          'html',
          'cssls',
        ],
        automatic_installation: true,
      })
    },
  })

  use('jayp0521/mason-null-ls.nvim', {
    disable: is_vscode,
    cond: can_load,
    after: ['null-ls.nvim', 'mason.nvim'],
    config () {
      require('mason-null-ls').setup({
        ensure_installed: ['stylua', 'eslint_d', 'jq', 'prettier'],
        automatic_installation: true,
      })
      const null_ls = require('null-ls')
      require('mason-null-ls').setup_handlers({
        1: (source_name: string) => {},
        stylua () {
          null_ls.register(null_ls.builtins.formatting.stylua)
        },
        jq () {
          null_ls.register(null_ls.builtins.formatting.jq)
        },
        eslint_d () {
          null_ls.register(null_ls.builtins.formatting.eslint_d)
        },
        prettier () {
          null_ls.register(null_ls.builtins.formatting.prettier)
        },
      })
    },
  })

  use('nvim-telescope/telescope.nvim', {
    disable: is_vscode,
    cond: can_load,
    module: 'telescope',
    cmd: 'Telescope',
    config () {
      require('plugins.configs.telescope')
    },
    setup () {
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'telescope'
      )
    },
  })

  use('numToStr/FTerm.nvim', {
    disable: is_vscode,
    cond: can_load,
    config () {
      require('plugins.configs.fterm')
    },
    setup () {
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'fterm'
      )
    },
  })

  use('backtolife2021/size-matters.nvim', {
    disable: is_vscode,
    cond: can_load,
    config () {
      const is_gui = () => vim.g.neovide || vim.g.goneovim || vim.g.nvui || vim.g.gnvim
      if (is_gui()) {
        ;(require('size-matters') as NeovimPluginSetup).setup({
          default_mappings: true,
          step_size: 1, // font resize step size
          notifications: true, // default value is true if notify is installed else false
          reset_font: vim.api.nvim_get_option('guifont'), // Font loaded when using the reset cmd / shortcut
        })
      }
    },
  })

  use('goolord/alpha-nvim', {
    disable: is_vscode,
    cond: can_load,
    config () {
      require('plugins.configs.alpha').default()
    },
  })

  use('kyazdani42/nvim-tree.lua', {
    disable: is_vscode,
    cond: can_load,
    cmd: ['NvimTreeToggle', 'NvimTreeFocus'],
    ft: 'alpha',
    config () {
      require('plugins.configs.nvimtree').default()
    },
    setup () {
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'nvimtree'
      )
    },
  })

  use('kyazdani42/nvim-web-devicons', {
    disable: is_vscode,
    cond: can_load,
    after: 'dracula',
    module: 'nvim-web-devicons',
    config () {
      require('plugins.configs.web_devicons')
    },
  })

  use('lukas-reineke/indent-blankline.nvim', {
    disable: is_vscode,
    cond: can_load,
    opt: true,
    config () {
      require('plugins.configs.indent_blankline').default()
    },
    setup () {
      ;(require('lazy_load') as typeof import('./lazy_load')).on_file_open(
        'indent-blankline.nvim'
      )
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'indent_blankline'
      )
    },
  })

  // use('akinsho/bufferline.nvim', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   after: 'nvim-web-devicons',
  //   setup () {
  //     const zaza = require("lua_modules.@zaza.core.dist.index").default as typeof Zaza
  //     const mappings = require('mappings').default as typeof import('../mappings')
  //     const keys = mappings.plugins.bufferline

  //     zaza.keymaps.set([
  //       {
  //         lhs: keys.next_buffer,
  //         rhs: ':BufferLineCycleNext <CR>',
  //       },
  //       {
  //         lhs: keys.prev_buffer,
  //         rhs: ':BufferLineCyclePrev <CR>',
  //       },
  //     ])
  //   },
  //   config () {},
  // })

  // use('nvim-lualine/lualine.nvim', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   requires: [{ 1: 'kyazdani42/nvim-web-devicons', opt: true }],
  //   config () {
  //     ;(require('lualine') as NeovimPluginSetup).setup({
  //       options: {
  //         theme: 'dracula',
  //       },
  //     })
  //   },
  // })

  use('lewis6991/gitsigns.nvim', {
    disable: true,
    cond: can_load,
    opt: true,
    ft: 'gitcommit',
    setup () {
      vim.api.nvim_create_autocmd(['BufRead'], {
        group: vim.api.nvim_create_augroup('GitSignsLazyLoad', { clear: true }),
        callback () {
          vim.fn.system('git rev-parse ' + vim.fn.expand('%:p:h'))
          if (vim.v.shell_error === 0) {
            vim.api.nvim_del_augroup_by_name('GitSignsLazyLoad')
            vim.schedule(() => {
              require('packer').loader('gitsigns.nvim')
            })
          }
        },
      })
    },
    config () {
      require('plugins.configs.gitsigns_').default()
    },
  })

  //  load luasnips + cmp related in insert mode only

  use('rafamadriz/friendly-snippets', {
    disable: is_vscode,
    cond: can_load,
    event: 'InsertEnter',
  })

  use('L3MON4D3/LuaSnip', {
    disable: is_vscode,
    cond: can_load,
    wants: 'friendly-snippets',
    after: 'nvim-cmp',
    config () {
      require('plugins.configs.luasnip').default()
    },
  })

  use('hrsh7th/nvim-cmp', {
    disable: is_vscode,
    cond: can_load,
    module: 'cmp',
    after: 'friendly-snippets',
    config () {
      require('plugins.configs.cmp_').default()
    },
  })
  use('saadparwaiz1/cmp_luasnip', { disable: is_vscode, cond: can_load, after: 'LuaSnip' })
  use('hrsh7th/cmp-nvim-lua', { disable: is_vscode, cond: can_load, after: 'cmp_luasnip' })
  use('hrsh7th/cmp-nvim-lsp', { disable: is_vscode, cond: can_load, after: 'cmp-nvim-lua' })
  use('hrsh7th/cmp-buffer', { disable: is_vscode, cond: can_load, after: 'cmp-nvim-lsp' })
  use('hrsh7th/cmp-path', { disable: is_vscode, cond: can_load, after: 'cmp-buffer' })
  use('hrsh7th/cmp-cmdline', { disable: is_vscode, cond: can_load, after: 'cmp-path' })

  use('VonHeikemen/searchbox.nvim', {
    disable: is_vscode,
    cond: can_load,
    requires: ['MunifTanjim/nui.nvim'],
    config () {
      vim.keymap.set('n', '<leader>s', ':SearchBoxIncSearch<CR>')
      vim.keymap.set('n', '<C-f>', ':SearchBoxIncSearch<CR>')
      vim.keymap.set('x', '<leader>s', ':SearchBoxIncSearch visual_mode=true<CR>')
      vim.keymap.set('x', '<C-f>', ':SearchBoxIncSearch visual_mode=true<CR>')
    },
  })

  use('windwp/nvim-autopairs', {
    disable: is_vscode,
    cond: can_load,
    after: 'nvim-cmp',
    config () {
      require('plugins.configs.autopairs').default()
    },
  })

  use('numToStr/Comment.nvim', {
    disable: is_vscode,
    cond: can_load,
    module: 'Comment',
    keys: ['gc', 'gb'],
    config () {
      require('plugins.configs.commnet').default()
    },
    setup () {
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'comment'
      )
    },
  })

  use('NvChad/nvim-colorizer.lua', {
    disable: is_vscode,
    cond: can_load,
    opt: true,
    setup () {
      ;(require('lazy_load') as typeof import('./lazy_load')).on_file_open(
        'nvim-colorizer.lua'
      )
    },
    config () {
      require('plugins.configs.colorizer_').default()
    },
  })

  use('folke/which-key.nvim', {
    disable: is_vscode,
    cond: can_load,
    module: 'which-key',
    keys: ['<leader>', '"', "'", '`'],
    config () {
      require('plugins.configs.whichkey').default()
    },
    setup () {
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'whichkey'
      )
    },
  })

  use('petertriho/nvim-scrollbar', {
    disable: is_vscode,
    cond: can_load,
    config () {
      require('scrollbar').setup()
    },
  })

  use('backtolife2021/antovim', {
    event: 'BufRead',
  })

  use('Mephistophiles/surround.nvim', {
    event: 'BufRead',
    config () {
      ;(require('surround') as Surround).setup({ mappings_style: 'surround' })
    },
  })
}
