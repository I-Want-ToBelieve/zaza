--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local function merge_tb(table1, table2)
    return vim.tbl_deep_extend("force", table1, table2)
end
local function extend_default_hl(highlights)
    local glassy = require("base46.glassy")
    if vim.g.transparency or true then
        for key, value in pairs(glassy) do
            if highlights[key] then
                highlights[key] = merge_tb(highlights[key], value)
            end
        end
    end
end
____exports.load_highlight = function(name)
    if type(name) == "string" then
        local group = require("base46.integrations." .. name).default
        extend_default_hl(group)
        for hl, col in pairs(group) do
            vim.api.nvim_set_hl(0, hl, col)
        end
    end
end
return ____exports
