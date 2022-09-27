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
    use("MunifTanjim/nui.nvim", {disable = is_vscode, cond = can_load})
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
        "jose-elias-alvarez/null-ls.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            module = "null-ls",
            config = function()
                require("null-ls").setup()
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
                require("plugins.configs.lspconfig").default()
            end
        }
    )
    use(
        "williamboman/mason-lspconfig.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            after = {"nvim-lspconfig", "mason.nvim"},
            config = function()
                require("mason-lspconfig").setup({ensure_installed = {
                    "sumneko_lua",
                    "rust_analyzer",
                    "tsserver",
                    "jsonls",
                    "html",
                    "cssls"
                }, automatic_installation = true})
            end
        }
    )
    use(
        "jayp0521/mason-null-ls.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            after = {"null-ls.nvim", "mason.nvim"},
            config = function()
                require("mason-null-ls").setup({ensure_installed = {"stylua", "eslint_d", "jq", "prettier"}, automatic_installation = true})
                local null_ls = require("null-ls")
                require("mason-null-ls").setup_handlers({
                    [1] = function(source_name)
                    end,
                    stylua = function()
                        null_ls.register(null_ls.builtins.formatting.stylua)
                    end,
                    jq = function()
                        null_ls.register(null_ls.builtins.formatting.jq)
                    end,
                    eslint_d = function()
                        null_ls.register(null_ls.builtins.formatting.eslint_d)
                    end,
                    prettier = function()
                        null_ls.register(null_ls.builtins.formatting.prettier)
                    end
                })
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
        "backtolife2021/size-matters.nvim",
        {
            disable = is_vscode,
            cond = can_load,
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
                require("plugins.configs.alpha").default()
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
                require("plugins.configs.nvimtree").default()
            end,
            setup = function()
                require("plugins.load_mapings").load_mapings("nvimtree")
            end
        }
    )
    use(
        "kyazdani42/nvim-web-devicons",
        {
            disable = is_vscode,
            cond = can_load,
            after = "dracula",
            module = "nvim-web-devicons",
            config = function()
                require("plugins.configs.web_devicons")
            end
        }
    )
    use(
        "lukas-reineke/indent-blankline.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            opt = true,
            config = function()
                require("plugins.configs.indent_blankline").default()
            end,
            setup = function()
                require("plugins.lazy_load").on_file_open("indent-blankline.nvim")
                require("plugins.load_mapings").load_mapings("indent_blankline")
            end
        }
    )
    use(
        "lewis6991/gitsigns.nvim",
        {
            disable = true,
            cond = can_load,
            opt = true,
            ft = "gitcommit",
            setup = function()
                vim.api.nvim_create_autocmd(
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
            end,
            config = function()
                require("plugins.configs.gitsigns_").default()
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
                require("plugins.configs.luasnip").default()
            end
        }
    )
    use(
        "hrsh7th/nvim-cmp",
        {
            disable = is_vscode,
            cond = can_load,
            module = "cmp",
            after = "friendly-snippets",
            config = function()
                require("plugins.configs.cmp_").default()
            end
        }
    )
    use("saadparwaiz1/cmp_luasnip", {disable = is_vscode, cond = can_load, after = "LuaSnip"})
    use("hrsh7th/cmp-nvim-lua", {disable = is_vscode, cond = can_load, after = "cmp_luasnip"})
    use("hrsh7th/cmp-nvim-lsp", {disable = is_vscode, cond = can_load, after = "cmp-nvim-lua"})
    use("hrsh7th/cmp-buffer", {disable = is_vscode, cond = can_load, after = "cmp-nvim-lsp"})
    use("hrsh7th/cmp-path", {disable = is_vscode, cond = can_load, after = "cmp-buffer"})
    use("hrsh7th/cmp-cmdline", {disable = is_vscode, cond = can_load, after = "cmp-path"})
    use(
        "VonHeikemen/searchbox.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            requires = {"MunifTanjim/nui.nvim"},
            config = function()
                vim.keymap.set("n", "<leader>s", ":SearchBoxIncSearch<CR>")
                vim.keymap.set("n", "<C-f>", ":SearchBoxIncSearch<CR>")
                vim.keymap.set("x", "<leader>s", ":SearchBoxIncSearch visual_mode=true<CR>")
                vim.keymap.set("x", "<C-f>", ":SearchBoxIncSearch visual_mode=true<CR>")
            end
        }
    )
    use(
        "windwp/nvim-autopairs",
        {
            disable = is_vscode,
            cond = can_load,
            after = "nvim-cmp",
            config = function()
                require("plugins.configs.autopairs").default()
            end
        }
    )
    use(
        "numToStr/Comment.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            module = "Comment",
            keys = {"gc", "gb"},
            config = function()
                require("plugins.configs.commnet").default()
            end,
            setup = function()
                require("plugins.load_mapings").load_mapings("comment")
            end
        }
    )
    use(
        "NvChad/nvim-colorizer.lua",
        {
            disable = is_vscode,
            cond = can_load,
            opt = true,
            setup = function()
                require("plugins.lazy_load").on_file_open("nvim-colorizer.lua")
            end,
            config = function()
                require("plugins.configs.colorizer_").default()
            end
        }
    )
    use(
        "folke/which-key.nvim",
        {
            disable = is_vscode,
            cond = can_load,
            module = "which-key",
            keys = {"<leader>", "\"", "'", "`"},
            config = function()
                require("plugins.configs.whichkey").default()
            end,
            setup = function()
                require("plugins.load_mapings").load_mapings("whichkey")
            end
        }
    )
    use(
        "petertriho/nvim-scrollbar",
        {
            disable = is_vscode,
            cond = can_load,
            config = function()
                require("scrollbar").setup()
            end
        }
    )
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
