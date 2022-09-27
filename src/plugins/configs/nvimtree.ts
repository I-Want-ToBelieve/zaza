export default () => {
  const [has_nvimtree, nvimtree] = pcall<Parameters<typeof require>, NeovimPluginSetup>(
    require,
    'nvim-tree'
  )

  if (!has_nvimtree) {
    return
  }

  ;(require('plugins.load_highlight') as typeof import('../load_highlight')).load_highlight(
    'nvimtree'
  )

  const DEFAULT_MAPPINGS = [
    {
      key: ['<CR>', 'o', '<2-LeftMouse>'],
      action: 'edit',
      desc: 'open a file or folder; root will cd to the above directory',
    },
    // {
    //   key: '<C-e>',
    //   action: 'edit_in_place',
    //   desc: 'edit the file in place, effectively replacing the tree explorer',
    // },
    { key: 'O', action: 'edit_no_picker', desc: 'same as (edit) with no window picker' },
    {
      key: ['<C-]>', '<2-RightMouse>'],
      action: 'cd',
      desc: 'cd in the directory under the cursor',
    },
    { key: '<C-v>', action: 'vsplit', desc: 'open the file in a vertical split' },
    { key: '<C-x>', action: 'split', desc: 'open the file in a horizontal split' },
    { key: '<C-t>', action: 'tabnew', desc: 'open the file in a new tab' },
    {
      key: '<',
      action: 'prev_sibling',
      desc: 'navigate to the previous sibling of current file/directory',
    },
    {
      key: '>',
      action: 'next_sibling',
      desc: 'navigate to the next sibling of current file/directory',
    },
    { key: 'P', action: 'parent_node', desc: 'move cursor to the parent directory' },
    { key: '<BS>', action: 'close_node', desc: 'close current opened directory or parent' },
    {
      key: '<Tab>',
      action: 'preview',
      desc: 'open the file as a preview (keeps the cursor in the tree)',
    },
    {
      key: 'K',
      action: 'first_sibling',
      desc: 'navigate to the first sibling of current file/directory',
    },
    {
      key: 'J',
      action: 'last_sibling',
      desc: 'navigate to the last sibling of current file/directory',
    },
    {
      key: 'I',
      action: 'toggle_git_ignored',
      desc: 'toggle visibility of files/folders hidden via |git.ignore| option',
    },
    {
      key: 'H',
      action: 'toggle_dotfiles',
      desc: 'toggle visibility of dotfiles via |filters.dotfiles| option',
    },
    {
      key: 'U',
      action: 'toggle_custom',
      desc: 'toggle visibility of files/folders hidden via |filters.custom| option',
    },
    { key: 'R', action: 'refresh', desc: 'refresh the tree' },
    {
      key: 'a',
      action: 'create',
      desc: 'add a file; leaving a trailing `/` will add a directory',
    },
    { key: 'd', action: 'remove', desc: 'delete a file (will prompt for confirmation)' },
    { key: 'D', action: 'trash', desc: 'trash a file via |trash| option' },
    { key: 'r', action: 'rename', desc: 'rename a file' },
    {
      key: '<C-r>',
      action: 'full_rename',
      desc: 'rename a file and omit the filename on input',
    },
    { key: 'x', action: 'cut', desc: 'add/remove file/directory to cut clipboard' },
    { key: 'c', action: 'copy', desc: 'add/remove file/directory to copy clipboard' },
    {
      key: 'p',
      action: 'paste',
      desc: 'paste from clipboard; cut clipboard has precedence over copy; will prompt for confirmation',
    },
    { key: 'y', action: 'copy_name', desc: 'copy name to system clipboard' },
    { key: 'Y', action: 'copy_path', desc: 'copy relative path to system clipboard' },
    {
      key: 'gy',
      action: 'copy_absolute_path',
      desc: 'copy absolute path to system clipboard',
    },
    { key: '[e', action: 'prev_diag_item', desc: 'go to next diagnostic item' },
    { key: '[c', action: 'prev_git_item', desc: 'go to next git item' },
    { key: ']e', action: 'next_diag_item', desc: 'go to prev diagnostic item' },
    { key: ']c', action: 'next_git_item', desc: 'go to prev git item' },
    {
      key: '-',
      action: 'dir_up',
      desc: 'navigate up to the parent directory of the current file/directory',
    },
    {
      key: 's',
      action: 'system_open',
      desc: 'open a file with default system application or a folder with default file manager, using |system_open| option',
    },
    {
      key: 'f',
      action: 'live_filter',
      desc: 'live filter nodes dynamically based on regex matching.',
    },
    { key: 'F', action: 'clear_live_filter', desc: 'clear live filter' },
    { key: 'q', action: 'close', desc: 'close tree window' },
    { key: 'W', action: 'collapse_all', desc: 'collapse the whole tree' },
    {
      key: 'E',
      action: 'expand_all',
      desc: 'expand the whole tree, stopping after expanding |actions.expand_all.max_folder_discovery| folders; this might hang neovim for a while if running on a big folder',
    },
    {
      key: 'S',
      action: 'search_node',
      desc: 'prompt the user to enter a path and then expands the tree to match the path',
    },
    {
      key: '.',
      action: 'run_file_command',
      desc: 'enter vim command mode with the file the cursor is on',
    },
    {
      key: '<C-k>',
      action: 'toggle_file_info',
      desc: 'toggle a popup with file infos about the file under the cursor',
    },
    { key: 'g?', action: 'toggle_help', desc: 'toggle help' },
    { key: 'm', action: 'toggle_mark', desc: 'Toggle node in bookmarks' },
    {
      key: 'bmv',
      action: 'bulk_move',
      desc: 'Move all bookmarked nodes into specified location',
    },
  ]

  const options = {
    filters: {
      dotfiles: false,
      exclude: ['node_modules', vim.fn.stdpath('config') + '/lua/custom'],
    },
    disable_netrw: true,
    hijack_netrw: true,
    open_on_setup: true,
    ignore_ft_on_setup: ['alpha'],
    hijack_cursor: true,
    hijack_unnamed_buffer_when_opening: false,
    update_cwd: true,
    update_focused_file: { enable: true, update_cwd: false },
    view: {
      adaptive_size: true,
      side: 'left',
      width: 35,
      hide_root_folder: false,
      mappings: {
        custom_only: true,
        list: DEFAULT_MAPPINGS,
      },
    },
    git: { enable: false, ignore: true },
    filesystem_watchers: { enable: true },
    actions: { open_file: { resize_window: true } },
    renderer: {
      highlight_git: true,
      highlight_opened_files: 'none',
      indent_markers: { enable: false },
      icons: {
        show: { file: true, folder: true, folder_arrow: true, git: false },
        glyphs: {
          default: '',
          symlink: '',
          folder: {
            default: '',
            empty: '',
            empty_open: '',
            open: '',
            symlink: '',
            symlink_open: '',
            arrow_open: '',
            arrow_closed: '',
          },
          git: {
            unstaged: '✗',
            staged: '✓',
            unmerged: '',
            renamed: '➜',
            untracked: '★',
            deleted: '',
            ignored: '◌',
          },
        },
      },
    },
  }
  vim.g.nvim_tree_disable_keybindings
  vim.g.nvimtree_side = options.view.side
  nvimtree.setup(options)
}
