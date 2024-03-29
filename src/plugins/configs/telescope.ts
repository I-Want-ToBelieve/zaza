const [has_telescope, telescope] = pcall<Parameters<typeof require>, NeovimPluginSetup>(
  require,
  'telescope'
)

if (has_telescope) {
  const options = {
    defaults: {
      vimgrep_arguments: [
        'rg',
        '--color=never',
        '--no-heading',
        '--with-filename',
        '--line-number',
        '--column',
        '--smart-case',
      ],
      prompt_prefix: '   ',
      selection_caret: '  ',
      entry_prefix: '  ',
      initial_mode: 'insert',
      selection_strategy: 'reset',
      sorting_strategy: 'ascending',
      layout_strategy: 'horizontal',
      layout_config: {
        horizontal: { prompt_position: 'top', preview_width: 0.55, results_width: 0.8 },
        vertical: { mirror: false },
        width: 0.87,
        height: 0.8,
        preview_cutoff: 120,
      },
      file_sorter: require('telescope.sorters').get_fuzzy_file,
      file_ignore_patterns: ['node_modules'],
      generic_sorter: require('telescope.sorters').get_generic_fuzzy_sorter,
      path_display: ['truncate'],
      winblend: 0,
      border: {},
      borderchars: ['─', '│', '─', '│', '╭', '╮', '╯', '╰'],
      color_devicons: true,
      set_env: { ['COLORTERM']: 'truecolor' },
      file_previewer: require('telescope.previewers').vim_buffer_cat.new,
      grep_previewer: require('telescope.previewers').vim_buffer_vimgrep.new,
      qflist_previewer: require('telescope.previewers').vim_buffer_qflist.new,
      buffer_previewer_maker: require('telescope.previewers').buffer_previewer_maker,
      mappings: { n: { ['q']: require('telescope.actions').close } },
    },
    extensions_list: ['themes', 'terms'],
  }

  telescope.setup(options)

  pcall(function () {
    for (const [_, ext] of ipairs(options.extensions_list)) {
      ;(
        telescope as unknown as { load_extension: (this: void, ext: any) => any }
      ).load_extension(ext)
    }
  })
}
