export default () => {
  const [present, colorizer] = pcall(require, 'colorizer')

  if (!present) {
    return
  }

  const options = {
    filetypes: ['*'],
    user_default_options: {
      RGB: true,
      RRGGBB: true,
      names: false,
      RRGGBBAA: false,
      rgb_fn: false,
      hsl_fn: false,
      css: false,
      css_fn: false,
      mode: 'background',
    },
  }

  colorizer.setup(options)

  vim.defer_fn(() => {
    require('colorizer').attach_to_buffer(0)
  }, 0)
}
