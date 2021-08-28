--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
---
-- @see https ://github.com/NvChad/NvChad/blob/main/lua/core/default_config.lua
____exports.misc = {
    cheatsheet = "<leader>ch",
    close_buffer = "<leader>x",
    copy_whole_file = "<C-a>",
    line_number_toggle = "<leader>n",
    update_nvchad = "<leader>uu",
    new_buffer = "<S-t>",
    new_tab = "<C-t>b",
    save_file = "<C-s>"
}
____exports.insert_nav = {
    backward = "<C-h>",
    end_of_line = "<C-e>",
    forward = "<C-l>",
    next_line = "<C-k>",
    prev_line = "<C-j>",
    beginning_of_line = "<C-a>"
}
____exports.window_nav = {moveLeft = "<C-h>", moveRight = "<C-l>", moveUp = "<C-k>", moveDown = "<C-j>"}
____exports.terminal = {
    esc_termmode = {"jk"},
    esc_hide_termmode = {"JK"},
    pick_term = "<leader>W",
    new_horizontal = "<leader>h",
    new_vertical = "<leader>v",
    new_window = "<leader>w"
}
____exports.plugins = {
    bufferline = {next_buffer = "<TAB>", prev_buffer = "<S-Tab>"},
    comment = {toggle = "<leader>/"},
    float_terminal = {toggle = "<leader>tt"},
    dashboard = {
        bookmarks = "<leader>bm",
        new_file = "<leader>fn",
        open = "<leader>db",
        session_load = "<leader>l",
        session_save = "<leader>s"
    },
    better_escape = {esc_insertmode = {"jk"}},
    nvimtree = {toggle = "<C-n>", focus = "<leader>e"},
    telescope = {
        buffers = "<leader>fb",
        find_files = "<leader>ff",
        find_hiddenfiles = "<leader>fa",
        git_commits = "<leader>cm",
        git_status = "<leader>gt",
        help_tags = "<leader>fh",
        live_grep = "<leader>fw",
        oldfiles = "<leader>fo",
        themes = "<leader>th",
        telescope_media = {media_files = "<leader>fp"}
    }
}
____exports.mappings = {
    plugins = ____exports.plugins,
    terminal = ____exports.terminal,
    window_nav = ____exports.window_nav,
    insert_nav = ____exports.insert_nav,
    misc = ____exports.misc
}
____exports.default = ____exports.mappings
return ____exports
