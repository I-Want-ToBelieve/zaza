--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
---
-- @see https ://github.com/NvChad/NvChad/blob/main/lua/core/lazy_load.lua
local autocmd = vim.api.nvim_create_autocmd
____exports.lazy_load = function(tb)
    autocmd(
        tb.events,
        {
            group = vim.api.nvim_create_augroup(tb.augroup_name, {}),
            callback = function()
                if tb:condition() then
                    vim.api.nvim_del_augroup_by_name(tb.augroup_name)
                    if tb.plugin ~= "nvim-treesitter" then
                        vim.defer_fn(
                            function()
                                require("packer").loader(tb.plugin)
                                if tb.plugin == "nvim-lspconfig" then
                                    vim.cmd("silent! do FileType")
                                end
                            end,
                            0
                        )
                    else
                        require("packer").loader(tb.plugin)
                    end
                end
            end
        }
    )
end
____exports.default = ____exports.lazy_load
____exports.on_file_open = function(plugin_name)
    ____exports.lazy_load({
        events = {"BufRead", "BufWinEnter", "BufNewFile"},
        augroup_name = "BeLazyOnFileOpen" .. plugin_name,
        plugin = plugin_name,
        condition = function()
            local file = vim.fn.expand("%")
            return file ~= "NvimTree_1" and file ~= "[packer]" and file ~= ""
        end
    })
end
____exports.gitsigns = function()
    autocmd(
        {"BufRead"},
        {
            group = vim.api.nvim_create_augroup("GitSignsLazyLoad", {clear = true}),
            callback = function()
                vim.fn.system("git rev-parse " .. tostring(vim.fn.expand("%:p:h")))
                if vim.v.shell_error == 0 then
                    vim.api.nvim_del_augroup_by_name("GitSignsLazyLoad")
                    vim.schedule(function()
                        require("packer").loader("gitsigns.nvim")
                    end)
                end
            end
        }
    )
end
return ____exports
