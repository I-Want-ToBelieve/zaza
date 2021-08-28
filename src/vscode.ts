/**
 * @see https://github.com/asvetliakov/vscode-neovim#vim-commentary
 */
if (vim.g.is_vscode) {
  vim.cmd("exec 'source' '$HOME/.config/nvim/vim/vscode.vim'")
} else {
  vim.cmd("exec 'source' '$HOME/.config/nvim/vim/notvscode.vim'")
}
