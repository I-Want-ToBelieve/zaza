--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local colors = require("base46.colors").dracula
local M = {NvimTreeWinSeparator = {fg = colors.one_bg2, bg = "NONE"}, TelescopeResultsTitle = {fg = colors.black, bg = colors.blue}}
local hl_groups = {
    "NormalFloat",
    "Normal",
    "Folded",
    "NvimTreeNormal",
    "NvimTreeNormalNC",
    "NvimTreeCursorLine",
    "TelescopeNormal",
    "TelescopePrompt",
    "TelescopeResults",
    "TelescopePromptNormal",
    "TelescopePromptPrefix",
    "CursorLine",
    "Pmenu"
}
for _, groups in ipairs(hl_groups) do
    M[groups] = {bg = "NONE"}
end
M.TelescopeBorder = {fg = colors.grey, bg = "NONE"}
M.TelescopePromptBorder = {fg = colors.grey, bg = "NONE"}
____exports.default = M
return ____exports
