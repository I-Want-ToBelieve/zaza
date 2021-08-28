/* eslint-disable @typescript-eslint/ban-types */
/** @noSelf */
interface Languagetree {
  LanguageTree: Languagetree
  Query: Query
  TSHighlighter: Tshighlighter
  /**
    *Returns a map of language to child tree.
    *@param self -
    
    */
  children: (self?: any) => any
  /**
    *Determines whether {range} is contained in the |LanguageTree|.
    *@param self -
    *@param range - (table) `{ start_line, start_col, end_line, end_col }`
    
    */
  contains: (self?: any, range?: table) => any
  /**
    *Destroys this |LanguageTree| and all its children.
    *Any cleanup logic should be performed here.
    *Note: This DOES NOT remove this tree from a parent. Instead, `remove_child` must be called on the parent to remove it.
    *@param self -
    
    */
  destroy: (self?: any) => any
  /**
    *Invokes the callback for each |LanguageTree| and its children recursively
    *@param self -
    *@param fn - function(tree: LanguageTree, lang: string)
    *@param include_self - (boolean) Whether to include the invoking tree in the
                        results
    
    */
  for_each_child: (self?: any, fn?: any, include_self?: boolean) => any
  /**
    *Invokes the callback for each |LanguageTree| recursively.
    *Note: This includes the invoking tree's child trees as well.
    *@param self -
    *@param fn - function(tree: TSTree, languageTree: LanguageTree)
    
    */
  for_each_tree: (self?: any, fn?: any) => any
  /**
    *Gets the set of included regions
    *@param self -
    
    */
  included_regions: (self?: any) => any
  /**
    *Invalidates this parser and all its children
    *@param self -
    *@param reload -
    
    */
  invalidate: (self?: any, reload?: any) => any
  /**
    *Determines whether this tree is valid. If the tree is invalid, call `parse()` . This will return the updated tree.
    *@param self -
    
    */
  is_valid: (self?: any) => any
  /**
    *Gets the language of this tree node.
    *@param self -
    
    */
  lang: (self?: any) => any
  /**
    *Gets the appropriate language that contains {range}.
    *@param self -
    *@param range - (table) `{ start_line, start_col, end_line, end_col }`
    
    */
  language_for_range: (self?: any, range?: table) => any
  /**
    *Gets the smallest named node that contains {range}.
    *@param self -
    *@param range - (table) `{ start_line, start_col, end_line, end_col }`
    *@param opts - (table|nil) Optional keyword arguments:
                 • ignore_injections boolean Ignore injected languages
                   (default true)
    
    */
  named_node_for_range: (self?: any, range?: table, opts?: table | nil) => any
  /**
    *Parses all defined regions using a treesitter parser for the language this
    *tree represents. This will run the injection query for this language to
    *determine if any child languages should be created.
    *@param self -
    
    */
  parse: (self?: any) => any
  /**
    *Registers callbacks for the |LanguageTree|.
    *@param self -
    *@param cbs - (table) An |nvim_buf_attach()|-like table argument with the
                following handlers:
                • `on_bytes` : see |nvim_buf_attach()|, but this will be called after the parsers callback.
                • `on_changedtree` : a callback that will be called every time
                  the tree has syntactical changes. It will only be passed one
                  argument, which is a table of the ranges (as node ranges)
                  that changed.
                • `on_child_added` : emitted when a child is added to the
                  tree.
                • `on_child_removed` : emitted when a child is removed from
                  the tree.
    
    */
  register_cbs: (self?: any, cbs?: table) => any
  /**
    *Returns the source content of the language tree (bufnr or string).
    *@param self -
    
    */
  source: (self?: any) => any
  /**
    *Gets the tree that contains {range}.
    *@param self -
    *@param range - (table) `{ start_line, start_col, end_line, end_col }`
    *@param opts - (table|nil) Optional keyword arguments:
                 • ignore_injections boolean Ignore injected languages
                   (default true)
    
    */
  tree_for_range: (self?: any, range?: table, opts?: table | nil) => any
  /**
    *Returns all trees this language tree contains. Does not include child
    *languages.
    *@param self -
    
    */
  trees: (self?: any) => any
}
/** @noSelf */
interface Query {
  LanguageTree: Languagetree
  Query: Query
  TSHighlighter: Tshighlighter
  /**
    *Iterate over all captures from all matches inside {node}
    *{source} is needed if the query contains predicates; then the caller must
    *ensure to use a freshly parsed tree consistent with the current text of
    *the buffer (if relevant). {start_row} and {end_row} can be used to limit
    *matches inside a row range (this is typically used with root node as the
    *{node}, i.e., to get syntax highlight matches in the current viewport).
    *When omitted, the {start} and {end} row values are used from the given
    *node.
    *The iterator returns three values: a numeric id identifying the capture,
    *the captured node, and metadata from any directives processing the match.
    *The following example shows how to get captures by name: >
    *
    * for id, node, metadata in query:iter_captures(tree:root(), bufnr, first, last) do
    *   local name = query.captures[id] -- name of the capture in the query
    *   -- typically useful info about the node:
    *   local type = node:type() -- type of the captured node
    *   local row1, col1, row2, col2 = node:range() -- range of the capture
    *   ... use the info here ...
    * end
    *
    *<
    *@param self -
    *@param node - userdata |tsnode| under which the search will occur
    *@param source - (number|string) Source buffer or string to extract text from
    *@param start - (number) Starting line for the search
    *@param stop - (number) Stopping line for the search (end-exclusive)
    
    */
  iter_captures: (
    self?: any,
    node?: any,
    source?: number | string,
    start?: number,
    stop?: number
  ) => any
  /**
    *Iterates the matches of self on a given range.
    *Iterate over all matches within a {node}. The arguments are the same as
    *for |query:iter_captures()| but the iterated values are different: an
    *(1-based) index of the pattern in the query, a table mapping capture
    *indices to nodes, and metadata from any directives processing the match.
    *If the query has more than one pattern, the capture table might be sparse
    *and e.g. `pairs()` method should be used over `ipairs` . Here is an example iterating over all captures in every match: >
    *
    * for pattern, match, metadata in cquery:iter_matches(tree:root(), bufnr, first, last) do
    *   for id, node in pairs(match) do
    *     local name = query.captures[id]
    *     -- `node` was captured by the `name` capture in the match
    *
    *     local node_data = metadata[id] -- Node level metadata
    *
    *     ... use the info here ...
    *   end
    * end
    *
    *<
    *@param self -
    *@param node - userdata |tsnode| under which the search will occur
    *@param source - (number|string) Source buffer or string to search
    *@param start - (number) Starting line for the search
    *@param stop - (number) Stopping line for the search (end-exclusive)
    
    */
  iter_matches: (
    self?: any,
    node?: any,
    source?: number | string,
    start?: number,
    stop?: number
  ) => any
}
/** @noSelf */
interface Tshighlighter {
  LanguageTree: Languagetree
  Query: Query
  TSHighlighter: Tshighlighter
  /**
    *Removes all internal references to the highlighter
    *@param self -
    
    */
  destroy: (self?: any) => any
}
/** @noSelf */
interface Treesitter {
  LanguageTree: Languagetree
  Query: Query
  TSHighlighter: Tshighlighter
  /**
    *Adds a new directive to be used in queries
    *Handlers can set match level data by setting directly on the metadata
    *object `metadata.key = value`, additionally, handlers can set node level
    *data by using the capture id on the metadata table
    *`metadata[capture_id].key = value`
    *@param name - (string) Name of the directive, without leading #
    *@param handler - function(match:string, pattern:string, bufnr:number,
                   predicate:function, metadata:table)
    *@param force -
    
    */
  add_directive: (name?: string, handler?: any, force?: any) => any
  /**
    *Adds a new predicate to be used in queries
    *@param name - (string) Name of the predicate, without leading #
    *@param handler - function(match:string, pattern:string, bufnr:number,
                   predicate:function)
    *@param force -
    
    */
  add_predicate: (name?: string, handler?: any, force?: any) => any
  /**
    *Returns a list of highlight capture names under the cursor
    *@param winnr - (number|nil) Window handle or 0 for current window (default)
    
    */
  get_captures_at_cursor: (winnr?: number | nil) => any
  /**
    *Returns a list of highlight captures at the given position
    *Each capture is represented by a table containing the capture name as a
    *string as well as a table of metadata (`priority`, `conceal`, ...; empty
    *if none are defined).
    *@param bufnr - (number) Buffer number (0 for current buffer)
    *@param row - (number) Position row
    *@param col - (number) Position column
    
    */
  get_captures_at_position: (bufnr?: number, row?: number, col?: number) => any
  /**
    *Returns the smallest named node under the cursor
    *@param winnr - (number|nil) Window handle or 0 for current window (default)
    
    */
  get_node_at_cursor: (winnr?: number | nil) => any
  /**
    *Returns the smallest named node at the given position
    *@param bufnr - (number) Buffer number (0 for current buffer)
    *@param row - (number) Position row
    *@param col - (number) Position column
    *@param opts - (table) Optional keyword arguments:
                 • ignore_injections boolean Ignore injected languages
                   (default true)
    
    */
  get_node_at_position: (bufnr?: number, row?: number, col?: number, opts?: table) => any
  /**
    *Returns the node's range or an unpacked range table
    *@param node_or_range - (userdata|table) |tsnode| or table of positions
    
    */
  get_node_range: (node_or_range?: userdata | table) => any
  /**
    *Gets the text corresponding to a given node
    *@param node - userdata |tsnode|
    *@param source - (number|string) Buffer or string from which the {node} is
                  extracted
    *@param opts - (table|nil) Optional parameters.
                  • concat: (boolean) Concatenate result in a string (default
                    true)
    
    */
  get_node_text: (node?: any, source?: number | string, opts?: table | nil) => any
  /**
    *Returns the parser for a specific buffer and filetype and attaches it to
    *the buffer
    *If needed, this will create the parser.
    *@param bufnr - (number|nil) Buffer the parser should be tied to (default:
                 current buffer)
    *@param lang - (string|nil) Filetype of this parser (default: buffer
                 filetype)
    *@param opts - (table|nil) Options to pass to the created language tree
    
    */
  get_parser: (bufnr?: number | nil, lang?: string | nil, opts?: table | nil) => any
  /**
    *Returns the runtime query {query_name} for {lang}.
    *@param lang - (string) Language to use for the query
    *@param query_name - (string) Name of the query (e.g. 'highlights')
    
    */
  get_query: (lang?: string, query_name?: string) => any
  /**
    *Gets the list of files used to make up a query
    *@param lang - (string) Language to get query for
    *@param query_name - (string) Name of the query to load (e.g., 'highlights')
    *@param is_included - (boolean|nil) Internal parameter, most of the time left
                       as `nil`
    
    */
  get_query_files: (lang?: string, query_name?: string, is_included?: boolean | nil) => any
  /**
    *Returns a string parser
    *@param str - (string) Text to parse
    *@param lang - (string) Language of this string
    *@param opts - (table|nil) Options to pass to the created language tree
    
    */
  get_string_parser: (str?: string, lang?: string, opts?: table | nil) => any
  /**
    *Inspects the provided language.
    *Inspecting provides some useful information on the language like node
    *names, ...
    *@param lang - (string) Language
    
    */
  inspect_language: (lang?: string) => any
  /**
    *Determines whether a node is the ancestor of another
    *@param dest - userdata Possible ancestor |tsnode|
    *@param source - userdata Possible descendant |tsnode|
    
    */
  is_ancestor: (dest?: any, source?: any) => any
  /**
    *Determines whether (line, col) position is in node range
    *@param node - userdata |tsnode| defining the range
    *@param line - (number) Line (0-based)
    *@param col - (number) Column (0-based)
    
    */
  is_in_node_range: (node?: any, line?: number, col?: number) => any
  /**
    *Lists the currently available directives to use in queries.
    
    */
  list_directives: () => any
  /**
    *Lists the currently available predicates to use in queries.
    
    */
  list_predicates: () => any
  /**
    *A |LanguageTree| holds the treesitter parser for a given language {lang}
    *used to parse a buffer. As the buffer may contain injected languages, the LanguageTree needs to store parsers for these child languages as well (which in turn
    *may contain child languages themselves, hence the name).
    *@param source - (number|string) Buffer or a string of text to parse
    *@param lang - (string) Root language this tree represents
    *@param opts - (table|nil) Optional keyword arguments:
                  • injections table Mapping language to injection query
                    strings. This is useful for overriding the built-in
                    runtime file searching for the injection language query
                    per language.
    
    */
  new: (source?: number | string, lang?: string, opts?: table | nil) => any
  /**
    *Determines if a node contains a range
    *@param node - userdata |tsnode|
    *@param range - (table)
    
    */
  node_contains: (node?: any, range?: table) => any
  /**
    *Parse {query} as a string. (If the query is in a file, the caller should
    *read the contents into a string before calling).
    *Returns a `Query` (see |lua-treesitter-query|) object which can be used to search nodes in
    *the syntax tree for the patterns defined in {query} using `iter_*` methods below.
    *Exposes `info` and `captures` with additional context about {query}.
    *• `captures` contains the list of unique capture names defined in {query}.
    *  -`info.captures` also points to `captures`.
    *• `info.patterns` contains information about predicates.
    *
    *@param lang - (string) Language to use for the query
    *@param query - (string) Query in s-expr syntax
    
    */
  parse_query: (lang?: string, query?: string) => any
  /**
    *Asserts that a parser for the language {lang} is installed.
    *Parsers are searched in the `parser` runtime directory, or the provided
    *{path}
    *@param lang - (string) Language the parser should parse
    *@param path - (string|nil) Optional path the parser is located at
    *@param silent - (boolean|nil) Don't throw an error if language not
                       found
    *@param symbol_name - (string|nil) Internal symbol name for the language to
                       load
    
    */
  require_language: (
    lang?: string,
    path?: string | nil,
    silent?: boolean | nil,
    symbol_name?: string | nil
  ) => any
  /**
    *Sets the runtime query named {query_name} for {lang}
    *This allows users to override any runtime files and\/or configuration set
    *by plugins.
    *@param lang - (string) Language to use for the query
    *@param query_name - (string) Name of the query (e.g., 'highlights')
    *@param text - (string) Query text (unparsed).
    
    */
  set_query: (lang?: string, query_name?: string, text?: string) => any
  /**
    *Starts treesitter highlighting for a buffer
    *Can be used in an ftplugin or FileType autocommand.
    *Note: By default, disables regex syntax highlighting, which may be
    *required for some plugins. In this case, add `vim.bo.syntax = 'on'` after
    *the call to `start`.
    *@example >
    *
    * vim.api.nvim_create_autocmd( 'FileType', { pattern = 'tex',
    *     callback = function(args)
    *         vim.treesitter.start(args.buf, 'latex')
    *         vim.bo[args.buf].syntax = 'on'  -- only if additional legacy syntax is needed
    *     end
    * })
    *
    *<
    *@param bufnr - (number|nil) Buffer to be highlighted (default: current
                 buffer)
    *@param lang - (string|nil) Language of the parser (default: buffer
                 filetype)
    
    */
  start: (bufnr?: number | nil, lang?: string | nil) => any
  /**
    *Stops treesitter highlighting for a buffer
    *@param bufnr - (number|nil) Buffer to stop highlighting (default: current
                 buffer)
    
    */
  stop: (bufnr?: number | nil) => any
}
/** @noSelf */
declare interface Vim {
  treesitter: Treesitter
}
