const { cmd, fn, api } = vim

const install_path = `${fn.stdpath('data')}/site/pack/packer/opt/packer.nvim`

export const packer_init_config = {
  display: {
    working_sym: 'ﲊ',
    error_sym: '✗ ',
    done_sym: ' ',
    removed_sym: ' ',
    moved_sym: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    open_fn: () => {
      /**
       * @see https://github.com/TypeScriptToLua/TypeScriptToLua/pull/1139
       */
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const [has_packer_util, util] = pcall(require, 'packer.util') as [
        boolean,
        {
          float: (this: void, args: any) => any
        }
      ]
      if (has_packer_util) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return util.float({ border: 'single' })
      }

      return {}
    },
    prompt_border: 'single',
  },
  git: {
    clone_timeout: 6000,
  },
  auto_clean: true,
  compile_on_sync: true,
}

if (fn.empty(fn.glob(install_path)) > 0) {
  api.nvim_set_hl(0, 'NormalFloat', { bg: '#1e222a' })

  print('Cloning packer ..')

  fn.system([
    'git',
    'clone',
    '--depth',
    '1',
    'https://github.com/wbthomason/packer.nvim',
    install_path,
  ])

  cmd('packadd packer.nvim')

  // Load all plugins
  const [has_packer, packer] = pcall(require, 'packer') as [boolean, Packer]

  if (has_packer) {
    cmd('packadd packer.nvim')

    packer.init(packer_init_config)
  }

  require('plugins.index')

  cmd('PackerSync')

  api.nvim_create_autocmd('User', {
    pattern: 'PackerComplete',
    callback: function () {
      vim.cmd('bw | silent! MasonInstallAll')
      ;(require('packer') as Packer).loader('nvim-treesitter')
    },
  })
}
