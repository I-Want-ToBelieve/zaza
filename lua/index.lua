--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
require("global")
require("options")
require("better_move")
require("vscode")
require("neovide")
require("./packages")
vim.defer_fn(
    function()
        pcall(require, "impatient")
    end,
    0
)
local disabled_builtin_plugins = {
    "2html_plugin",
    "getscript",
    "getscriptPlugin",
    "gzip",
    "logipat",
    "netrw",
    "netrwPlugin",
    "netrwSettings",
    "netrwFileHandlers",
    "matchit",
    "tar",
    "tarPlugin",
    "rrhelper",
    "spellfile_plugin",
    "vimball",
    "vimballPlugin",
    "zip",
    "zipPlugin"
}
for ____, plugin in ipairs(disabled_builtin_plugins) do
    vim.g["loaded_" .. plugin] = 1
end
return ____exports
