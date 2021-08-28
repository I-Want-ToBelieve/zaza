/* eslint-disable @typescript-eslint/ban-types */
/** @noSelf */
declare interface Vim {
  /**
    *Add new filetype mappings.
    *Filetype mappings can be added either by extension or by filename (either
    *the "tail" or the full file path). The full file path is checked first,
    *followed by the file name. If a match is not found using the filename,
    *then the filename is matched against the list of |lua-patterns| (sorted by
    *priority) until a match is found. Lastly, if pattern matching does not
    *find a filetype, then the file extension is used.
    *The filetype can be either a string (in which case it is used as the
    *filetype directly) or a function. If a function, it takes the full path
    *and buffer number of the file as arguments (along with captures from the
    *matched pattern, if any) and should return a string that will be used as
    *the buffer's filetype. Optionally, the function can return a second
    *function value which, when called, modifies the state of the buffer. This
    *can be used to, for example, set filetype-specific buffer variables.
    *Filename patterns can specify an optional priority to resolve cases when a
    *file path matches multiple patterns. Higher priorities are matched first.
    *When omitted, the priority defaults to 0. A pattern can contain
    *environment variables of the form "${SOME_VAR}" that will be automatically
    *expanded. If the environment variable is not set, the pattern won't be
    *matched.
    *See $VIMRUNTIME\/lua\/vim\/filetype.lua for more examples.
    *Note that Lua filetype detection is disabled when |g:do_legacy_filetype|
    *is set.
    *@example >
    *
    *  vim.filetype.add({
    *    extension = {
    *      foo = 'fooscript',
    *      bar = function(path, bufnr)
    *        if some_condition() then
    *          return 'barscript', function(bufnr)
    *            -- Set a buffer variable
    *            vim.b[bufnr].barscript_version = 2
    *          end
    *        end
    *        return 'bar'
    *      end,
    *    },
    *    filename = {
    *      ['.foorc'] = 'toml',
    *      ['\/etc\/foo\/config'] = 'toml',
    *    },
    *    pattern = {
    *      ['.*\/etc\/foo\/.*'] = 'fooscript',
    *      -- Using an optional priority
    *      ['.*\/etc\/foo\/.*%.conf'] = { 'dosini', { priority = 10 } },
    *      -- A pattern containing an environment variable
    *      ['${XDG_CONFIG_HOME}\/foo\/git'] = 'git',
    *      ['README.(a+)$'] = function(path, bufnr, ext)
    *        if ext == 'md' then
    *          return 'markdown'
    *        elseif ext == 'rst' then
    *          return 'rst'
    *        end
    *      end,
    *    },
    *  })
    *
    *<
    *To add a fallback match on contents (see |new-filetype-scripts|), use >
    *
    * vim.filetype.add {
    *   pattern = {
    *     ['.*'] = {
    *       priority = -math.huge,
    *       function(path, bufnr)
    *         local content = vim.filetype.getlines(bufnr, 1)
    *         if vim.filetype.matchregex(content, [[^#!.*\<mine\>]]) then
    *           return 'mine'
    *         elseif vim.filetype.matchregex(content, [[\<drawing\>]]) then
    *           return 'drawing'
    *         end
    *       end,
    *     },
    *   },
    * }
    *
    *<
    *@param filetypes - (table) A table containing new filetype maps (see
                     example).
    
    */
  add: (filetypes?: table) => any
  /**
    *Return the basename of the given file or directory
    *@param file - (string) File or directory
    
    */
  basename: (file?: string) => any
  /**
    *Execute Vim script commands.
    *Note that `vim.cmd` can be indexed with a command name to return a
    *callable function to the command.
    *@example >
    *
    *   vim.cmd('echo 42')
    *   vim.cmd([[
    *     augroup My_group
    *       autocmd!
    *       autocmd FileType c setlocal cindent
    *     augroup END
    *   ]])
    *
    *   -- Ex command :echo "foo"
    *   -- Note string literals need to be double quoted.
    *   vim.cmd('echo "foo"')
    *   vim.cmd { cmd = 'echo', args = { '"foo"' } }
    *   vim.cmd.echo({ args = { '"foo"' } })
    *   vim.cmd.echo('"foo"')
    *
    *   -- Ex command :write! myfile.txt
    *   vim.cmd('write! myfile.txt')
    *   vim.cmd { cmd = 'write', args = { "myfile.txt" }, bang = true }
    *   vim.cmd.write { args = { "myfile.txt" }, bang = true }
    *   vim.cmd.write { "myfile.txt", bang = true }
    *
    *   -- Ex command :colorscheme blue
    *   vim.cmd('colorscheme blue')
    *   vim.cmd.colorscheme('blue')
    *
    *<
    *@param command - string|table Command(s) to execute. If a string, executes
                   multiple lines of Vim script at once. In this case, it is
                   an alias to |nvim_exec()|, where `output` is set to false.
                   Thus it works identical to |:source|. If a table, executes
                   a single command. In this case, it is an alias to
                   |nvim_cmd()| where `opts` is empty.
    
    */
  cmd: (command?: any) => any
  /**
    *
    *@param consequence -
    
    */
  connection_failure_errmsg: (consequence?: any) => any
  /**
    *Deep compare values for equality
    *Tables are compared recursively unless they both provide the `eq` metamethod. All other types are compared using the equality `==` operator.
    *@param a - any First value
    *@param b - any Second value
    
    */
  deep_equal: (a?: any, b?: any) => any
  /**
    *Returns a deep copy of the given object. Non-table objects are copied as
    *in a typical Lua assignment, whereas table objects are copied recursively.
    *Functions are naively copied, so functions in the copied table point to
    *the same functions as those in the input table. Userdata and threads are
    *not copied and will throw an error.
    *@param orig - (table) Table to copy
    
    */
  deepcopy: (orig?: table) => any
  /**
    *Creates a table whose members are automatically created when accessed, if
    *they don't already exist.
    *They mimic defaultdict in python.
    *If {create} is `nil`, this will create a defaulttable whose constructor
    *function is this function, effectively allowing to create nested tables on
    *the fly:
    *>
    *
    * local a = vim.defaulttable()
    * a.b.c = 1
    *
    *<
    *@param create - (function|nil) The function called to create a missing
                  value.
    
    */
  defaulttable: (create?: function | nil) => any
  /**
    *Defers calling `fn` until `timeout` ms passes.
    *Use to do a one-shot timer that calls `fn` Note: The {fn} is |schedule_wrap|ped automatically, so API functions are
    *safe to call.
    *@param fn - Callback to call once `timeout` expires
    *@param timeout - Number of milliseconds to wait before calling `fn`
    
    */
  defer_fn: (fn?: any, timeout?: any) => any
  /**
    *Remove an existing mapping. @example >
    *
    *   vim.keymap.del('n', 'lhs')
    *
    *   vim.keymap.del({'n', 'i', 'v'}, '<leader>w', { buffer = 5 })
    *
    *<
    *@param modes -
    *@param lhs -
    *@param opts - (table|nil) A table of optional arguments:
                • buffer: (number or boolean) Remove a mapping from the given
                  buffer. When "true" or 0, use the current buffer.
    
    */
  del: (modes?: any, lhs?: any, opts?: table | nil) => any
  /**
    *Display a deprecation notification to the user.
    *@param name - string Deprecated function.
    *@param alternative - (string|nil) Preferred alternative function.
    *@param version - string Version in which the deprecated function will be
                       removed.
    *@param plugin - string|nil Plugin name that the function will be
                       removed from. Defaults to "Nvim".
    *@param backtrace - boolean|nil Prints backtrace. Defaults to true.
    
    */
  deprecate: (
    name?: any,
    alternative?: string | nil,
    version?: any,
    plugin?: any,
    backtrace?: any
  ) => any
  /**
    *Return an iterator over the files and directories located in {path}
    *@param path - (string) An absolute or relative path to the directory to
                iterate over. The path is first normalized
                |vim.fs.normalize()|.
    
    */
  dir: (path?: string) => any
  /**
    *Return the parent directory of the given file or directory
    *@param file - (string) File or directory
    
    */
  dirname: (file?: string) => any
  /**
    *Tests if `s` ends with `suffix`.
    *@param s - (string) String
    *@param suffix - (string) Suffix to match
    
    */
  endswith: (s?: string, suffix?: string) => any
  /**
    *Find files or directories in the given path.
    *Finds any files or directories given in {names} starting from {path}. If
    *{upward} is "true" then the search traverses upward through parent
    *directories; otherwise, the search traverses downward. Note that downward
    *searches are recursive and may search through many directories! If {stop}
    *is non-nil, then the search stops when the directory given in {stop} is
    *reached. The search terminates when {limit} (default 1) matches are found.
    *The search can be narrowed to find only files or or only directories by
    *specifying {type} to be "file" or "directory", respectively.
    *@param names - (string|table|fun(name: string): boolean) Names of the files
                 and directories to find. Must be base names, paths and globs
                 are not supported. If a function it is called per file and
                 dir within the traversed directories to test if they match.
    *@param opts - (table) Optional keyword arguments:
                 • path (string): Path to begin searching from. If omitted,
                   the current working directory is used.
                 • upward (boolean, default false): If true, search upward
                   through parent directories. Otherwise, search through child
                   directories (recursively).
                 • stop (string): Stop searching when this directory is
                   reached. The directory itself is not searched.
                 • type (string): Find only files ("file") or directories
                   ("directory"). If omitted, both files and directories that
                   match {name} are included.
                 • limit (number, default 1): Stop the search after finding
                   this many matches. Use `math.huge` to place no limit on the
                   number of matches.
    
    */
  find: (names?: string | tablefunction, opts?: table) => any
  /**
    *Splits a string at each instance of a separator.
    *@param s - (string) String to split
    *@param sep - (string) Separator or pattern
    *@param plain - (boolean) If `true` use `sep` literally (passed to
                 string.find)
    
    */
  gsplit: (s?: string, sep?: string, plain?: boolean) => any
  /**
    *Prompts the user for input
    *@example >
    *
    * vim.ui.input({ prompt = 'Enter value for shiftwidth: ' }, function(input)
    *     vim.o.shiftwidth = tonumber(input)
    * end)
    *
    *<
    *@param opts - (table) Additional options. See |input()|
                      • prompt (string|nil) Text of the prompt
                      • default (string|nil) Default reply to the input
                      • completion (string|nil) Specifies type of completion
                        supported for input. Supported types are the same that
                        can be supplied to a user-defined command using the
                        "-complete=" argument. See |:command-completion|
                      • highlight (function) Function that will be used for
                        highlighting user inputs.
    *@param on_confirm - (function) ((input|nil) -> ()) Called once the user
                      confirms or abort the input. `input` is what the user
                      typed. `nil` if the user aborted the dialog.
    
    */
  input: (opts?: table, on_confirm?: function) => any
  /**
    *Return a human-readable representation of the given object.
    *@param object -
    *@param options -
    
    */
  inspect: (object?: any, options?: any) => any
  /**
    *Returns true if object `f` can be called as a function.
    *@param f - any Any object
    
    */
  is_callable: (f?: any) => any
  /**
    *Extends a list-like table with the values of another list-like table.
    *NOTE: This mutates dst!
    *@param dst - (table) List which will be modified and appended to
    *@param src - (table) List from which values will be inserted
    *@param start - (number) Start index on src. Defaults to 1
    *@param finish - (number) Final index on src. Defaults to `#src`
    
    */
  list_extend: (dst?: table, src?: table, start?: number, finish?: number) => any
  /**
    *Creates a copy of a table containing only elements from start to end
    *(inclusive)
    *@param list - (table) Table
    *@param start - (number) Start range of slice
    *@param finish - (number) End range of slice
    
    */
  list_slice: (list?: table, start?: number, finish?: number) => any
  /**
    *Perform filetype detection.
    *The filetype can be detected using one of three methods:
    *1. Using an existing buffer
    *2. Using only a file name
    *3. Using only file contents
    *
    *Of these, option 1 provides the most accurate result as it uses both the
    *buffer's filename and (optionally) the buffer contents. Options 2 and 3
    *can be used without an existing buffer, but may not always provide a match
    *in cases where the filename (or contents) cannot unambiguously determine
    *the filetype.
    *Each of the three options is specified using a key to the single argument
    *of this function. @example
    *>
    *
    *   -- Using a buffer number
    *   vim.filetype.match({ buf = 42 })
    *
    *   -- Override the filename of the given buffer
    *   vim.filetype.match({ buf = 42, filename = 'foo.c' })
    *
    *   -- Using a filename without a buffer
    *   vim.filetype.match({ filename = 'main.lua' })
    *
    *   -- Using file contents
    *   vim.filetype.match({ contents = {'#!\/usr\/bin\/env bash'} })
    *
    *<
    *@param args - (table) Table specifying which matching strategy to use.
                Accepted keys are:
                • buf (number): Buffer number to use for matching. Mutually
                  exclusive with {contents}
                • filename (string): Filename to use for matching. When {buf}
                  is given, defaults to the filename of the given buffer
                  number. The file need not actually exist in the filesystem.
                  When used without {buf} only the name of the file is used
                  for filetype matching. This may result in failure to detect
                  the filetype in cases where the filename alone is not enough
                  to disambiguate the filetype.
                • contents (table): An array of lines representing file
                  contents to use for matching. Can be used with {filename}.
                  Mutually exclusive with {buf}.
    
    */
  match: (args?: table) => any
  /**
    *Normalize a path to a standard format. A tilde (~) character at the
    *beginning of the path is expanded to the user's home directory and any
    *backslash (\) characters are converted to forward slashes (\/). Environment
    *variables are also expanded.
    *@example >
    *
    * vim.fs.normalize('C:\Users\jdoe')
    * => 'C:\/Users\/jdoe'
    *
    * vim.fs.normalize('~\/src\/neovim')
    * => '\/home\/jdoe\/src\/neovim'
    *
    * vim.fs.normalize('$XDG_CONFIG_HOME\/nvim\/init.vim')
    * => '\/Users\/jdoe\/.config\/nvim\/init.vim'
    *
    *<
    *@param path - (string) Path to normalize
    
    */
  normalize: (path?: string) => any
  /**
    *Display a notification to the user.
    *This function can be overridden by plugins to display notifications using
    *a custom provider (such as the system notification provider). By default,
    *writes to |:messages|.
    *@param msg - (string) Content of the notification to show to the user.
    *@param level - (number|nil) One of the values from |vim.log.levels|.
    *@param opts - (table|nil) Optional parameters. Unused by default.
    
    */
  notify: (msg?: string, level?: number | nil, opts?: table | nil) => any
  /**
    *Display a notification only one time.
    *Like |vim.notify()|, but subsequent calls with the same message will not
    *display a notification.
    *@param msg - (string) Content of the notification to show to the user.
    *@param level - (number|nil) One of the values from |vim.log.levels|.
    *@param opts - (table|nil) Optional parameters. Unused by default.
    
    */
  notify_once: (msg?: string, level?: number | nil, opts?: table | nil) => any
  /**
    *Adds Lua function {fn} with namespace id {ns_id} as a listener to every,
    *yes every, input key.
    *The Nvim command-line option |-w| is related but does not support
    *callbacks and cannot be toggled dynamically.
    *
    *Note:
    *    {fn} will not be cleared by |nvim_buf_clear_namespace()|
    *
    *Note:
    *    {fn} will receive the keys after mappings have been evaluated
    *
    *@param fn - function: Callback function. It should take one string
                 argument. On each key press, Nvim passes the key char to
                 fn(). |i_CTRL-V| If {fn} is nil, it removes the callback for
                 the associated {ns_id}
    *@param ns_id - number? Namespace ID. If nil or 0, generates and returns a
                 new |nvim_create_namespace()| id.
    
    */
  on_key: (fn?: any, ns_id?: any) => any
  /**
    *Iterate over all the parents of the given file or directory.
    *@example >
    *
    * local root_dir
    * for dir in vim.fs.parents(vim.api.nvim_buf_get_name(0)) do
    *   if vim.fn.isdirectory(dir .. "\/.git") == 1 then
    *     root_dir = dir
    *     break
    *   end
    * end
    *
    * if root_dir then
    *   print("Found git repository at", root_dir)
    * end
    *
    *<
    *@param start - (string) Initial file or directory.
    
    */
  parents: (start?: string) => any
  /**
    *Paste handler, invoked by |nvim_paste()| when a conforming UI (such as the
    *|TUI|) pastes text into the editor.
    *@example To remove ANSI color codes when pasting: >
    *
    * vim.paste = (function(overridden)
    *   return function(lines, phase)
    *     for i,line in ipairs(lines) do
    *       -- Scrub ANSI color codes from paste input.
    *       lines[i] = line:gsub('\27%[[0-9;mK]+', '')
    *     end
    *     overridden(lines, phase)
    *   end
    * end)(vim.paste)
    *
    *<
    *@param lines - |readfile()|-style list of lines to paste. |channel-lines|
    *@param phase - -1: "non-streaming" paste: the call contains all lines. If
                 paste is "streamed", `phase` indicates the stream state:
                 • 1: starts the paste (exactly once)
                 • 2: continues the paste (zero or more times)
                 • 3: ends the paste (exactly once)
    
    */
  paste: (lines?: any, phase?: any) => any
  /**
    *Escapes magic chars in |lua-patterns|.
    *@param s - (string) String to escape
    
    */
  pesc: (s?: string) => any
  /**
    *Prints given arguments in human-readable format. @example >
    *  -- Print highlight group Normal and store it's contents in a variable.
    *  local hl_normal = vim.pretty_print(vim.api.nvim_get_hl_by_name("Normal", true))
    *
    *<
    *@param args -
    
    */
  pretty_print: (...args: any[]) => any
  /**
    *Get a table of lines with start, end columns for a region marked by two
    *points
    *@param bufnr - (number) of buffer
    *@param pos1 - (line, column) tuple marking beginning of region
    *@param pos2 - (line, column) tuple marking end of region
    *@param regtype - type of selection (:help setreg)
    *@param inclusive - (boolean) indicating whether the selection is
                     end-inclusive
    
    */
  region: (
    bufnr?: number,
    pos1?: line,
    pos2?: line,
    regtype?: any,
    inclusive?: boolean
  ) => any
  /**
    *Defers callback `cb` until the Nvim API is safe to call.
    *@param cb -
    
    */
  schedule_wrap: (cb?: any) => any
  /**
    *Prompts the user to pick a single item from a collection of entries
    *@example >
    *
    * vim.ui.select({ 'tabs', 'spaces' }, {
    *     prompt = 'Select tabs or spaces:',
    *     format_item = function(item)
    *         return "I'd like to choose " .. item
    *     end,
    * }, function(choice)
    *     if choice == 'spaces' then
    *         vim.o.expandtab = true
    *     else
    *         vim.o.expandtab = false
    *     end
    * end)
    *
    *<
    *@param items - (table) Arbitrary items
    *@param opts - (table) Additional options
                     • prompt (string|nil) Text of the prompt. Defaults to
                       `Select one of:`
                     • format_item (function item -> text) Function to format
                       an individual item from `items`. Defaults to
                       `tostring`.
                     • kind (string|nil) Arbitrary hint string indicating the
                       item shape. Plugins reimplementing `vim.ui.select` may
                       wish to use this to infer the structure or semantics of
                       `items`, or the context in which select() was called.
    *@param on_choice - (function) ((item|nil, idx|nil) -> ()) Called once the
                     user made a choice. `idx` is the 1-based index of `item`
                     within `items`. `nil` if the user aborted the dialog.
    
    */
  select: (items?: table, opts?: table, on_choice?: function) => any
  /**
    *Add a new |mapping|. @example >
    *
    *   -- Can add mapping to Lua functions
    *   vim.keymap.set('n', 'lhs', function() print("real lua function") end)
    *
    *   -- Can use it to map multiple modes
    *   vim.keymap.set({'n', 'v'}, '<leader>lr', vim.lsp.buf.references, { buffer=true })
    *
    *   -- Can add mapping for specific buffer
    *   vim.keymap.set('n', '<leader>w', "<cmd>w<cr>", { silent = true, buffer = 5 })
    *
    *   -- Expr mappings
    *   vim.keymap.set('i', '<Tab>', function()
    *     return vim.fn.pumvisible() == 1 and "<C-n>" or "<Tab>"
    *   end, { expr = true })
    *   -- <Plug> mappings
    *   vim.keymap.set('n', '[%', '<Plug>(MatchitNormalMultiBackward)')
    *
    *<
    *Note that in a mapping like: >
    *
    *    vim.keymap.set('n', 'asdf', require('jkl').my_fun)
    *
    *<
    *the `require('jkl')` gets evaluated during this call in order to access the function. If you
    *want to avoid this cost at startup you can wrap it in a function, for
    *example: >
    *
    *    vim.keymap.set('n', 'asdf', function() return require('jkl').my_fun() end)
    *
    *<
    *@param mode - string|table Same mode short names as |nvim_set_keymap()|. Can
                also be list of modes to create mapping on multiple modes.
    *@param lhs - (string) Left-hand side |{lhs}| of the mapping.
    *@param rhs - string|function Right-hand side |{rhs}| of the mapping. Can
                also be a Lua function.
    *@param opts - (table|nil) A table of |:map-arguments|.
                • Accepts options accepted by the {opts} parameter in
                  |nvim_set_keymap()|, with the following notable differences:
                  • replace_keycodes: Defaults to `true` if "expr" is `true`.
                  • noremap: Always overridden with the inverse of "remap"
                    (see below).
    
                • In addition to those options, the table accepts the
                  following keys:
                  • buffer: (number or boolean) Add a mapping to the given
                    buffer. When `0` or `true`, use the current buffer.
                  • remap: (boolean) Make the mapping recursive. This is the
                    inverse of the "noremap" option from |nvim_set_keymap()|.
                    Defaults to `false`.
    
    */
  set: (mode?: any, lhs?: string, rhs?: any, opts?: table | nil) => any
  /**
    *Splits a string at each instance of a separator.
    *@example >
    *
    *  split(":aa::b:", ":")     --> {'','aa','','b',''}
    *  split("axaby", "ab?")     --> {'','x','y'}
    *  split("x*yz*o", "*", {plain=true})  --> {'x','yz','o'}
    *  split("|x|y|z|", "|", {trimempty=true}) --> {'x', 'y', 'z'}
    *
    *<
    *@param s - (string) String to split
    *@param sep - (string) Separator or pattern
    *@param kwargs - (table) Keyword arguments:
                  • plain: (boolean) If `true` use `sep` literally (passed to
                    string.find)
                  • trimempty: (boolean) If `true` remove empty items from the
                    front and back of the list
    
    */
  split: (s?: string, sep?: string, kwargs?: table) => any
  /**
    *Tests if `s` starts with `prefix`.
    *@param s - (string) String
    *@param prefix - (string) Prefix to match
    
    */
  startswith: (s?: string, prefix?: string) => any
  /**
    *Add the reverse lookup values to an existing table. For example:
    *`tbl_add_reverse_lookup { A = 1 } == { [1] = 'A', A = 1 }`
    *Note that this modifies the input.
    *@param o - (table) Table to add the reverse to
    
    */
  tbl_add_reverse_lookup: (o?: table) => any
  /**
    *Checks if a list-like (vector) table contains `value`.
    *@param t - (table) Table to check
    *@param value - any Value to compare
    
    */
  tbl_contains: (t?: table, value?: any) => any
  /**
    *Counts the number of non-nil values in table `t`.
    *>
    *
    * vim.tbl_count({ a=1, b=2 }) => 2
    * vim.tbl_count({ 1, 2 }) => 2
    *
    *<
    *@param t - (table) Table
    
    */
  tbl_count: (t?: table) => any
  /**
    *Merges recursively two or more map-like tables.
    *@param behavior - (string) Decides what to do if a key is found in more than
                    one map:
                    • "error": raise an error
                    • "keep": use value from the leftmost map
                    • "force": use value from the rightmost map
    *@param args - (table) Two or more map-like tables
    
    */
  tbl_deep_extend: (behavior?: string, ...args: any[]) => any
  /**
    *Merges two or more map-like tables.
    *@param behavior - (string) Decides what to do if a key is found in more than
                    one map:
                    • "error": raise an error
                    • "keep": use value from the leftmost map
                    • "force": use value from the rightmost map
    *@param args - (table) Two or more map-like tables
    
    */
  tbl_extend: (behavior?: string, ...args: any[]) => any
  /**
    *Filter a table using a predicate function
    *@param func - function|table Function or callable table
    *@param t - (table) Table
    
    */
  tbl_filter: (func?: any, t?: table) => any
  /**
    *Creates a copy of a list-like table such that any nested tables are
    *"unrolled" and appended to the result.
    *@param t - (table) List-like table
    
    */
  tbl_flatten: (t?: table) => any
  /**
    *Index into a table (first argument) via string keys passed as subsequent
    *arguments. Return `nil` if the key does not exist.
    *@example >
    *
    *  vim.tbl_get({ key = { nested_key = true }}, 'key', 'nested_key') == true
    *  vim.tbl_get({ key = {}}, 'key', 'nested_key') == nil
    *
    *<
    *@param o - (table) Table to index
    *@param args - (string) Optional strings (0 or more, variadic) via which to
               index the table
    
    */
  tbl_get: (o?: table, ...args: any[]) => any
  /**
    *Checks if a table is empty.
    *@param t - (table) Table to check
    
    */
  tbl_isempty: (t?: table) => any
  /**
    *Tests if a Lua table can be treated as an array.
    *Empty table `{}` is assumed to be an array, unless it was created by
    *|vim.empty_dict()| or returned as a dict-like |API| or Vimscript result,
    *for example from |rpcrequest()| or |vim.fn|.
    *@param t - (table) Table
    
    */
  tbl_islist: (t?: table) => any
  /**
    *Return a list of all keys used in a table. However, the order of the
    *return table of keys is not guaranteed.
    *@param t - (table) Table
    
    */
  tbl_keys: (t?: table) => any
  /**
    *Apply a function to all values of a table.
    *@param func - function|table Function or callable table
    *@param t - (table) Table
    
    */
  tbl_map: (func?: any, t?: table) => any
  /**
    *Return a list of all values used in a table. However, the order of the
    *return table of values is not guaranteed.
    *@param t - (table) Table
    
    */
  tbl_values: (t?: table) => any
  /**
    *Trim whitespace (Lua pattern "%s") from both sides of a string.
    *@param s - (string) String to trim
    
    */
  trim: (s?: string) => any
  /**
    *Get a URI from a bufnr
    *@param bufnr - (number)
    
    */
  uri_from_bufnr: (bufnr?: number) => any
  /**
    *Get a URI from a file path.
    *@param path - (string) Path to file
    
    */
  uri_from_fname: (path?: string) => any
  /**
    *Get the buffer for a uri. Creates a new unloaded buffer if no buffer for
    *the uri already exists.
    *@param uri - (string)
    
    */
  uri_to_bufnr: (uri?: string) => any
  /**
    *Get a filename from a URI
    *@param uri - (string)
    
    */
  uri_to_fname: (uri?: string) => any
  /**
    *Validates a parameter specification (types and values).
    *Usage example: >
    *
    *  function user.new(name, age, hobbies)
    *    vim.validate{
    *      name={name, 'string'},
    *      age={age, 'number'},
    *      hobbies={hobbies, 'table'},
    *    }
    *    ...
    *  end
    *
    *<
    *Examples with explicit argument values (can be run directly): >
    *
    *  vim.validate{arg1={{'foo'}, 'table'}, arg2={'foo', 'string'}}
    *     => NOP (success)
    *
    *  vim.validate{arg1={1, 'table'}}
    *     => error('arg1: expected table, got number')
    *
    *  vim.validate{arg1={3, function(a) return (a % 2) == 0 end, 'even number'}}
    *     => error('arg1: expected even number, got 3')
    *
    *<
    *If multiple types are valid they can be given as a list. >
    *
    *  vim.validate{arg1={{'foo'}, {'table', 'string'}}, arg2={'foo', {'table', 'string'}}}
    *     => NOP (success)
    *
    *  vim.validate{arg1={1, {'string', table'}}}
    *     => error('arg1: expected string|table, got number')
    *
    *
    *<
    *@param opt - (table) Names of parameters to validate. Each key is a
               parameter name; each value is a tuple in one of these forms:
               1. (arg_value, type_name, optional)
                  • arg_value: argument value
                  • type_name: string|table type name, one of: ("table", "t",
                    "string", "s", "number", "n", "boolean", "b", "function",
                    "f", "nil", "thread", "userdata") or list of them.
                  • optional: (optional) boolean, if true, `nil` is valid
    
               2. (arg_value, fn, msg)
                  • arg_value: argument value
                  • fn: any function accepting one argument, returns true if
                    and only if the argument is valid. Can optionally return
                    an additional informative error message as the second
                    returned value.
                  • msg: (optional) error string if validation fails
    
    */
  validate: (opt?: table) => any
}
