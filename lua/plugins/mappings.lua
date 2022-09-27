--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.telescope = {n = {
    ["<leader>ff"] = {"<cmd> Telescope find_files <CR>", "find files"},
    ["<leader>fa"] = {"<cmd> Telescope find_files follow=true no_ignore=true hidden=true <CR>", "find all"},
    ["<leader>fw"] = {"<cmd> Telescope live_grep <CR>", "live grep"},
    ["<leader>fb"] = {"<cmd> Telescope buffers <CR>", "find buffers"},
    ["<leader>fh"] = {"<cmd> Telescope help_tags <CR>", "help page"},
    ["<leader>fo"] = {"<cmd> Telescope oldfiles <CR>", "find oldfiles"},
    ["<leader>tk"] = {"<cmd> Telescope keymaps <CR>", "show keys"},
    ["<leader>cm"] = {"<cmd> Telescope git_commits <CR>", "git commits"},
    ["<leader>gt"] = {"<cmd> Telescope git_status <CR>", "git status"},
    ["<leader>pt"] = {"<cmd> Telescope terms <CR>", "pick hidden term"},
    ["<leader>th"] = {"<cmd> Telescope themes <CR>", "nvchad themes"}
}}
____exports.fterm = {n = {["<A-t>"] = {"<cmd>lua require(\"FTerm\").toggle()<CR>", "pick hidden term"}, ["<C-@>"] = {"<cmd>lua require(\"FTerm\").toggle()<CR>", "pick hidden term"}}, t = {["<A-t>"] = {"<C-\\><C-n><cmd>lua require(\"FTerm\").toggle()<CR>", "nvchad themes"}, ["<C-@>"] = {"<C-\\><C-n><cmd>lua require(\"FTerm\").toggle()<CR>", "nvchad themes"}}}
____exports.lspconfig = {n = {
    gD = {
        function()
            vim.lsp.buf.declaration()
        end,
        "lsp declaration"
    },
    gd = {
        function()
            vim.lsp.buf.definition()
        end,
        "lsp definition"
    },
    H = {
        function()
            vim.lsp.buf.hover()
        end,
        "lsp hover"
    },
    gi = {
        function()
            vim.lsp.buf.implementation()
        end,
        "lsp implementation"
    },
    ["<leader>ls"] = {
        function()
            vim.lsp.buf.signature_help()
        end,
        "lsp signature_help"
    },
    ["<leader>D"] = {
        function()
            vim.lsp.buf.type_definition()
        end,
        "lsp definition type"
    },
    ["<leader>ra"] = {
        function()
            require("plugins.ui.renamer").open()
        end,
        "lsp rename"
    },
    ["<leader>ca"] = {
        function()
            vim.lsp.buf.code_action()
        end,
        "lsp code_action"
    },
    gr = {
        function()
            vim.lsp.buf.references()
        end,
        "lsp references"
    },
    ["<leader>f"] = {
        function()
            vim.diagnostic.open_float()
        end,
        "floating diagnostic"
    },
    ["[d"] = {
        function()
            vim.diagnostic.goto_prev()
        end,
        "goto prev"
    },
    ["d]"] = {
        function()
            vim.diagnostic.goto_next()
        end,
        "goto_next"
    },
    ["<leader>q"] = {
        function()
            vim.diagnostic.setloclist()
        end,
        "diagnostic setloclist"
    },
    ["<leader>fm"] = {
        function()
            vim.lsp.buf.formatting({})
        end,
        "lsp formatting"
    },
    ["<leader>wa"] = {
        function()
            vim.lsp.buf.add_workspace_folder()
        end,
        "add workspace folder"
    },
    ["<leader>wr"] = {
        function()
            vim.lsp.buf.remove_workspace_folder()
        end,
        "remove workspace folder"
    },
    ["<leader>wl"] = {
        function()
            print(vim.inspect(vim.lsp.buf.list_workspace_folders()))
        end,
        "list workspace folders"
    }
}}
____exports.nvimtree = {n = {["<C-e>"] = {"<cmd> NvimTreeToggle <CR>", "toggle nvimtree"}, ["<leader>e"] = {"<cmd> NvimTreeFocus <CR>", "focus nvimtree"}}}
____exports.indent_blankline = {n = {["<leader>cc"] = {
    function()
        local utils = require("indent_blankline.utils")
        local ok, start = utils.get_current_context(vim.g.indent_blankline_context_patterns, vim.g.indent_blankline_use_treesitter_scope)
        if not ok then
            return
        end
        vim.api.nvim_win_set_cursor(
            vim.api.nvim_get_current_win(),
            {start, 0}
        )
        vim.cmd("normal! _")
    end,
    "Jump to current_context"
}}}
____exports.comment = {
    n = {
        ["<leader>/"] = {
            function()
                require("Comment.api").toggle.linewise.current()
            end,
            "toggle comment"
        },
        ["<C-/>"] = {
            function()
                require("Comment.api").toggle.linewise.current()
            end,
            "toggle comment"
        }
    },
    v = {["<leader>/"] = {"<ESC><cmd>lua require('Comment.api').toggle.linewise(vim.fn.visualmode())<CR>", "toggle comment"}, ["<C-/>"] = {"<ESC><cmd>lua require('Comment.api').toggle.linewise(vim.fn.visualmode())<CR>", "toggle comment"}}
}
____exports.whichkey = {n = {
    ["<leader>wK"] = {
        function()
            vim.cmd("WhichKey")
        end,
        "which-key all keymaps"
    },
    ["<leader>wk"] = {
        function()
            local input = vim.fn.input("WhichKey: ")
            vim.cmd("WhichKey " .. input)
        end,
        "which-key query lookup"
    }
}}
return ____exports
