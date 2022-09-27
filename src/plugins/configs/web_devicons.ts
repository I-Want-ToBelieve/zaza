const [has_web_devicons, devicons] = pcall(require, 'nvim-web-devicons')

if (has_web_devicons) {
  const options = { override: require('plugins.icons').web_devicons }

  devicons.setup(options)
}
