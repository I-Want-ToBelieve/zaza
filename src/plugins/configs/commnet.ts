export default () => {
  const [present, nvim_comment] = pcall(require, 'Comment')

  if (!present) {
    return
  }
  nvim_comment.setup({})
}
