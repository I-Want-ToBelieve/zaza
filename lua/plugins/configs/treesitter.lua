--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
has_treesitter, treesitter = pcall(require, "nvim-treesitter.configs")
if has_treesitter then
    treesitter.setup({ensure_installed = {
        "lua",
        "typescript",
        "javascript",
        "tsx",
        "json",
        "html",
        "css",
        "scss",
        "rust"
    }, highlight = {enable = true, use_languagetree = true}, indent = {enable = true}})
end
