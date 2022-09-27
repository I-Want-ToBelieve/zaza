export default () => {
  const [has_indent_blankline, indent_blankline] = pcall(require, 'indent_blankline')

  if (!has_indent_blankline) return

  const options = {
    indentLine_enabled: 1,
    filetype_exclude: [
      'help',
      'terminal',
      'alpha',
      'packer',
      'lspinfo',
      'TelescopePrompt',
      'TelescopeResults',
      'mason',
      '',
    ],
    buftype_exclude: ['terminal'],
    show_trailing_blankline_indent: false,
    show_first_indent_level: false,
    show_current_context: true,
    show_current_context_start: true,
  }

  indent_blankline.setup(options)
}
