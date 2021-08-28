/* eslint-disable @typescript-eslint/ban-types */
/** @noSelf */
interface Lsp {
  /**
    *Add the folder at path to the workspace folders. If {path} is not
    *provided, the user will be prompted for a path using |input()|.
    *@param workspace_folder -
    
    */
  add_workspace_folder: (workspace_folder?: any) => any
  /**
    *Applies a `TextDocumentEdit`, which is a list of changes to a single
    *document.
    *@param text_document_edit - table: a `TextDocumentEdit` object
    *@param index - number: Optional index of the edit, if from a
                              list of edits (or nil, if not from a list)
    *@param offset_encoding -
    
    */
  apply_text_document_edit: (
    text_document_edit?: any,
    index?: any,
    offset_encoding?: any
  ) => any
  /**
    *Applies a list of text edits to a buffer.
    *@param text_edits - (table) list of `TextEdit` objects
    *@param bufnr - (number) Buffer id
    *@param offset_encoding - (string) utf-8|utf-16|utf-32
    
    */
  apply_text_edits: (text_edits?: table, bufnr?: number, offset_encoding?: string) => any
  /**
    *Applies a `WorkspaceEdit`.
    *@param workspace_edit - (table) `WorkspaceEdit`
    *@param offset_encoding - (string) utf-8|utf-16|utf-32 (required)
    
    */
  apply_workspace_edit: (workspace_edit?: table, offset_encoding?: string) => any
  /**
    *Implements the `textDocument\/did…` notifications required to track a
    *buffer for any language server.
    *Without calling this, the server won't be notified of changes to a buffer.
    *@param bufnr - (number) Buffer handle, or 0 for current
    *@param client_id - (number) Client id
    
    */
  buf_attach_client: (bufnr?: number, client_id?: number) => any
  /**
    *Removes document highlights from a buffer.
    *@param bufnr - (number) Buffer id
    
    */
  buf_clear_references: (bufnr?: number) => any
  /**
    *Detaches client from the specified buffer. Note: While the server is
    *notified that the text document (buffer) was closed, it is still able to
    *send notifications should it ignore this notification.
    *@param bufnr - (number) Buffer handle, or 0 for current
    *@param client_id - (number) Client id
    
    */
  buf_detach_client: (bufnr?: number, client_id?: number) => any
  /**
    *Shows a list of document highlights for a certain buffer.
    *@param bufnr - (number) Buffer id
    *@param references - (table) List of `DocumentHighlight` objects to
                           highlight
    *@param offset_encoding - (string) One of "utf-8", "utf-16", "utf-32".
    
    */
  buf_highlight_references: (
    bufnr?: number,
    references?: table,
    offset_encoding?: string
  ) => any
  /**
    *Checks if a buffer is attached for a particular client.
    *@param bufnr - (number) Buffer handle, or 0 for current
    *@param client_id - (number) the client id
    
    */
  buf_is_attached: (bufnr?: number, client_id?: number) => any
  /**
    *Send a notification to a server
    *@param bufnr - [number] (optional): The number of the buffer
    *@param method - [string]: Name of the request method
    *@param params - [string]: Arguments to send to the server
    
    */
  buf_notify: (bufnr?: any, method?: any, params?: any) => any
  /**
    *Sends an async request for all active clients attached to the buffer.
    *Executes the callback on the combined result. Parameters are the same as
    *|vim.lsp.buf_request()| but the return result and callback are different.
    *@param bufnr - (number) Buffer handle, or 0 for current.
    *@param method - (string) LSP method name
    *@param params - (optional, table) Parameters to send to the server
    *@param callback - (function) The callback to call when all requests are
                    finished.
    
    */
  buf_request_all: (
    bufnr?: number,
    method?: string,
    params?: table,
    callback?: function
  ) => any
  /**
    *Sends a request to all server and waits for the response of all of them.
    *Calls |vim.lsp.buf_request_all()| but blocks Nvim while awaiting the
    *result. Parameters are the same as |vim.lsp.buf_request()| but the return
    *result is different. Wait maximum of {timeout_ms} (default 1000) ms.
    *@param bufnr - (number) Buffer handle, or 0 for current.
    *@param method - (string) LSP method name
    *@param params - (optional, table) Parameters to send to the server
    *@param timeout_ms - (optional, number, default=1000) Maximum time in
                      milliseconds to wait for a result.
    
    */
  buf_request_sync: (
    bufnr?: number,
    method?: string,
    params?: table,
    timeout_ms?: number
  ) => any
  /**
    *Returns the UTF-32 and UTF-16 offsets for a position in a certain buffer.
    *@param buf - (number) buffer number (0 for current)
    *@param row - 0-indexed line
    *@param col - 0-indexed byte offset in line
    *@param offset_encoding - (string) utf-8|utf-16|utf-32|nil defaults to
                           `offset_encoding` of first client of `buf`
    
    */
  character_offset: (buf?: number, row?: any, col?: any, offset_encoding?: string) => any
  /**
    *Removes document highlights from current buffer.
    
    */
  clear_references: () => any
  /**
    *LSP client object. You can get an active client object via
    *|vim.lsp.get_client_by_id()| or |vim.lsp.get_active_clients()|.
    *
    *• Methods:
    *  • request(method, params, [handler], bufnr) Sends a request to the
    *    server. This is a thin wrapper around {client.rpc.request} with some
    *    additional checking. If {handler} is not specified, If one is not
    *    found there, then an error will occur. Returns: {status},
    *    {[client_id]}. {status} is a boolean indicating if the notification
    *    was successful. If it is `false`, then it will always be `false` (the
    *    client has shutdown). If {status} is `true`, the function returns
    *    {request_id} as the second result. You can use this with
    *    `client.cancel_request(request_id)` to cancel the request.
    *  • request_sync(method, params, timeout_ms, bufnr) Sends a request to the
    *    server and synchronously waits for the response. This is a wrapper
    *    around {client.request} Returns: { err=err, result=result }, a
    *    dictionary, where `err` and `result` come from the |lsp-handler|. On
    *    timeout, cancel or error, returns `(nil, err)` where `err` is a string
    *    describing the failure reason. If the request was unsuccessful returns
    *    `nil`.
    *  • notify(method, params) Sends a notification to an LSP server. Returns:
    *    a boolean to indicate if the notification was successful. If it is
    *    false, then it will always be false (the client has shutdown).
    *  • cancel_request(id) Cancels a request with a given request id. Returns:
    *    same as `notify()`.
    *  • stop([force]) Stops a client, optionally with force. By default, it
    *    will just ask the server to shutdown without force. If you request to
    *    stop a client which has previously been requested to shutdown, it will
    *    automatically escalate and force shutdown.
    *  • is_stopped() Checks whether a client is stopped. Returns: true if the
    *    client is fully stopped.
    *  • on_attach(client, bufnr) Runs the on_attach function from the client's
    *    config if it was defined. Useful for buffer-local setup.
    *
    *• Members
    *  • {id} (number): The id allocated to the client.
    *  • {name} (string): If a name is specified on creation, that will be
    *    used. Otherwise it is just the client id. This is used for logs and
    *    messages.
    *  • {rpc} (table): RPC client object, for low level interaction with the
    *    client. See |vim.lsp.rpc.start()|.
    *  • {offset_encoding} (string): The encoding used for communicating with
    *    the server. You can modify this in the `config`'s `on_init` method
    *    before text is sent to the server.
    *  • {handlers} (table): The handlers used by the client as described in
    *    |lsp-handler|.
    *  • {requests} (table): The current pending requests in flight to the
    *    server. Entries are key-value pairs with the key being the request ID
    *    while the value is a table with `type`, `bufnr`, and `method`
    *    key-value pairs. `type` is either "pending" for an active request, or
    *    "cancel" for a cancel request.
    *  • {config} (table): copy of the table that was passed by the user to
    *    |vim.lsp.start_client()|.
    *  • {server_capabilities} (table): Response from the server sent on
    *    `initialize` describing the server's capabilities.
    *
    *
    
    */
  client: () => any
  /**
    *Checks whether a client is stopped.
    *@param client_id - (Number)
    
    */
  client_is_stopped: (client_id?: number) => any
  /**
    *Selects a code action available at the current cursor position.
    *@param options - (table|nil) Optional table which holds the following
                   optional fields:
                   • context: (table|nil) Corresponds to `CodeActionContext` of the LSP specification:
                     • diagnostics (table|nil): LSP`Diagnostic[]` . Inferred from the current position if not provided.
                     • only (table|nil): List of LSP `CodeActionKind`s used to
                       filter the code actions. Most language servers support
                       values like `refactor` or `quickfix`.
    
                   • filter: (function|nil) Predicate taking an `CodeAction`
                     and returning a boolean.
                   • apply: (boolean|nil) When set to `true`, and there is
                     just one remaining action (after filtering), the action
                     is applied without user query.
                   • range: (table|nil) Range for which code actions should be
                     requested. If in visual mode this defaults to the active
                     selection. Table must contain `start` and `end` keys with
                     {row, col} tuples using mark-like indexing. See
                     |api-indexing|
    
    */
  code_action: (options?: table | nil) => any
  /**
    *Retrieves the completion items at the current cursor position. Can only be
    *called in Insert mode.
    *@param context - (context support not yet implemented) Additional
                   information about the context in which a completion was
                   triggered (how it was triggered, and by which trigger
                   character, if applicable)
    
    */
  completion: (context?: any) => any
  /**
    *Returns the range table for the difference between prev and curr lines
    *@param ___MissingCloseParenHere___ -
    
    */
  compute_diff: (___MissingCloseParenHere___?: any) => any
  /**
    *Create a LSP RPC client factory that connects via TCP to the given host
    *and port
    *@param host - (string)
    *@param port - (number)
    
    */
  connect: (host?: string, port?: number) => any
  /**
    *Converts any of `MarkedString` | `MarkedString[]` | `MarkupContent` into a
    *list of lines containing valid markdown. Useful to populate the hover
    *window for `textDocument\/hover`, for parsing the result of
    *`textDocument\/signatureHelp`, and potentially others.
    *@param input - (`MarkedString` | `MarkedString[]` | `MarkupContent`)
    *@param contents - (table, optional, default `{}`) List of strings to extend
                    with converted lines
    
    */
  convert_input_to_markdown_lines: (
    input?: `markedstring` | `markedstring[]` | `markupcontent`,
    contents?: table
  ) => any
  /**
    *Converts `textDocument\/SignatureHelp` response to markdown lines.
    *@param signature_help - Response of `textDocument/SignatureHelp`
    *@param ft - optional filetype that will be use as the `lang` for
                          the label markdown code block
    *@param triggers - optional list of trigger characters from the lsp
                          server. used to better determine parameter offsets
    
    */
  convert_signature_help_to_markdown_lines: (
    signature_help?: any,
    ft?: any,
    triggers?: any
  ) => any
  /**
    *Jumps to the declaration of the symbol under the cursor.
    *Note:
    *    Many servers do not implement this method. Generally, see
    *    |vim.lsp.buf.definition()| instead.
    *
    *@param options - (table|nil) additional options
                   • reuse_win: (boolean) Jump to existing window if buffer is
                     already open.
                   • on_list: (function) handler for list results. See
                     |lsp-on-list-handler|
    
    */
  declaration: (options?: table | nil) => any
  /**
    *Jumps to the definition of the symbol under the cursor.
    *@param options - (table|nil) additional options
                   • reuse_win: (boolean) Jump to existing window if buffer is
                     already open.
                   • on_list: (function) handler for list results. See
                     |lsp-on-list-handler|
    
    */
  definition: (options?: table | nil) => any
  /**
    *Display the lenses using virtual text
    *@param lenses - (table) of lenses to display (`CodeLens[] | null`)
    *@param bufnr - (number)
    *@param client_id - (number)
    
    */
  display: (lenses?: table, bufnr?: number, client_id?: number) => any
  /**
    *Send request to the server to resolve document highlights for the current
    *text document position. This request can be triggered by a key mapping or
    *by events such as `CursorHold`, e.g.:
    *>
    *autocmd CursorHold  <buffer> lua vim.lsp.buf.document_highlight()
    *autocmd CursorHoldI <buffer> lua vim.lsp.buf.document_highlight()
    *autocmd CursorMoved <buffer> lua vim.lsp.buf.clear_references()
    *
    *<
    *Note: Usage of |vim.lsp.buf.document_highlight()| requires the following
    *highlight groups to be defined or you won't be able to see the actual
    *highlights. |LspReferenceText| |LspReferenceRead| |LspReferenceWrite|
    
    */
  document_highlight: () => any
  /**
    *Lists all symbols in the current buffer in the quickfix window.
    *@param options - (table|nil) additional options
                   • on_list: (function) handler for list results. See
                     |lsp-on-list-handler|
    
    */
  document_symbol: (options?: table | nil) => any
  /**
    *Executes an LSP server command.
    *@param command_params - (table) A valid `ExecuteCommandParams` object
    
    */
  execute_command: (command_params?: table) => any
  /**
    *Can be used to extract the completion items from a `textDocument\/completion` request, which may return one of `CompletionItem[]` , `CompletionList` or null.
    *@param result - (table) The result of a `textDocument/completion` request
    
    */
  extract_completion_items: (result?: table) => any
  /**
    *Invokes a function for each LSP client attached to a buffer.
    *@param bufnr - (number) Buffer number
    *@param fn - (function) Function to run on each client attached to buffer
                 {bufnr}. The function takes the client, client ID, and buffer
                 number as arguments. Example: >
    
                   vim.lsp.for_each_buffer_client(0, function(client, client_id, bufnr)
                     print(vim.inspect(client))
                   end)
    
    <
    
    */
  for_each_buffer_client: (bufnr?: number, fn?: function) => any
  /**
    *Formats a buffer using the attached (and optionally filtered) language
    *server clients.
    *@param options - table|nil Optional table which holds the following optional
                   fields:
                   • formatting_options (table|nil): Can be used to specify
                     FormattingOptions. Some unspecified options will be
                     automatically derived from the current Neovim options.
                     See https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#formattingOptions
                   • timeout_ms (integer|nil, default 1000): Time in
                     milliseconds to block for formatting requests. No effect
                     if async=true
                   • bufnr (number|nil): Restrict formatting to the clients
                     attached to the given buffer, defaults to the current
                     buffer (0).
                   • filter (function|nil): Predicate used to filter clients.
                     Receives a client as argument and must return a boolean.
                     Clients matching the predicate are included. Example:               • >
    
            -- Never request typescript-language-server for formatting
            vim.lsp.buf.format {
              filter = function(client) return client.name ~= "tsserver" end
            }
    
    <
                   • async boolean|nil If true the method won't block.
                     Defaults to false. Editing the buffer while formatting
                     asynchronous can lead to unexpected changes.
                   • id (number|nil): Restrict formatting to the client with
                     ID (client.id) matching this field.
                   • name (string|nil): Restrict formatting to the client with
                     name (client.name) matching this field.
                   • range (table|nil) Range to format. Table must contain
                     `start` and `end` keys with {row, col} tuples using (1,0)
                     indexing. Defaults to current selection in visual mode
                     Defaults to `nil` in other modes, formatting the full
                     buffer
    
    */
  format: (options?: any) => any
  /**
    *Constructs an error message from an LSP error object.
    
    */
  format_rpc_error: () => any
  /**
    *Provides an interface between the built-in client and a `formatexpr`
    *function.
    *Currently only supports a single client. This can be set via `setlocal
    *formatexpr=v:lua.vim.lsp.formatexpr()` but will typically or in
    *`on_attach` via `vim.api.nvim_buf_set_option(bufnr, 'formatexpr',
    *'v:lua.vim.lsp.formatexpr(#{timeout_ms:250})')`.
    *@param opts - (table) options for customizing the formatting expression
                which takes the following optional keys:
                • timeout_ms (default 500ms). The timeout period for the
                  formatting request.
    
    */
  formatexpr: (opts?: table) => any
  /**
    *Formats the current buffer.
    *@param options - (table|nil) Can be used to specify FormattingOptions. Some
                   unspecified options will be automatically derived from the
                   current Neovim options.
    
    */
  formatting: (options?: table | nil) => any
  /**
    *Formats the current buffer by sequentially requesting formatting from
    *attached clients.
    *Useful when multiple clients with formatting capability are attached.
    *Since it's synchronous, can be used for running on save, to make sure
    *buffer is formatted prior to being saved. {timeout_ms} is passed on to the
    *|vim.lsp.client| `request_sync` method. @example >
    *
    * vim.api.nvim_command[[autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_seq_sync()]]
    *
    *<
    *@param options - (table|nil) `FormattingOptions` entries
    *@param timeout_ms - (number|nil) Request timeout
    *@param order - (table|nil) List of client names. Formatting is
                      requested from clients in the following order: first all
                      clients that are not in the `order` list, then the
                      remaining clients in the order as they occur in the
                      `order` list.
    
    */
  formatting_seq_sync: (
    options?: table | nil,
    timeout_ms?: number | nil,
    order?: table | nil
  ) => any
  /**
    *Performs |vim.lsp.buf.formatting()| synchronously.
    *Useful for running on save, to make sure buffer is formatted prior to
    *being saved. {timeout_ms} is passed on to |vim.lsp.buf_request_sync()|.
    *@example
    *>
    *
    * autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_sync()
    *
    *<
    *@param options - (table|nil) with valid `FormattingOptions` entries
    *@param timeout_ms - (number) Request timeout
    
    */
  formatting_sync: (options?: table | nil, timeout_ms?: number) => any
  /**
    *Return all lenses for the given buffer
    *@param bufnr - (number) Buffer number. 0 can be used for the current buffer.
    
    */
  get: (bufnr?: number) => any
  /**
    *Get active clients.
    *@param filter - (table|nil) A table with key-value pairs used to filter the
                  returned clients. The available keys are:
                  • id (number): Only return clients with the given id
                  • bufnr (number): Only return clients attached to this
                    buffer
                  • name (string): Only return clients with the given name
    
    */
  get_active_clients: (filter?: table | nil) => any
  /**
    *Returns list of buffers attached to client_id.
    *@param client_id - (number) client id
    
    */
  get_buffers_by_client_id: (client_id?: number) => any
  /**
    *Gets a client by id, or nil if the id is invalid. The returned client may
    *not yet be fully initialized.
    *@param client_id - (number) client id
    
    */
  get_client_by_id: (client_id?: number) => any
  /**
    *Returns indentation size.
    *@param bufnr - (number|nil): Buffer handle, defaults to current
    
    */
  get_effective_tabstop: (bufnr?: number | nil) => any
  /**
    *Returns the log filename.
    
    */
  get_filename: () => any
  /**
    *Gets the current log level.
    
    */
  get_level: () => any
  /**
    *Gets the path of the logfile used by the LSP client.
    
    */
  get_log_path: () => any
  /**
    *Get the diagnostic namespace associated with an LSP client
    *|vim.diagnostic|.
    *@param client_id - (number) The id of the LSP client
    
    */
  get_namespace: (client_id?: number) => any
  /**
    *|lsp-handler| for the method "textDocument\/hover" >
    *
    * vim.lsp.handlers["textDocument\/hover"] = vim.lsp.with(
    *   vim.lsp.handlers.hover, {
    *     -- Use a sharp border with `FloatBorder` highlights
    *     border = "single"
    *   }
    * )
    *
    *<
    *@param _ -
    *@param result -
    *@param ctx -
    *@param config - (table) Configuration table.
                  • border: (default=nil)
                    • Add borders to the floating window
                    • See |nvim_open_win()|
    
    */
  hover: (_?: any, result?: any, ctx?: any, config?: table) => any
  /**
    *Lists all the implementations for the symbol under the cursor in the
    *quickfix window.
    *@param options - (table|nil) additional options
                   • on_list: (function) handler for list results. See
                     |lsp-on-list-handler|
    
    */
  implementation: (options?: table | nil) => any
  /**
    *Lists all the call sites of the symbol under the cursor in the |quickfix|
    *window. If the symbol can resolve to multiple items, the user can pick one
    *in the |inputlist|.
    
    */
  incoming_calls: () => any
  /**
    *Jumps to a location.
    *@param location - (table) (`Location`|`LocationLink`)
    *@param offset_encoding - (string) utf-8|utf-16|utf-32 (required)
    *@param reuse_win - (boolean) Jump to existing window if buffer is
                           already opened.
    
    */
  jump_to_location: (location?: table, offset_encoding?: string, reuse_win?: boolean) => any
  /**
    *List workspace folders.
    
    */
  list_workspace_folders: () => any
  /**
    *Returns the items with the byte position calculated correctly and in
    *sorted order, for display in quickfix and location lists.
    *The result can be passed to the {list} argument of |setqflist()| or
    *|setloclist()|.
    *@param locations - (table) list of `Location`s or `LocationLink`s
    *@param offset_encoding - (string) offset_encoding for locations
                           utf-8|utf-16|utf-32
    
    */
  locations_to_items: (locations?: table, offset_encoding?: string) => any
  /**
    *Helper function to return nested values in language server settings
    *@param settings - a table of language server settings
    *@param section - a string indicating the field of the settings table
    
    */
  lookup_section: (settings?: any, section?: any) => any
  /**
    *Gets a new ClientCapabilities object describing the LSP client
    *capabilities.
    
    */
  make_client_capabilities: () => any
  /**
    *Creates a table with sensible default options for a floating window. The
    *table can be passed to |nvim_open_win()|.
    *@param width - (number) window width (in character cells)
    *@param height - (number) window height (in character cells)
    *@param opts - (table, optional)
                  • offset_x (number) offset to add to `col`
                  • offset_y (number) offset to add to `row`
                  • border (string or table) override `border`
                  • focusable (string or table) override `focusable`
                  • zindex (string or table) override `zindex`, defaults to 50
    
    */
  make_floating_popup_options: (width?: number, height?: number, opts?: table) => any
  /**
    *Creates a `DocumentFormattingParams` object for the current buffer and
    *cursor position.
    *@param options - (table|nil) with valid `FormattingOptions` entries
    
    */
  make_formatting_params: (options?: table | nil) => any
  /**
    *Using the given range in the current buffer, creates an object that is
    *similar to |vim.lsp.util.make_range_params()|.
    *@param start_pos - number[]|nil {row, col} mark-indexed position.
                           Defaults to the start of the last visual selection.
    *@param end_pos - number[]|nil {row, col} mark-indexed position.
                           Defaults to the end of the last visual selection.
    *@param bufnr - (number|nil) buffer handle or 0 for current,
                           defaults to current
    *@param offset_encoding - "utf-8"|"utf-16"|"utf-32"|nil defaults to
                           `offset_encoding` of first client of `bufnr`
    
    */
  make_given_range_params: (
    start_pos?: any,
    end_pos?: any,
    bufnr?: number | nil,
    offset_encoding?: any
  ) => any
  /**
    *Creates a `TextDocumentPositionParams` object for the current buffer and
    *cursor position.
    *@param window - number|nil: window handle or 0 for current,
                           defaults to current
    *@param offset_encoding - (string) utf-8|utf-16|utf-32|nil defaults to
                           `offset_encoding` of first client of buffer of
                           `window`
    
    */
  make_position_params: (window?: any, offset_encoding?: string) => any
  /**
    *Using the current position in the current buffer, creates an object that
    *can be used as a building block for several LSP requests, such as
    *`textDocument\/codeAction`, `textDocument\/colorPresentation`,
    *`textDocument\/rangeFormatting`.
    *@param window - number|nil: window handle or 0 for current,
                           defaults to current
    *@param offset_encoding - "utf-8"|"utf-16"|"utf-32"|nil defaults to
                           `offset_encoding` of first client of buffer of
                           `window`
    
    */
  make_range_params: (window?: any, offset_encoding?: any) => any
  /**
    *Creates a `TextDocumentIdentifier` object for the current buffer.
    *@param bufnr - number|nil: Buffer handle, defaults to current
    
    */
  make_text_document_params: (bufnr?: any) => any
  /**
    *Create the workspace params
    *@param added -
    *@param removed -
    
    */
  make_workspace_params: (added?: any, removed?: any) => any
  /**
    *Sends a notification to the LSP server.
    *@param method - (string) The invoked LSP method
    *@param params - (table|nil): Parameters for the invoked LSP method
    
    */
  notify: (method?: string, params?: table | nil) => any
  /**
    *Implements 'omnifunc' compatible LSP completion.
    *@param findstart - 0 or 1, decides behavior
    *@param base - If findstart=0, text to match against
    
    */
  omnifunc: (findstart?: any, base?: any) => any
  /**
    *|lsp-handler| for the method `textDocument\/codeLens`
    *@param result -
    *@param ctx -
    *@param _ -
    
    */
  on_codelens: (result?: any, ctx?: any, _?: any) => any
  /**
    *|lsp-handler| for the method "textDocument\/publishDiagnostics"
    *See |vim.diagnostic.config()| for configuration options. Handler-specific
    *configuration can be set using |vim.lsp.with()|: >
    *
    * vim.lsp.handlers["textDocument\/publishDiagnostics"] = vim.lsp.with(
    *   vim.lsp.diagnostic.on_publish_diagnostics, {
    *     -- Enable underline, use default values
    *     underline = true,
    *     -- Enable virtual text, override spacing to 4
    *     virtual_text = {
    *       spacing = 4,
    *     },
    *     -- Use a function to dynamically turn signs off
    *     -- and on, using buffer local variables
    *     signs = function(namespace, bufnr)
    *       return vim.b[bufnr].show_signs == true
    *     end,
    *     -- Disable a feature
    *     update_in_insert = false,
    *   }
    * )
    *
    *<
    *@param _ -
    *@param result -
    *@param ctx -
    *@param config - (table) Configuration table (see |vim.diagnostic.config()|).
    
    */
  on_publish_diagnostics: (_?: any, result?: any, ctx?: any, config?: table) => any
  /**
    *Shows contents in a floating window.
    *@param contents - (table) of lines to show in window
    *@param syntax - (string) of syntax to set for opened buffer
    *@param opts - (table) with optional fields (additional keys are passed
                    on to |vim.api.nvim_open_win()|)
                    • height: (number) height of floating window
                    • width: (number) width of floating window
                    • wrap: (boolean, default true) wrap long lines
                    • wrap_at: (number) character to wrap at for computing
                      height when wrap is enabled
                    • max_width: (number) maximal width of floating window
                    • max_height: (number) maximal height of floating window
                    • pad_top: (number) number of lines to pad contents at top
                    • pad_bottom: (number) number of lines to pad contents at
                      bottom
                    • focus_id: (string) if a popup with this id is opened,
                      then focus it
                    • close_events: (table) list of events that closes the
                      floating window
                    • focusable: (boolean, default true) Make float focusable
                    • focus: (boolean, default true) If `true`, and if
                      {focusable} is also `true`, focus an existing floating
                      window with the same {focus_id}
    
    */
  open_floating_preview: (contents?: table, syntax?: string, opts?: table) => any
  /**
    *Lists all the items that are called by the symbol under the cursor in the
    *|quickfix| window. If the symbol can resolve to multiple items, the user
    *can pick one in the |inputlist|.
    
    */
  outgoing_calls: () => any
  /**
    *Parses snippets in a completion entry.
    *@param input - (string) unparsed snippet
    
    */
  parse_snippet: (input?: string) => any
  /**
    *Previews a location in a floating window
    *behavior depends on type of location:
    *• for Location, range is shown (e.g., function definition)
    *• for LocationLink, targetRange is shown (e.g., body of function
    *  definition)
    *
    *@param location - a single `Location` or `LocationLink`
    *@param opts -
    
    */
  preview_location: (location?: any, opts?: any) => any
  /**
    *Performs |vim.lsp.buf.code_action()| for a given range.
    *@param context - (table|nil) `CodeActionContext` of the LSP specification:
                     • diagnostics: (table|nil) LSP`Diagnostic[]` . Inferred from the current position if not provided.
                     • only: (table|nil) List of LSP `CodeActionKind`s used to
                       filter the code actions. Most language servers support
                       values like `refactor` or `quickfix`.
    *@param start_pos - ({number, number}, optional) mark-indexed position.
                     Defaults to the start of the last visual selection.
    *@param end_pos - ({number, number}, optional) mark-indexed position.
                     Defaults to the end of the last visual selection.
    
    */
  range_code_action: (
    context?: table | nil,
    start_pos?: [number, number],
    end_pos?: [number, number]
  ) => any
  /**
    *Formats a given range.
    *@param options - Table with valid `FormattingOptions` entries.
    *@param start_pos - ({number, number}, optional) mark-indexed position.
                     Defaults to the start of the last visual selection.
    *@param end_pos - ({number, number}, optional) mark-indexed position.
                     Defaults to the end of the last visual selection.
    
    */
  range_formatting: (
    options?: any,
    start_pos?: [number, number],
    end_pos?: [number, number]
  ) => any
  /**
    *Lists all the references to the symbol under the cursor in the quickfix
    *window.
    *@param context - (table) Context for the request
    *@param options - (table|nil) additional options
                   • on_list: (function) handler for list results. See
                     |lsp-on-list-handler|
    
    */
  references: (context?: table, options?: table | nil) => any
  /**
    *Refresh the codelens for the current buffer
    *It is recommended to trigger this using an autocmd or via keymap.
    *>
    *  autocmd BufEnter,CursorHold,InsertLeave <buffer> lua vim.lsp.codelens.refresh()
    *
    *<
    
    */
  refresh: () => any
  /**
    *Remove the folder at path from the workspace folders. If {path} is not
    *provided, the user will be prompted for a path using |input()|.
    *@param workspace_folder -
    
    */
  remove_workspace_folder: (workspace_folder?: any) => any
  /**
    *Rename old_fname to new_fname
    *@param old_fname -
    *@param new_fname -
    *@param opts - (table)
    
    */
  rename: (old_fname?: any, new_fname?: any, opts?: table) => any
  /**
    *Sends a request to the LSP server and runs {callback} upon response.
    *@param method - (string) The invoked LSP method
    *@param params - (table|nil) Parameters for the invoked LSP
                                 method
    *@param callback - (function) Callback to invoke
    *@param notify_reply_callback - (function|nil) Callback to invoke as soon as
                                 a request is no longer pending
    
    */
  request: (
    method?: string,
    params?: table | nil,
    callback?: function,
    notify_reply_callback?: function | nil
  ) => any
  /**
    *Creates a normalized object describing LSP server capabilities.
    *@param server_capabilities - (table) Table of capabilities supported by the
                               server
    
    */
  resolve_capabilities: (server_capabilities?: table) => any
  /**
    *Creates an RPC response object\/table.
    *@param code - (number) RPC error code defined in
                   `vim.lsp.protocol.ErrorCodes`
    *@param message - (string|nil) arbitrary message to send to server
    *@param data - any|nil arbitrary data to send to server
    
    */
  rpc_response_error: (code?: number, message?: string | nil, data?: any) => any
  /**
    *Run the code lens in the current line
    
    */
  run: () => any
  /**
    *Store lenses for a specific buffer and client
    *@param lenses - (table) of lenses to store (`CodeLens[] | null`)
    *@param bufnr - (number)
    *@param client_id - (number)
    
    */
  save: (lenses?: table, bufnr?: number, client_id?: number) => any
  /**
    *Checks whether the language servers attached to the current buffer are
    *ready.
    
    */
  server_ready: () => any
  /**
    *Sets formatting function used to format logs
    *@param handle - (function) function to apply to logging arguments, pass
                  vim.inspect for multi-line formatting
    
    */
  set_format_func: (handle?: function) => any
  /**
    *Sets the current log level.
    *@param level - (string or number) One of `vim.lsp.log.levels`
    
    */
  set_level: (level?: string | number) => any
  /**
    *Replaces text in a range with new text.
    *CAUTION: Changes in-place!
    *@param lines - (table) Original list of strings
    *@param A - (table) Start position; a 2-tuple of {line, col} numbers
    *@param B - (table) End position; a 2-tuple of {line, col} numbers
    *@param new_lines - A list of strings to replace the original
    
    */
  set_lines: (lines?: table, A?: table, B?: table, new_lines?: any) => any
  /**
    *Sets the global log level for LSP logging.
    *Levels by name: "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "OFF"
    *Level numbers begin with "TRACE" at 0
    *Use `lsp.log_levels` for reverse lookup.
    *@param level - [number|string] the case insensitive level name or number
    
    */
  set_log_level: (level?: any) => any
  /**
    *Checks whether the level is sufficient for logging.
    *@param level - (number) log level
    
    */
  should_log: (level?: number) => any
  /**
    *|lsp-handler| for the method "textDocument\/signatureHelp". The active
    *parameter is highlighted with |hl-LspSignatureActiveParameter|. >
    *
    * vim.lsp.handlers["textDocument\/signatureHelp"] = vim.lsp.with(
    *   vim.lsp.handlers.signature_help, {
    *     -- Use a sharp border with `FloatBorder` highlights
    *     border = "single"
    *   }
    * )
    *
    *<
    *@param _ -
    *@param result -
    *@param ctx -
    *@param config - (table) Configuration table.
                  • border: (default=nil)
                    • Add borders to the floating window
                    • See |vim.api.nvim_open_win()|
    
    */
  signature_help: (_?: any, result?: any, ctx?: any, config?: table) => any
  /**
    *Starts an LSP server process and create an LSP RPC client object to
    *interact with it. Communication with the spawned process happens via
    *stdio. For communication via TCP, spawn a process manually and use
    *|vim.lsp.rpc.connect|
    *@param cmd - (string) Command to start the LSP server.
    *@param cmd_args - (table) List of additional string arguments to
                              pass to {cmd}.
    *@param dispatchers - (table|nil) Dispatchers for LSP message types.
                              Valid dispatcher names are:
                              • `"notification"`
                              • `"server_request"`
                              • `"on_error"`
                              • `"on_exit"`
    *@param extra_spawn_params - (table|nil) Additional context for the LSP
                              server process. May contain:
                              • {cwd} (string) Working directory for the LSP
                                server process
                              • {env} (table) Additional environment variables
                                for LSP server process
    
    */
  start: (
    cmd?: string,
    cmd_args?: table,
    dispatchers?: table | nil,
    extra_spawn_params?: table | nil
  ) => any
  /**
    *Starts and initializes a client with the given configuration.
    *Parameter `cmd` is required.
    *The following parameters describe fields in the {config} table.
    *@param config -
    
    */
  start_client: (config?: any) => any
  /**
    *Stops a client(s).
    *You can also use the `stop()` function on a |vim.lsp.client| object. To
    *stop all clients:
    *>
    *
    * vim.lsp.stop_client(vim.lsp.get_active_clients())
    *
    *<
    *By default asks the server to shutdown, unless stop was requested already
    *for this client, then force-shutdown is attempted.
    *@param client_id - client id or |vim.lsp.client| object, or list thereof
    *@param force - (boolean) (optional) shutdown forcefully
    
    */
  stop_client: (client_id?: any, force?: boolean) => any
  /**
    *Converts markdown into syntax highlighted regions by stripping the code
    *blocks and converting them into highlighted code. This will by default
    *insert a blank line separator after those code block regions to improve
    *readability.
    *This method configures the given buffer and returns the lines to set.
    *If you want to open a popup with fancy markdown, use
    *`open_floating_preview` instead
    *@param bufnr -
    *@param contents - (table) of lines to show in window
    *@param opts - dictionary with optional fields
                    • height of floating window
                    • width of floating window
                    • wrap_at character to wrap at for computing height
                    • max_width maximal width of floating window
                    • max_height maximal height of floating window
                    • pad_top number of lines to pad contents at top
                    • pad_bottom number of lines to pad contents at bottom
                    • separator insert separator after code block
    
    */
  stylize_markdown: (bufnr?: any, contents?: table, opts?: any) => any
  /**
    *Converts symbols to quickfix list items.
    *@param symbols - DocumentSymbol[] or SymbolInformation[]
    *@param bufnr -
    
    */
  symbols_to_items: (symbols?: any, bufnr?: any) => any
  /**
    *Provides an interface between the built-in client and 'tagfunc'.
    *When used with normal mode commands (e.g. |CTRL-]|) this will invoke the
    *"textDocument\/definition" LSP method to find the tag under the cursor.
    *Otherwise, uses "workspace\/symbol". If no results are returned from any
    *LSP servers, falls back to using built-in tags.
    *@param args -
    
    */
  tagfunc: (...args: any[]) => any
  /**
    *Turns the result of a `textDocument\/completion` request into
    *vim-compatible |complete-items|.
    *@param result - The result of a `textDocument/completion` call, e.g. from
                  |vim.lsp.buf.completion()|, which may be one of
                  `CompletionItem[]`, `CompletionList` or `null`
    *@param prefix - (string) the prefix to filter the completion items
    
    */
  text_document_completion_list_to_complete_items: (result?: any, prefix?: string) => any
  /**
    *Removes empty lines from the beginning and end.
    *@param lines - (table) list of lines to trim
    
    */
  trim_empty_lines: (lines?: table) => any
  /**
    *Accepts markdown lines and tries to reduce them to a filetype if they
    *comprise just a single code block.
    *CAUTION: Modifies the input in-place!
    *@param lines - (table) list of lines
    
    */
  try_trim_markdown_code_blocks: (lines?: table) => any
  /**
    *Jumps to the definition of the type of the symbol under the cursor.
    *@param options - (table|nil) additional options
                   • reuse_win: (boolean) Jump to existing window if buffer is
                     already open.
                   • on_list: (function) handler for list results. See
                     |lsp-on-list-handler|
    
    */
  type_definition: (options?: table | nil) => any
  /**
    *Function to manage overriding defaults for LSP handlers.
    *@param handler - (function) See |lsp-handler|
    *@param override_config - (table) Table containing the keys to override
                           behavior of the {handler}
    
    */
  with: (handler?: function, override_config?: table) => any
  /**
    *Lists all symbols in the current workspace in the quickfix window.
    *The list is filtered against {query}; if the argument is omitted from the
    *call, the user is prompted to enter a string on the command line. An empty
    *string means no filtering is done.
    *@param query - (string, optional)
    *@param options - (table|nil) additional options
                   • on_list: (function) handler for list results. See
                     |lsp-on-list-handler|
    
    */
  workspace_symbol: (query?: string, options?: table | nil) => any
}
/** @noSelf */
declare interface Vim {
  lsp: Lsp
}
