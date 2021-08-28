--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local cmd = vim.cmd
local fn = vim.fn
local api = vim.api
local install_path = tostring(fn.stdpath("data")) .. "/site/pack/packer/opt/packer.nvim"
____exports.packer_init_config = {
    display = {
        working_sym = "ﲊ",
        error_sym = "✗ ",
        done_sym = " ",
        removed_sym = " ",
        moved_sym = "",
        open_fn = function()
            local has_packer_util, util = unpack({pcall(require, "packer.util")})
            if has_packer_util then
                return util.float({border = "single"})
            end
            return {}
        end,
        prompt_border = "single"
    },
    git = {clone_timeout = 6000},
    auto_clean = true,
    compile_on_sync = true
}
if fn.empty(fn.glob(install_path)) > 0 then
    api.nvim_set_hl(0, "NormalFloat", {bg = "#1e222a"})
    print("Cloning packer ..")
    fn.system({
        "git",
        "clone",
        "--depth",
        "1",
        "https://github.com/wbthomason/packer.nvim",
        install_path
    })
    cmd("packadd packer.nvim")
    local has_packer, packer = unpack({pcall(require, "packer")})
    if has_packer then
        cmd("packadd packer.nvim")
        packer.init(____exports.packer_init_config)
    end
    require("plugins.index")
    cmd("PackerSync")
    api.nvim_create_autocmd(
        "User",
        {
            pattern = "PackerComplete",
            callback = function()
                vim.cmd("bw | silent! MasonInstallAll")
                require("packer").loader("nvim-treesitter")
            end
        }
    )
end
return ____exports
