--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local utils = require("lua_modules.@zaza.utils.dist.index")
local is_vscode = vim.g.is_vscode
local function can_load()
    return not vim.g.is_vscode
end
local has_packer, packer = unpack({pcall(require, "packer")})
if has_packer then
    vim.cmd("packadd packer.nvim")
    packer.init(require("packages").packer_init_config)
    local use = utils.formal_fn(packer.use)
    use("nvim-lua/plenary.nvim", {module = "plenary"})
    use("lewis6991/impatient.nvim")
    use(
        "wbthomason/packer.nvim",
        {
            cmd = require("plugins.cmds").packer_cmds,
            module = "packer",
            config = function()
                require("plugins.index")
            end
        }
    )
    use("rcarriga/nvim-notify", {disable = is_vscode, cond = can_load, module = "notify"})
    use(
        "backtolife2021/nvim-semantic-tokens",
        {
            disable = is_vscode,
            cond = can_load,
            module = "nvim-semantic-tokens",
            as = "nvim-semantic-tokens",
            opt = false,
            config = function()
                require("plugins.configs.semantic_tokens")
            end
        }
    )
    use(
        "dracula/vim",
        {
            disable = is_vscode,
            cond = can_load,
            as = "dracula",
            config = function()
                vim.cmd("colorscheme dracula")
                vim.cmd("hi! link LspParameter DraculaOrangeItalic")
                vim.cmd("hi! link LspVariableReadOnly DraculaPurple")
                vim.cmd("hi! link LspFunction DraculaGreen")
                vim.cmd("hi! link LspMember DraculaGreen")
                vim.cmd("hi! link LspProperty  Identifier")
                vim.cmd("hi! link LspEnumMember Identifier")
                vim.cmd("hi! link LspOperator DraculaPink")
                vim.cmd("hi! link @constructor.imported Identifier")
                vim.cmd("hi! link @namespace.imported Identifier")
                vim.cmd("hi! link @namespace.exported Identifier")
                vim.cmd("hi! link @variable.imported.specifier Identifier")
                vim.cmd("hi! link @operator.module DraculaPurple")
                vim.cmd("hi! link @field Identifier")
            end
        }
    )
    use(
        "nvim-treesitter/nvim-treesitter",
        {
            disable = is_vscode,
            cond = can_load,
            module = "nvim-treesitter",
            run = ":TSUpdate",
            setup = function()
                require("plugins.lazy_load").on_file_open("nvim-treesitter")
            end,
            config = function()
                require("plugins.configs.treesitter")
            end
        }
    )
    use("nvim-treesitter/playground", {disable = is_vscode, cond = can_load})
    use(
        "williamboman/mason.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            module = "mason",
            cmd = require("plugins.cmds").mason_cmds,
            config = function()
                require("plugins.configs.mason")
            end
        }
    )
    use(
        "neovim/nvim-lspconfig",
        {
            disable = is_vscode,
            cond = can_load,
            opt = true,
            after = "nvim-semantic-tokens",
            setup = function()
                require("plugins.lazy_load").on_file_open("nvim-lspconfig")
            end,
            config = function()
                require("plugins.configs.lspconfig")
            end
        }
    )
    use(
        "nvim-telescope/telescope.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            module = "telescope",
            cmd = "Telescope",
            config = function()
                require("plugins.configs.telescope")
            end,
            setup = function()
                require("plugins.load_mapings").load_mapings("telescope")
            end
        }
    )
    use(
        "numToStr/FTerm.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            config = function()
                require("plugins.configs.fterm")
            end,
            setup = function()
                require("plugins.load_mapings").load_mapings("fterm")
            end
        }
    )
    use(
        "tenxsoydev/size-matters.nvim",
        {
            disable = is_vscode,
            cond = function() return can_load end,
            config = function()
                local function is_gui()
                    return vim.g.neovide or vim.g.goneovim or vim.g.nvui or vim.g.gnvim
                end
                if is_gui() then
                    require("size-matters").setup({
                        default_mappings = true,
                        step_size = 1,
                        notifications = true,
                        reset_font = vim.api.nvim_get_option("guifont")
                    })
                end
            end
        }
    )
    use(
        "goolord/alpha-nvim",
        {
            disable = is_vscode,
            cond = can_load,
            config = function()
                require("plugins.configs.alpha")
            end
        }
    )
    use(
        "kyazdani42/nvim-tree.lua",
        {
            disable = is_vscode,
            cond = can_load,
            cmd = {"NvimTreeToggle", "NvimTreeFocus"},
            ft = "alpha",
            config = function()
                require("plugins.configs.nvimtree")
            end,
            setup = function()
                require("plugins.load_mapings").load_mapings("nvimtree")
            end
        }
    )
    use("kyazdani42/nvim-web-devicons", {disable = is_vscode, cond = can_load, after = "dracula"})
    use(
        "lukas-reineke/indent-blankline.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            event = "BufRead",
            config = function()
                require("indent_blankline").setup({
                    indentLine_enabled = 1,
                    char = "▏",
                    filetype_exclude = {
                        "help",
                        "terminal",
                        "dashboard",
                        "packer",
                        "lspinfo",
                        "TelescopePrompt",
                        "TelescopeResults",
                        "nvchad_cheatsheet"
                    },
                    buftype_exclude = {"terminal"},
                    show_trailing_blankline_indent = false,
                    show_first_indent_level = false
                })
            end
        }
    )
    use(
        "nvim-lualine/lualine.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            requires = {{[1] = "kyazdani42/nvim-web-devicons", opt = true}},
            config = function()
                require("lualine").setup({options = {theme = "dracula"}})
            end
        }
    )
    use(
        "lewis6991/gitsigns.nvim",
        {
            disable = true,
            cond = can_load,
            opt = true,
            setup = function()
                vim.defer_fn(
                    function()
                        require("packer").loader("gitsigns.nvim")
                    end,
                    0
                )
            end,
            config = function()
                local has_gitsigns, gitsigns = pcall(require, "gitsigns")
                if not has_gitsigns or type(gitsigns) == "string" then
                    return nil
                end
                gitsigns.setup({signs = {
                    add = {hl = "DiffAdd", text = "│", numhl = "GitSignsAddNr"},
                    change = {hl = "DiffChange", text = "│", numhl = "GitSignsChangeNr"},
                    delete = {hl = "DiffDelete", text = "", numhl = "GitSignsDeleteNr"},
                    topdelete = {hl = "DiffDelete", text = "‾", numhl = "GitSignsDeleteNr"},
                    changedelete = {hl = "DiffChangeDelete", text = "~", numhl = "GitSignsChangeNr"}
                }})
            end
        }
    )
    use("rafamadriz/friendly-snippets", {disable = is_vscode, cond = can_load, event = "InsertEnter"})
    use(
        "L3MON4D3/LuaSnip",
        {
            disable = is_vscode,
            cond = can_load,
            wants = "friendly-snippets",
            after = "nvim-cmp",
            config = function()
                require("plugins.configs.luasnip")
            end
        }
    )
    use(
        "hrsh7th/nvim-cmp",
        {
            disable = is_vscode,
            cond = can_load,
            after = "friendly-snippets",
            config = function()
                require("plugins.configs.cmp")
            end
        }
    )
    use("tpope/vim-commentary", {disable = is_vscode, cond = can_load})
    use("backtolife2021/antovim", {event = "BufRead"})
    use(
        "Mephistophiles/surround.nvim",
        {
            event = "BufRead",
            config = function()
                require("surround").setup({mappings_style = "surround"})
            end
        }
    )
end
return ____exports
