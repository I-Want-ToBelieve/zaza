/* eslint-disable @typescript-eslint/ban-types */
/** @noSelf */
interface Api {
  /**
    *
    *@param buffer -
    *@param first -
    *@param last -
    
    */
  nvim__buf_redraw_range: (buffer?: buffer, first?: integer, last?: integer) => any
  /**
    *
    *@param buffer -
    
    */
  nvim__buf_stats: (buffer?: buffer) => any
  /**
    *
    *@param ns_id -
    *@param arena -
    
    */
  nvim__get_hl_defs: (ns_id?: integer, arena?: arena) => any
  /**
    *
    
    */
  nvim__get_lib_dir: () => any
  /**
    *Find files in runtime directories
    *@param pat - pattern of files to search for
    *@param all - whether to return all matches or only the first
    *@param opts - is_lua: only search lua subdirs
    
    */
  nvim__get_runtime: (pat?: array, all?: boolean, opts?: any) => any
  /**
    *Returns object given as argument.
    *This API function is used for testing. One should not rely on its presence
    *in plugins.
    *@param obj - Object to return.
    
    */
  nvim__id: (obj?: any) => any
  /**
    *Returns array given as argument.
    *This API function is used for testing. One should not rely on its presence
    *in plugins.
    *@param arr - Array to return.
    
    */
  nvim__id_array: (arr?: array) => any
  /**
    *Returns dictionary given as argument.
    *This API function is used for testing. One should not rely on its presence
    *in plugins.
    *@param dct - Dictionary to return.
    
    */
  nvim__id_dictionary: (dct?: dictionary) => any
  /**
    *Returns floating-point value given as argument.
    *This API function is used for testing. One should not rely on its presence
    *in plugins.
    *@param flt - Value to return.
    
    */
  nvim__id_float: (flt?: float) => any
  /**
    *
    *@param grid -
    *@param row -
    *@param col -
    *@param arena -
    
    */
  nvim__inspect_cell: (grid?: integer, row?: integer, col?: integer, arena?: arena) => any
  /**
    *
    
    */
  nvim__runtime_inspect: () => any
  /**
    *
    *@param path -
    
    */
  nvim__screenshot: (path?: string) => any
  /**
    *Gets internal stats.
    
    */
  nvim__stats: () => any
  /**
    *
    *@param str -
    
    */
  nvim__unpack: (str?: string) => any
  /**
    *Adds a highlight to buffer.
    *Useful for plugins that dynamically generate highlights to a buffer (like
    *a semantic highlighter or linter). The function adds a single highlight to
    *a buffer. Unlike |matchaddpos()| highlights follow changes to line
    *numbering (as lines are inserted\/removed above the highlighted line), like
    *signs and marks do.
    *Namespaces are used for batch deletion\/updating of a set of highlights. To
    *create a namespace, use |nvim_create_namespace()| which returns a
    *namespace id. Pass it in to this function as `ns_id` to add highlights to
    *the namespace. All highlights in the same namespace can then be cleared
    *with single call to |nvim_buf_clear_namespace()|. If the highlight never
    *will be deleted by an API call, pass `ns_id = -1`.
    *As a shorthand, `ns_id = 0` can be used to create a new namespace for the
    *highlight, the allocated id is then returned. If `hl_group` is the empty
    *string no highlight is added, but a new `ns_id` is still returned. This is
    *supported for backwards compatibility, new code should use
    *|nvim_create_namespace()| to create a new empty namespace.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param ns_id - namespace to use or -1 for ungrouped highlight
    *@param hl_group - Name of the highlight group to use
    *@param line - Line to highlight (zero-indexed)
    *@param col_start - Start of (byte-indexed) column range to highlight
    *@param col_end - End of (byte-indexed) column range to highlight, or -1 to
                     highlight to end of line
    
    */
  nvim_buf_add_highlight: (
    buffer?: buffer,
    ns_id?: integer,
    hl_group?: string,
    line?: integer,
    col_start?: integer,
    col_end?: integer
  ) => any
  /**
    *Activates buffer-update events on a channel, or as Lua callbacks.
    *Example (Lua): capture buffer updates in a global `events` variable (use "print(vim.inspect(events))" to see its contents): >
    *  events = {}
    *  vim.api.nvim_buf_attach(0, false, {
    *    on_lines=function(...) table.insert(events, {...}) end})
    *
    *<
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param send_buffer - True if the initial notification should contain the
                       whole buffer: first notification will be
                       `nvim_buf_lines_event`. Else the first notification
                       will be `nvim_buf_changedtick_event`. Not for Lua
                       callbacks.
    *@param opts - Optional parameters.
                       • on_lines: Lua callback invoked on change. Return `true` to detach. Args:
                         • the string "lines"
                         • buffer handle
                         • b:changedtick
                         • first line that changed (zero-indexed)
                         • last line that was changed
                         • last line in the updated range
                         • byte count of previous contents
                         • deleted_codepoints (if `utf_sizes` is true)
                         • deleted_codeunits (if `utf_sizes` is true)
    
                       • on_bytes: lua callback invoked on change. This
                         callback receives more granular information about the
                         change compared to on_lines. Return `true` to detach. Args:
                         • the string "bytes"
                         • buffer handle
                         • b:changedtick
                         • start row of the changed text (zero-indexed)
                         • start column of the changed text
                         • byte offset of the changed text (from the start of
                           the buffer)
                         • old end row of the changed text
                         • old end column of the changed text
                         • old end byte length of the changed text
                         • new end row of the changed text
                         • new end column of the changed text
                         • new end byte length of the changed text
    
                       • on_changedtick: Lua callback invoked on changedtick
                         increment without text change. Args:
                         • the string "changedtick"
                         • buffer handle
                         • b:changedtick
    
                       • on_detach: Lua callback invoked on detach. Args:
                         • the string "detach"
                         • buffer handle
    
                       • on_reload: Lua callback invoked on reload. The entire
                         buffer content should be considered changed. Args:
                         • the string "reload"
                         • buffer handle
    
                       • utf_sizes: include UTF-32 and UTF-16 size of the
                         replaced region, as args to `on_lines`.
                       • preview: also attach to command preview (i.e.
                         'inccommand') events.
    
    */
  nvim_buf_attach: (buffer?: buffer, send_buffer?: boolean, opts?: any) => any
  /**
    *call a function with buffer as temporary current buffer
    *This temporarily switches current buffer to "buffer". If the current
    *window already shows "buffer", the window is not switched If a window
    *inside the current tabpage (including a float) already shows the buffer
    *One of these windows will be set as current window temporarily. Otherwise
    *a temporary scratch window (called the "autocmd window" for historical
    *reasons) will be used.
    *This is useful e.g. to call vimL functions that only work with the current
    *buffer\/window currently, like |termopen()|.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param fun - Function to call inside the buffer (currently lua callable
                  only)
    
    */
  nvim_buf_call: (buffer?: buffer, fun?: luaref) => any
  /**
    *Clears namespaced objects (highlights, extmarks, virtual text) from a
    *region.
    *Lines are 0-indexed. |api-indexing| To clear the namespace in the entire
    *buffer, specify line_start=0 and line_end=-1.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param ns_id - Namespace to clear, or -1 to clear all namespaces.
    *@param line_start - Start of range of lines to clear
    *@param line_end - End of range of lines to clear (exclusive) or -1 to
                      clear to end of buffer.
    
    */
  nvim_buf_clear_namespace: (
    buffer?: buffer,
    ns_id?: integer,
    line_start?: integer,
    line_end?: integer
  ) => any
  /**
    *Create a new user command |user-commands| in the given buffer.
    *@param buffer - Buffer handle, or 0 for current buffer.
    *@param name -
    *@param command -
    *@param opts -
    
    */
  nvim_buf_create_user_command: (
    buffer?: buffer,
    name?: string,
    command?: any,
    opts?: any
  ) => any
  /**
    *Removes an extmark.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param ns_id - Namespace id from |nvim_create_namespace()|
    *@param id - Extmark id
    
    */
  nvim_buf_del_extmark: (buffer?: buffer, ns_id?: integer, id?: integer) => any
  /**
    *Unmaps a buffer-local |mapping| for the given mode.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param mode -
    *@param lhs -
    
    */
  nvim_buf_del_keymap: (buffer?: buffer, mode?: string, lhs?: string) => any
  /**
    *Deletes a named mark in the buffer. See |mark-motions|.
    *
    *Note:
    *    only deletes marks set in the buffer, if the mark is not set in the
    *    buffer it will return false.
    *
    *@param buffer - Buffer to set the mark on
    *@param name - Mark name
    
    */
  nvim_buf_del_mark: (buffer?: buffer, name?: string) => any
  /**
    *Delete a buffer-local user-defined command.
    *Only commands created with |:command-buffer| or
    *|nvim_buf_create_user_command()| can be deleted with this function.
    *@param buffer - Buffer handle, or 0 for current buffer.
    *@param name - Name of the command to delete.
    
    */
  nvim_buf_del_user_command: (buffer?: buffer, name?: string) => any
  /**
    *Removes a buffer-scoped (b:) variable
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param name - Variable name
    
    */
  nvim_buf_del_var: (buffer?: buffer, name?: string) => any
  /**
    *Deletes the buffer. See |:bwipeout|
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param opts - Optional parameters. Keys:
                  • force: Force deletion and ignore unsaved changes.
                  • unload: Unloaded only, do not delete. See |:bunload|
    
    */
  nvim_buf_delete: (buffer?: buffer, opts?: dictionary) => any
  /**
    *Deactivates buffer-update events on the channel.
    *@param buffer - Buffer handle, or 0 for current buffer
    
    */
  nvim_buf_detach: (buffer?: buffer) => any
  /**
    *Gets a changed tick of a buffer
    *@param buffer - Buffer handle, or 0 for current buffer
    
    */
  nvim_buf_get_changedtick: (buffer?: buffer) => any
  /**
    *Gets a map of buffer-local |user-commands|.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param opts - Optional parameters. Currently not used.
    
    */
  nvim_buf_get_commands: (buffer?: buffer, opts?: any) => any
  /**
    *Gets the position (0-indexed) of an extmark.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param ns_id - Namespace id from |nvim_create_namespace()|
    *@param id - Extmark id
    *@param opts - Optional parameters. Keys:
                  • details: Whether to include the details dict
    
    */
  nvim_buf_get_extmark_by_id: (
    buffer?: buffer,
    ns_id?: integer,
    id?: integer,
    opts?: dictionary
  ) => any
  /**
    *Gets extmarks in "traversal order" from a |charwise| region defined by
    *buffer positions (inclusive, 0-indexed |api-indexing|).
    *Region can be given as (row,col) tuples, or valid extmark ids (whose
    *positions define the bounds). 0 and -1 are understood as (0,0) and (-1,-1)
    *respectively, thus the following are equivalent:
    *>
    *  nvim_buf_get_extmarks(0, my_ns, 0, -1, {})
    *  nvim_buf_get_extmarks(0, my_ns, [0,0], [-1,-1], {})
    *
    *<
    *If `end` is less than `start`, traversal works backwards. (Useful with
    *`limit`, to get the first marks prior to a given position.)
    *@example
    *>
    *  local a   = vim.api
    *  local pos = a.nvim_win_get_cursor(0)
    *  local ns  = a.nvim_create_namespace('my-plugin')
    *  -- Create new extmark at line 1, column 1.
    *  local m1  = a.nvim_buf_set_extmark(0, ns, 0, 0, {})
    *  -- Create new extmark at line 3, column 1.
    *  local m2  = a.nvim_buf_set_extmark(0, ns, 0, 2, {})
    *  -- Get extmarks only from line 3.
    *  local ms  = a.nvim_buf_get_extmarks(0, ns, {2,0}, {2,0}, {})
    *  -- Get all marks in this buffer + namespace.
    *  local all = a.nvim_buf_get_extmarks(0, ns, 0, -1, {})
    *  print(vim.inspect(ms))
    *
    *<
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param ns_id - Namespace id from |nvim_create_namespace()|
    *@param start - Start of range: a 0-indexed (row, col) or valid extmark id
                  (whose position defines the bound). |api-indexing|
    *@param end - End of range (inclusive): a 0-indexed (row, col) or valid
                  extmark id (whose position defines the bound).
                  |api-indexing|
    *@param opts - Optional parameters. Keys:
                  • limit: Maximum number of marks to return
                  • details Whether to include the details dict
    
    */
  nvim_buf_get_extmarks: (
    buffer?: buffer,
    ns_id?: integer,
    start?: any,
    end?: any,
    opts?: dictionary
  ) => any
  /**
    *Gets a list of buffer-local |mapping| definitions.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param mode - Mode short-name ("n", "i", "v", ...)
    
    */
  nvim_buf_get_keymap: (buffer?: buffer, mode?: string) => any
  /**
    *Gets a line-range from the buffer.
    *Indexing is zero-based, end-exclusive. Negative indices are interpreted as
    *length+1+index: -1 refers to the index past the end. So to get the last
    *element use start=-2 and end=-1.
    *Out-of-bounds indices are clamped to the nearest valid value, unless
    *`strict_indexing` is set.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param start - First line index
    *@param end - Last line index, exclusive
    *@param strict_indexing - Whether out-of-bounds should be an error.
    
    */
  nvim_buf_get_lines: (
    buffer?: buffer,
    start?: integer,
    end?: integer,
    strict_indexing?: boolean
  ) => any
  /**
    *Returns a tuple (row,col) representing the position of the named mark. See
    *|mark-motions|.
    *Marks are (1,0)-indexed. |api-indexing|
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param name - Mark name
    
    */
  nvim_buf_get_mark: (buffer?: buffer, name?: string) => any
  /**
    *Gets the full file name for the buffer
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param arena -
    
    */
  nvim_buf_get_name: (buffer?: buffer, arena?: arena) => any
  /**
    *Returns the byte offset of a line (0-indexed). |api-indexing|
    *Line 1 (index=0) has offset 0. UTF-8 bytes are counted. EOL is one byte.
    *'fileformat' and 'fileencoding' are ignored. The line index just after the
    *last line gives the total byte-count of the buffer. A final EOL byte is
    *counted if it would be written, see 'eol'.
    *Unlike |line2byte()|, throws error for out-of-bounds indexing. Returns -1
    *for unloaded buffer.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param index - Line index
    
    */
  nvim_buf_get_offset: (buffer?: buffer, index?: integer) => any
  /**
    *Gets a buffer option value
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param name - Option name
    
    */
  nvim_buf_get_option: (buffer?: buffer, name?: string) => any
  /**
    *Gets a range from the buffer.
    *This differs from |nvim_buf_get_lines()| in that it allows retrieving only
    *portions of a line.
    *Indexing is zero-based. Row indices are end-inclusive, and column indices
    *are end-exclusive.
    *Prefer |nvim_buf_get_lines()| when retrieving entire lines.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param start_row - First line index
    *@param start_col - Starting column (byte offset) on first line
    *@param end_row - Last line index, inclusive
    *@param end_col - Ending column (byte offset) on last line, exclusive
    *@param opts - Optional parameters. Currently unused.
    
    */
  nvim_buf_get_text: (
    buffer?: buffer,
    start_row?: integer,
    start_col?: integer,
    end_row?: integer,
    end_col?: integer,
    opts?: dictionary
  ) => any
  /**
    *Gets a buffer-scoped (b:) variable.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param name - Variable name
    
    */
  nvim_buf_get_var: (buffer?: buffer, name?: string) => any
  /**
    *Checks if a buffer is valid and loaded. See |api-buffer| for more info
    *about unloaded buffers.
    *@param buffer - Buffer handle, or 0 for current buffer
    
    */
  nvim_buf_is_loaded: (buffer?: buffer) => any
  /**
    *Checks if a buffer is valid.
    *
    *Note:
    *    Even if a buffer is valid it may have been unloaded. See |api-buffer|
    *    for more info about unloaded buffers.
    *
    *@param buffer - Buffer handle, or 0 for current buffer
    
    */
  nvim_buf_is_valid: (buffer?: buffer) => any
  /**
    *Returns the number of lines in the given buffer.
    *@param buffer - Buffer handle, or 0 for current buffer
    
    */
  nvim_buf_line_count: (buffer?: buffer) => any
  /**
    *Creates or updates an extmark.
    *By default a new extmark is created when no id is passed in, but it is
    *also possible to create a new mark by passing in a previously unused id or
    *move an existing mark by passing in its id. The caller must then keep
    *track of existing and unused ids itself. (Useful over RPC, to avoid
    *waiting for the return value.)
    *Using the optional arguments, it is possible to use this to highlight a
    *range of text, and also to associate virtual text to the mark.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param ns_id - Namespace id from |nvim_create_namespace()|
    *@param line - Line where to place the mark, 0-based. |api-indexing|
    *@param col - Column where to place the mark, 0-based. |api-indexing|
    *@param opts - Optional parameters.
                  • id : id of the extmark to edit.
                  • end_row : ending line of the mark, 0-based inclusive.
                  • end_col : ending col of the mark, 0-based exclusive.
                  • hl_group : name of the highlight group used to highlight
                    this mark.
                  • hl_eol : when true, for a multiline highlight covering the
                    EOL of a line, continue the highlight for the rest of the
                    screen line (just like for diff and cursorline highlight).
                  • virt_text : virtual text to link to this mark. A list of
                    [text, highlight] tuples, each representing a text chunk
                    with specified highlight. `highlight` element can either
                    be a a single highlight group, or an array of multiple
                    highlight groups that will be stacked (highest priority
                    last). A highlight group can be supplied either as a
                    string or as an integer, the latter which can be obtained
                    using |nvim_get_hl_id_by_name|.
                  • virt_text_pos : position of virtual text. Possible values:
                    • "eol": right after eol character (default)
                    • "overlay": display over the specified column, without
                      shifting the underlying text.
                    • "right_align": display right aligned in the window.
    
                  • virt_text_win_col : position the virtual text at a fixed
                    window column (starting from the first text column)
                  • virt_text_hide : hide the virtual text when the background
                    text is selected or hidden due to horizontal scroll
                    'nowrap'
                  • hl_mode : control how highlights are combined with the
                    highlights of the text. Currently only affects virt_text
                    highlights, but might affect `hl_group` in later versions.
                    • "replace": only show the virt_text color. This is the
                      default
                    • "combine": combine with background text color
                    • "blend": blend with background text color.
    
                  • virt_lines : virtual lines to add next to this mark This
                    should be an array over lines, where each line in turn is
                    an array over [text, highlight] tuples. In general, buffer
                    and window options do not affect the display of the text.
                    In particular 'wrap' and 'linebreak' options do not take
                    effect, so the number of extra screen lines will always
                    match the size of the array. However the 'tabstop' buffer
                    option is still used for hard tabs. By default lines are
                    placed below the buffer line containing the mark.
                  • virt_lines_above: place virtual lines above instead.
                  • virt_lines_leftcol: Place extmarks in the leftmost column
                    of the window, bypassing sign and number columns.
                  • ephemeral : for use with |nvim_set_decoration_provider|
                    callbacks. The mark will only be used for the current
                    redraw cycle, and not be permantently stored in the
                    buffer.
                  • right_gravity : boolean that indicates the direction the
                    extmark will be shifted in when new text is inserted (true
                    for right, false for left). defaults to true.
                  • end_right_gravity : boolean that indicates the direction
                    the extmark end position (if it exists) will be shifted in
                    when new text is inserted (true for right, false for
                    left). Defaults to false.
                  • priority: a priority value for the highlight group or sign
                    attribute. For example treesitter highlighting uses a
                    value of 100.
                  • strict: boolean that indicates extmark should not be
                    placed if the line or column value is past the end of the
                    buffer or end of the line respectively. Defaults to true.
                  • sign_text: string of length 1-2 used to display in the
                    sign column. Note: ranges are unsupported and decorations
                    are only applied to start_row
                  • sign_hl_group: name of the highlight group used to
                    highlight the sign column text. Note: ranges are
                    unsupported and decorations are only applied to start_row
                  • number_hl_group: name of the highlight group used to
                    highlight the number column. Note: ranges are unsupported
                    and decorations are only applied to start_row
                  • line_hl_group: name of the highlight group used to
                    highlight the whole line. Note: ranges are unsupported and
                    decorations are only applied to start_row
                  • cursorline_hl_group: name of the highlight group used to
                    highlight the line when the cursor is on the same line as
                    the mark and 'cursorline' is enabled. Note: ranges are
                    unsupported and decorations are only applied to start_row
                  • conceal: string which should be either empty or a single
                    character. Enable concealing similar to |:syn-conceal|.
                    When a character is supplied it is used as |:syn-cchar|.
                    "hl_group" is used as highlight for the cchar if provided,
                    otherwise it defaults to |hl-Conceal|.
                  • spell: boolean indicating that spell checking should be
                    performed within this extmark
                  • ui_watched: boolean that indicates the mark should be
                    drawn by a UI. When set, the UI will receive win_extmark
                    events. Note: the mark is positioned by virt_text
                    attributes. Can be used together with virt_text.
    
    */
  nvim_buf_set_extmark: (
    buffer?: buffer,
    ns_id?: integer,
    line?: integer,
    col?: integer,
    opts?: any
  ) => any
  /**
    *Sets a buffer-local |mapping| for the given mode.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param mode -
    *@param lhs -
    *@param rhs -
    *@param opts -
    
    */
  nvim_buf_set_keymap: (
    buffer?: buffer,
    mode?: string,
    lhs?: string,
    rhs?: string,
    opts?: any
  ) => any
  /**
    *Sets (replaces) a line-range in the buffer.
    *Indexing is zero-based, end-exclusive. Negative indices are interpreted as
    *length+1+index: -1 refers to the index past the end. So to change or
    *delete the last element use start=-2 and end=-1.
    *To insert lines at a given index, set `start` and `end` to the same index.
    *To delete a range of lines, set `replacement` to an empty array.
    *Out-of-bounds indices are clamped to the nearest valid value, unless
    *`strict_indexing` is set.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param start - First line index
    *@param end - Last line index, exclusive
    *@param strict_indexing - Whether out-of-bounds should be an error.
    *@param replacement - Array of lines to use as replacement
    
    */
  nvim_buf_set_lines: (
    buffer?: buffer,
    start?: integer,
    end?: integer,
    strict_indexing?: boolean,
    replacement?: any
  ) => any
  /**
    *Sets a named mark in the given buffer, all marks are allowed
    *file\/uppercase, visual, last change, etc. See |mark-motions|.
    *Marks are (1,0)-indexed. |api-indexing|
    *
    *Note:
    *    Passing 0 as line deletes the mark
    *
    *@param buffer - Buffer to set the mark on
    *@param name - Mark name
    *@param line - Line number
    *@param col - Column/row number
    *@param opts - Optional parameters. Reserved for future use.
    
    */
  nvim_buf_set_mark: (
    buffer?: buffer,
    name?: string,
    line?: integer,
    col?: integer,
    opts?: dictionary
  ) => any
  /**
    *Sets the full file name for a buffer
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param name - Buffer name
    
    */
  nvim_buf_set_name: (buffer?: buffer, name?: string) => any
  /**
    *Sets a buffer option value. Passing `nil` as value deletes the option
    *(only works if there's a global fallback)
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param name - Option name
    *@param value - Option value
    
    */
  nvim_buf_set_option: (buffer?: buffer, name?: string, value?: any) => any
  /**
    *Sets (replaces) a range in the buffer
    *This is recommended over |nvim_buf_set_lines()| when only modifying parts
    *of a line, as extmarks will be preserved on non-modified parts of the
    *touched lines.
    *Indexing is zero-based. Row indices are end-inclusive, and column indices
    *are end-exclusive.
    *To insert text at a given `(row, column)` location, use `start_row =
    *end_row = row` and `start_col = end_col = col`. To delete the text in a
    *range, use `replacement = {}`.
    *Prefer |nvim_buf_set_lines()| if you are only adding or deleting entire
    *lines.
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param start_row - First line index
    *@param start_col - Starting column (byte offset) on first line
    *@param end_row - Last line index, inclusive
    *@param end_col - Ending column (byte offset) on last line, exclusive
    *@param replacement - Array of lines to use as replacement
    
    */
  nvim_buf_set_text: (
    buffer?: buffer,
    start_row?: integer,
    start_col?: integer,
    end_row?: integer,
    end_col?: integer,
    replacement?: any
  ) => any
  /**
    *Sets a buffer-scoped (b:) variable
    *@param buffer - Buffer handle, or 0 for current buffer
    *@param name - Variable name
    *@param value - Variable value
    
    */
  nvim_buf_set_var: (buffer?: buffer, name?: string, value?: any) => any
  /**
    *Calls many API methods atomically.
    *This has two main usages:
    *1. To perform several requests from an async context atomically, i.e.
    *   without interleaving redraws, RPC requests from other clients, or user
    *   interactions (however API methods may trigger autocommands or event
    *   processing which have such side effects, e.g. |:sleep| may wake
    *   timers).
    *2. To minimize RPC overhead (roundtrips) of a sequence of many requests.
    *
    *@param calls - an array of calls, where each call is described by an array
                 with two elements: the request name, and an array of
                 arguments.
    *@param arena -
    
    */
  nvim_call_atomic: (calls?: array, arena?: arena) => any
  /**
    *Calls a VimL |Dictionary-function| with the given arguments.
    *On execution error: fails with VimL error, updates v:errmsg.
    *@param dict - Dictionary, or String evaluating to a VimL |self| dict
    *@param fn - Name of the function defined on the VimL dict
    *@param args - Function arguments packed in an Array
    
    */
  nvim_call_dict_function: (dict?: any, fn?: string, args?: array) => any
  /**
    *Calls a VimL function with the given arguments.
    *On execution error: fails with VimL error, updates v:errmsg.
    *@param fn - Function to call
    *@param args - Function arguments packed in an Array
    
    */
  nvim_call_function: (fn?: string, args?: array) => any
  /**
    *Send data to channel `id`. For a job, it writes it to the stdin of the
    *process. For the stdio channel |channel-stdio|, it writes to Nvim's
    *stdout. For an internal terminal instance (|nvim_open_term()|) it writes
    *directly to terminal output. See |channel-bytes| for more information.
    *This function writes raw data, not RPC messages. If the channel was
    *created with `rpc=true` then the channel expects RPC messages, use
    *|vim.rpcnotify()| and |vim.rpcrequest()| instead.
    *@param chan - id of the channel
    *@param data - data to write. 8-bit clean: can contain NUL bytes.
    
    */
  nvim_chan_send: (chan?: integer, data?: string) => any
  /**
    *Clear all autocommands that match the corresponding {opts}. To delete a
    *particular autocmd, see |nvim_del_autocmd|.
    *@param opts - Parameters
                • event: (string|table) Examples:
                  • event: "pat1"
                  • event: { "pat1" }
                  • event: { "pat1", "pat2", "pat3" }
    
                • pattern: (string|table)
                  • pattern or patterns to match exactly.
                    • For example, if you have `*.py` as that pattern for the
                      autocmd, you must pass `*.py` exactly to clear it.
                      `test.py` will not match the pattern.
    
                  • defaults to clearing all patterns.
                  • NOTE: Cannot be used with {buffer}
    
                • buffer: (bufnr)
                  • clear only |autocmd-buflocal| autocommands.
                  • NOTE: Cannot be used with {pattern}
    
                • group: (string|int) The augroup name or id.
                  • NOTE: If not passed, will only delete autocmds not in any group.
    
    */
  nvim_clear_autocmds: (opts?: any) => any
  /**
    *Executes an Ex command.
    *Unlike |nvim_command()| this command takes a structured Dictionary instead
    *of a String. This allows for easier construction and manipulation of an Ex
    *command. This also allows for things such as having spaces inside a
    *command argument, expanding filenames in a command that otherwise doesn't
    *expand filenames, etc.
    *On execution error: fails with VimL error, updates v:errmsg.
    *@param cmd - Command to execute. Must be a Dictionary that can contain the
                same values as the return value of |nvim_parse_cmd()| except
                "addr", "nargs" and "nextcmd" which are ignored if provided.
                All values except for "cmd" are optional.
    *@param opts - Optional parameters.
                • output: (boolean, default false) Whether to return command
                  output.
    
    */
  nvim_cmd: (cmd?: any, opts?: any) => any
  /**
    *Executes an Ex command.
    *On execution error: fails with VimL error, updates v:errmsg.
    *Prefer using |nvim_cmd()| or |nvim_exec()| over this. To evaluate multiple
    *lines of Vim script or an Ex command directly, use |nvim_exec()|. To
    *construct an Ex command using a structured format and then execute it, use
    *|nvim_cmd()|. To modify an Ex command before evaluating it, use
    *|nvim_parse_cmd()| in conjunction with |nvim_cmd()|.
    *@param command - Ex command string
    
    */
  nvim_command: (command?: string) => any
  /**
    *Create or get an autocommand group |autocmd-groups|.
    *To get an existing group id, do: >
    *    local id = vim.api.nvim_create_augroup("MyGroup", {
    *        clear = false
    *    })
    *
    *<
    *@param name - String: The name of the group
    *@param opts - Dictionary Parameters
                • clear (bool) optional: defaults to true. Clear existing
                  commands if the group already exists |autocmd-groups|.
    
    */
  nvim_create_augroup: (name?: string, opts?: any) => any
  /**
    *Create an |autocommand|
    *The API allows for two (mutually exclusive) types of actions to be
    *executed when the autocommand triggers: a callback function (Lua or
    *Vimscript), or a command (like regular autocommands).
    *Example using callback: >
    *    -- Lua function
    *    local myluafun = function() print("This buffer enters") end
    *
    *    -- Vimscript function name (as a string)
    *    local myvimfun = "g:MyVimFunction"
    *
    *    vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
    *      pattern = {"*.c", "*.h"},
    *      callback = myluafun,  -- Or myvimfun
    *    })
    *
    *<
    *Lua functions receive a table with information about the autocmd event as
    *an argument. To use a function which itself accepts another (optional)
    *parameter, wrap the function in a lambda:
    *>
    *    -- Lua function with an optional parameter.
    *    -- The autocmd callback would pass a table as argument but this
    *    -- function expects number|nil
    *    local myluafun = function(bufnr) bufnr = bufnr or vim.api.nvim_get_current_buf() end
    *
    *    vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
    *      pattern = {"*.c", "*.h"},
    *      callback = function() myluafun() end,
    *    })
    *
    *<
    *Example using command: >
    *    vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
    *      pattern = {"*.c", "*.h"},
    *      command = "echo 'Entering a C or C++ file'",
    *    })
    *
    *<
    *Example values for pattern: >
    *  pattern = "*.py"
    *  pattern = { "*.py", "*.pyi" }
    *
    *<
    *Example values for event: >
    *  "BufWritePre"
    *  {"CursorHold", "BufWritePre", "BufWritePost"}
    *
    *<
    *@param event - (string|array) The event or events to register this
                 autocommand
    *@param opts - Dictionary of autocommand options:
                 • group (string|integer) optional: the autocommand group name
                   or id to match against.
                 • pattern (string|array) optional: pattern or patterns to
                   match against |autocmd-pattern|.
                 • buffer (integer) optional: buffer number for buffer local
                   autocommands |autocmd-buflocal|. Cannot be used with
                   {pattern}.
                 • desc (string) optional: description of the autocommand.
                 • callback (function|string) optional: if a string, the name
                   of a Vimscript function to call when this autocommand is
                   triggered. Otherwise, a Lua function which is called when
                   this autocommand is triggered. Cannot be used with
                   {command}. Lua callbacks can return true to delete the
                   autocommand; in addition, they accept a single table
                   argument with the following keys:
                   • id: (number) the autocommand id
                   • event: (string) the name of the event that triggered the
                     autocommand |autocmd-events|
                   • group: (number|nil) the autocommand group id, if it
                     exists
                   • match: (string) the expanded value of |<amatch>|
                   • buf: (number) the expanded value of |<abuf>|
                   • file: (string) the expanded value of |<afile>|
                   • data: (any) arbitrary data passed to
                     |nvim_exec_autocmds()|
    
                 • command (string) optional: Vim command to execute on event.
                   Cannot be used with {callback}
                 • once (boolean) optional: defaults to false. Run the
                   autocommand only once |autocmd-once|.
                 • nested (boolean) optional: defaults to false. Run nested
                   autocommands |autocmd-nested|.
    
    */
  nvim_create_autocmd: (event?: any, opts?: any) => any
  /**
    *Creates a new, empty, unnamed buffer.
    *@param listed - Sets 'buflisted'
    *@param scratch - Creates a "throwaway" |scratch-buffer| for temporary work
                   (always 'nomodified'). Also sets 'nomodeline' on the
                   buffer.
    
    */
  nvim_create_buf: (listed?: boolean, scratch?: boolean) => any
  /**
    *Creates a new *namespace* or gets an existing one.
    *Namespaces are used for buffer highlights and virtual text, see
    *|nvim_buf_add_highlight()| and |nvim_buf_set_extmark()|.
    *Namespaces can be named or anonymous. If `name` matches an existing
    *namespace, the associated id is returned. If `name` is an empty string a
    *new, anonymous namespace is created.
    *@param name - Namespace name or empty string
    
    */
  nvim_create_namespace: (name?: string) => any
  /**
    *Create a new user command |user-commands|
    *{name} is the name of the new command. The name must begin with an
    *uppercase letter.
    *{command} is the replacement text or Lua function to execute.
    *@example >
    *   :call nvim_create_user_command('SayHello', 'echo "Hello world!"', {})
    *   :SayHello
    *   Hello world!
    *
    *<
    *@param name - Name of the new user command. Must begin with an uppercase
                   letter.
    *@param command - Replacement command to execute when this user command is
                   executed. When called from Lua, the command can also be a
                   Lua function. The function is called with a single table
                   argument that contains the following keys:
                   • args: (string) The args passed to the command, if any
                     |<args>|
                   • fargs: (table) The args split by unescaped whitespace
                     (when more than one argument is allowed), if any
                     |<f-args>|
                   • bang: (boolean) "true" if the command was executed with a
                     ! modifier |<bang>|
                   • line1: (number) The starting line of the command range
                     |<line1>|
                   • line2: (number) The final line of the command range
                     |<line2>|
                   • range: (number) The number of items in the command range:
                     0, 1, or 2 |<range>|
                   • count: (number) Any count supplied |<count>|
                   • reg: (string) The optional register, if specified |<reg>|
                   • mods: (string) Command modifiers, if any |<mods>|
                   • smods: (table) Command modifiers in a structured format.
                     Has the same structure as the "mods" key of
                     |nvim_parse_cmd()|.
    *@param opts - Optional command attributes. See |command-attributes| for
                   more details. To use boolean attributes (such as
                   |:command-bang| or |:command-bar|) set the value to "true".
                   In addition to the string options listed in
                   |:command-complete|, the "complete" key also accepts a Lua
                   function which works like the "customlist" completion mode
                   |:command-completion-customlist|. Additional parameters:
                   • desc: (string) Used for listing the command when a Lua
                     function is used for {command}.
                   • force: (boolean, default true) Override any previous
                     definition.
                   • preview: (function) Preview callback for 'inccommand'
                     |:command-preview|
    
    */
  nvim_create_user_command: (name?: string, command?: any, opts?: any) => any
  /**
    *Delete an autocommand group by id.
    *To get a group id one can use |nvim_get_autocmds()|.
    *NOTE: behavior differs from |augroup-delete|. When deleting a group,
    *autocommands contained in this group will also be deleted and cleared.
    *This group will no longer exist.
    *@param id - Integer The id of the group.
    
    */
  nvim_del_augroup_by_id: (id?: integer) => any
  /**
    *Delete an autocommand group by name.
    *NOTE: behavior differs from |augroup-delete|. When deleting a group,
    *autocommands contained in this group will also be deleted and cleared.
    *This group will no longer exist.
    *@param name - String The name of the group.
    
    */
  nvim_del_augroup_by_name: (name?: string) => any
  /**
    *Delete an autocommand by id.
    *NOTE: Only autocommands created via the API have an id.
    *@param id - Integer The id returned by nvim_create_autocmd
    
    */
  nvim_del_autocmd: (id?: integer) => any
  /**
    *Deletes the current line.
    
    */
  nvim_del_current_line: () => any
  /**
    *Unmaps a global |mapping| for the given mode.
    *To unmap a buffer-local mapping, use |nvim_buf_del_keymap()|.
    *@param mode -
    *@param lhs -
    
    */
  nvim_del_keymap: (mode?: string, lhs?: string) => any
  /**
    *Deletes an uppercase\/file named mark. See |mark-motions|.
    *
    *Note:
    *    fails with error if a lowercase or buffer local named mark is used.
    *
    *@param name - Mark name
    
    */
  nvim_del_mark: (name?: string) => any
  /**
    *Delete a user-defined command.
    *@param name - Name of the command to delete.
    
    */
  nvim_del_user_command: (name?: string) => any
  /**
    *Removes a global (g:) variable.
    *@param name - Variable name
    
    */
  nvim_del_var: (name?: string) => any
  /**
    *Echo a message.
    *@param chunks - A list of [text, hl_group] arrays, each representing a text
                   chunk with specified highlight. `hl_group` element can be
                   omitted for no highlight.
    *@param history - if true, add to |message-history|.
    *@param opts - Optional parameters. Reserved for future use.
    
    */
  nvim_echo: (chunks?: array, history?: boolean, opts?: dictionary) => any
  /**
    *Writes a message to the Vim error buffer. Does not append "\n", the
    *message is buffered (won't display) until a linefeed is written.
    *@param str - Message
    
    */
  nvim_err_write: (str?: string) => any
  /**
    *Writes a message to the Vim error buffer. Appends "\n", so the buffer is
    *flushed (and displayed).
    *@param str - Message
    
    */
  nvim_err_writeln: (str?: string) => any
  /**
    *
    *@param lvl -
    *@param data -
    
    */
  nvim_error_event: (lvl?: integer, data?: string) => any
  /**
    *Evaluates a VimL |expression|. Dictionaries and Lists are recursively
    *expanded.
    *On execution error: fails with VimL error, updates v:errmsg.
    *@param expr - VimL expression string
    
    */
  nvim_eval: (expr?: string) => any
  /**
    *Evaluates statusline string.
    *@param str - Statusline string (see 'statusline').
    *@param opts - Optional parameters.
                • winid: (number) |window-ID| of the window to use as context
                  for statusline.
                • maxwidth: (number) Maximum width of statusline.
                • fillchar: (string) Character to fill blank spaces in the
                  statusline (see 'fillchars'). Treated as single-width even
                  if it isn't.
                • highlights: (boolean) Return highlight information.
                • use_winbar: (boolean) Evaluate winbar instead of statusline.
                • use_tabline: (boolean) Evaluate tabline instead of
                  statusline. When true, {winid} is ignored. Mutually
                  exclusive with {use_winbar}.
    
    */
  nvim_eval_statusline: (str?: string, opts?: any) => any
  /**
    *Executes Vimscript (multiline block of Ex commands), like anonymous
    *|:source|.
    *Unlike |nvim_command()| this function supports heredocs, script-scope
    *(s:), etc.
    *On execution error: fails with VimL error, updates v:errmsg.
    *@param src - Vimscript code
    *@param output - Capture and return all (non-error, non-shell |:!|) output
    
    */
  nvim_exec: (src?: string, output?: boolean) => any
  /**
    *Execute all autocommands for {event} that match the corresponding {opts}
    *|autocmd-execute|.
    *@param event - (String|Array) The event or events to execute
    *@param opts - Dictionary of autocommand options:
                 • group (string|integer) optional: the autocommand group name
                   or id to match against. |autocmd-groups|.
                 • pattern (string|array) optional: defaults to "*"
                   |autocmd-pattern|. Cannot be used with {buffer}.
                 • buffer (integer) optional: buffer number
                   |autocmd-buflocal|. Cannot be used with {pattern}.
                 • modeline (bool) optional: defaults to true. Process the
                   modeline after the autocommands |<nomodeline>|.
                 • data (any): arbitrary data to send to the autocommand
                   callback. See |nvim_create_autocmd()| for details.
    
    */
  nvim_exec_autocmds: (event?: any, opts?: any) => any
  /**
    *Execute Lua code. Parameters (if any) are available as `...` inside the
    *chunk. The chunk can return a value.
    *Only statements are executed. To evaluate an expression, prefix it with
    *`return`: return my_function(...)
    *@param code - Lua code to execute
    *@param args - Arguments to the code
    
    */
  nvim_exec_lua: (code?: string, args?: array) => any
  /**
    *Sends input-keys to Nvim, subject to various quirks controlled by `mode`
    *flags. This is a blocking call, unlike |nvim_input()|.
    *On execution error: does not fail, but updates v:errmsg.
    *To input sequences like <C-o> use |nvim_replace_termcodes()| (typically
    *with escape_ks=false) to replace |keycodes|, then pass the result to
    *nvim_feedkeys().
    *@example >
    *    :let key = nvim_replace_termcodes("<C-o>", v:true, v:false, v:true)
    *    :call nvim_feedkeys(key, 'n', v:false)
    *
    *<
    *@param keys - to be typed
    *@param mode - behavior flags, see |feedkeys()|
    *@param escape_ks - If true, escape K_SPECIAL bytes in `keys` This should be
                     false if you already used |nvim_replace_termcodes()|, and
                     true otherwise.
    
    */
  nvim_feedkeys: (keys?: string, mode?: string, escape_ks?: boolean) => any
  /**
    *Gets the option information for all options.
    *The dictionary has the full option names as keys and option metadata
    *dictionaries as detailed at |nvim_get_option_info|.
    
    */
  nvim_get_all_options_info: () => any
  /**
    *Returns a 2-tuple (Array), where item 0 is the current channel id and item
    *1 is the |api-metadata| map (Dictionary).
    *@param arena -
    
    */
  nvim_get_api_info: (arena?: arena) => any
  /**
    *Get all autocommands that match the corresponding {opts}.
    *These examples will get autocommands matching ALL the given criteria: >
    *  -- Matches all criteria
    *  autocommands = vim.api.nvim_get_autocmds({
    *    group = "MyGroup",
    *    event = {"BufEnter", "BufWinEnter"},
    *    pattern = {"*.c", "*.h"}
    *  })
    *
    *  -- All commands from one group
    *  autocommands = vim.api.nvim_get_autocmds({
    *    group = "MyGroup",
    *  })
    *
    *<
    *NOTE: When multiple patterns or events are provided, it will find all the
    *autocommands that match any combination of them.
    *@param opts - Dictionary with at least one of the following:
                • group (string|integer): the autocommand group name or id to
                  match against.
                • event (string|array): event or events to match against
                  |autocmd-events|.
                • pattern (string|array): pattern or patterns to match against
                  |autocmd-pattern|. Cannot be used with {buffer}
                • buffer: Buffer number or list of buffer numbers for buffer
                  local autocommands |autocmd-buflocal|. Cannot be used with
                  {pattern}
    
    */
  nvim_get_autocmds: (opts?: any) => any
  /**
    *Gets information about a channel.
    *@param chan -
    
    */
  nvim_get_chan_info: (chan?: integer) => any
  /**
    *Returns the 24-bit RGB value of a |nvim_get_color_map()| color name or
    *"#rrggbb" hexadecimal string.
    *@example >
    *    :echo nvim_get_color_by_name("Pink")
    *    :echo nvim_get_color_by_name("#cbcbcb")
    *
    *<
    *@param name - Color name or "#rrggbb" string
    
    */
  nvim_get_color_by_name: (name?: string) => any
  /**
    *Returns a map of color names and RGB values.
    *Keys are color names (e.g. "Aqua") and values are 24-bit RGB color values
    *(e.g. 65535).
    
    */
  nvim_get_color_map: () => any
  /**
    *Gets a map of global (non-buffer-local) Ex commands.
    *Currently only |user-commands| are supported, not builtin Ex commands.
    *@param opts - Optional parameters. Currently only supports {"builtin":false}
    
    */
  nvim_get_commands: (opts?: any) => any
  /**
    *Gets a map of the current editor state.
    *@param opts - Optional parameters.
                • types: List of |context-types| ("regs", "jumps", "bufs",
                  "gvars", …) to gather, or empty for "all".
    
    */
  nvim_get_context: (opts?: any) => any
  /**
    *Gets the current buffer.
    
    */
  nvim_get_current_buf: () => any
  /**
    *Gets the current line.
    
    */
  nvim_get_current_line: () => any
  /**
    *Gets the current tabpage.
    
    */
  nvim_get_current_tabpage: () => any
  /**
    *Gets the current window.
    
    */
  nvim_get_current_win: () => any
  /**
    *Gets a highlight definition by id. |hlID()|
    *@param hl_id - Highlight id as returned by |hlID()|
    *@param rgb - Export RGB colors
    *@param arena -
    
    */
  nvim_get_hl_by_id: (hl_id?: integer, rgb?: boolean, arena?: arena) => any
  /**
    *Gets a highlight definition by name.
    *@param name - Highlight group name
    *@param rgb - Export RGB colors
    *@param arena -
    
    */
  nvim_get_hl_by_name: (name?: string, rgb?: boolean, arena?: arena) => any
  /**
    *Gets a highlight group by name
    *similar to |hlID()|, but allocates a new ID if not present.
    *@param name -
    
    */
  nvim_get_hl_id_by_name: (name?: string) => any
  /**
    *Gets a list of global (non-buffer-local) |mapping| definitions.
    *@param mode - Mode short-name ("n", "i", "v", ...)
    
    */
  nvim_get_keymap: (mode?: string) => any
  /**
    *Return a tuple (row, col, buffer, buffername) representing the position of
    *the uppercase\/file named mark. See |mark-motions|.
    *Marks are (1,0)-indexed. |api-indexing|
    *
    *Note:
    *    fails with error if a lowercase or buffer local named mark is used.
    *
    *@param name - Mark name
    *@param opts - Optional parameters. Reserved for future use.
    
    */
  nvim_get_mark: (name?: string, opts?: dictionary) => any
  /**
    *Gets the current mode. |mode()| "blocking" is true if Nvim is waiting for
    *input.
    
    */
  nvim_get_mode: () => any
  /**
    *Gets existing, non-anonymous namespaces.
    
    */
  nvim_get_namespaces: () => any
  /**
    *Gets the global value of an option.
    *@param name - Option name
    
    */
  nvim_get_option: (name?: string) => any
  /**
    *Gets the option information for one option
    *Resulting dictionary has keys:
    *• name: Name of the option (like 'filetype')
    *• shortname: Shortened name of the option (like 'ft')
    *• type: type of option ("string", "number" or "boolean")
    *• default: The default value for the option
    *• was_set: Whether the option was set.
    *• last_set_sid: Last set script id (if any)
    *• last_set_linenr: line number where option was set
    *• last_set_chan: Channel where option was set (0 for local)
    *• scope: one of "global", "win", or "buf"
    *• global_local: whether win or buf option has a global value
    *• commalist: List of comma separated values
    *• flaglist: List of single char flags
    *
    *@param name - Option name
    
    */
  nvim_get_option_info: (name?: string) => any
  /**
    *Gets the value of an option. The behavior of this function matches that of
    *|:set|: the local value of an option is returned if it exists; otherwise,
    *the global value is returned. Local values always correspond to the
    *current buffer or window, unless "buf" or "win" is set in {opts}.
    *@param name - Option name
    *@param opts - Optional parameters
                • scope: One of "global" or "local". Analogous to |:setglobal|
                  and |:setlocal|, respectively.
                • win: |window-ID|. Used for getting window local options.
                • buf: Buffer number. Used for getting buffer local options.
                  Implies {scope} is "local".
    
    */
  nvim_get_option_value: (name?: string, opts?: any) => any
  /**
    *Gets info describing process `pid`.
    *@param pid -
    
    */
  nvim_get_proc: (pid?: integer) => any
  /**
    *Gets the immediate children of process `pid`.
    *@param pid -
    
    */
  nvim_get_proc_children: (pid?: integer) => any
  /**
    *Find files in runtime directories
    *'name' can contain wildcards. For example
    *nvim_get_runtime_file("colors\/*.vim", true) will return all color scheme
    *files. Always use forward slashes (\/) in the search pattern for
    *subdirectories regardless of platform.
    *It is not an error to not find any files. An empty array is returned then.
    *@param name - pattern of files to search for
    *@param all - whether to return all matches or only the first
    
    */
  nvim_get_runtime_file: (name?: string, all?: boolean) => any
  /**
    *Gets a global (g:) variable.
    *@param name - Variable name
    
    */
  nvim_get_var: (name?: string) => any
  /**
    *Gets a v: variable.
    *@param name - Variable name
    
    */
  nvim_get_vvar: (name?: string) => any
  /**
    *Queues raw user-input. Unlike |nvim_feedkeys()|, this uses a low-level
    *input buffer and the call is non-blocking (input is processed
    *asynchronously by the eventloop).
    *On execution error: does not fail, but updates v:errmsg.
    *
    *Note:
    *    |keycodes| like <CR> are translated, so "<" is special. To input a
    *    literal "<", send <LT>.
    *
    *Note:
    *    For mouse events use |nvim_input_mouse()|. The pseudokey form
    *    "<LeftMouse><col,row>" is deprecated since |api-level| 6.
    *
    *@param keys - to be typed
    
    */
  nvim_input: (keys?: string) => any
  /**
    *Send mouse event from GUI.
    *Non-blocking: does not wait on any result, but queues the event to be
    *processed soon by the event loop.
    *
    *Note:
    *    Currently this doesn't support "scripting" multiple mouse events by
    *    calling it multiple times in a loop: the intermediate mouse positions
    *    will be ignored. It should be used to implement real-time mouse input
    *    in a GUI. The deprecated pseudokey form ("<LeftMouse><col,row>") of
    *    |nvim_input()| has the same limitation.
    *
    *@param button - Mouse button: one of "left", "right", "middle", "wheel",
                    "move".
    *@param action - For ordinary buttons, one of "press", "drag", "release".
                    For the wheel, one of "up", "down", "left", "right".
                    Ignored for "move".
    *@param modifier - String of modifiers each represented by a single char. The
                    same specifiers are used as for a key press, except that
                    the "-" separator is optional, so "C-A-", "c-a" and "CA"
                    can all be used to specify Ctrl+Alt+click.
    *@param grid - Grid number if the client uses |ui-multigrid|, else 0.
    *@param row - Mouse row-position (zero-based, like redraw events)
    *@param col - Mouse column-position (zero-based, like redraw events)
    
    */
  nvim_input_mouse: (
    button?: string,
    action?: string,
    modifier?: string,
    grid?: integer,
    row?: integer,
    col?: integer
  ) => any
  /**
    *Gets the current list of buffer handles
    *Includes unlisted (unloaded\/deleted) buffers, like `:ls!`. Use
    *|nvim_buf_is_loaded()| to check if a buffer is loaded.
    
    */
  nvim_list_bufs: () => any
  /**
    *Get information about all open channels.
    
    */
  nvim_list_chans: () => any
  /**
    *Gets the paths contained in 'runtimepath'.
    
    */
  nvim_list_runtime_paths: () => any
  /**
    *Gets the current list of tabpage handles.
    
    */
  nvim_list_tabpages: () => any
  /**
    *Gets a list of dictionaries representing attached UIs.
    
    */
  nvim_list_uis: () => any
  /**
    *Gets the current list of window handles.
    
    */
  nvim_list_wins: () => any
  /**
    *Sets the current editor state from the given |context| map.
    *@param dict - |Context| map.
    
    */
  nvim_load_context: (dict?: dictionary) => any
  /**
    *Notify the user with a message
    *Relays the call to vim.notify . By default forwards your message in the
    *echo area but can be overridden to trigger desktop notifications.
    *@param msg - Message to display to the user
    *@param log_level - The log level
    *@param opts - Reserved for future use.
    
    */
  nvim_notify: (msg?: string, log_level?: integer, opts?: dictionary) => any
  /**
    *Open a terminal instance in a buffer
    *By default (and currently the only option) the terminal will not be
    *connected to an external process. Instead, input send on the channel will
    *be echoed directly by the terminal. This is useful to display ANSI
    *terminal sequences returned as part of a rpc message, or similar.
    *Note: to directly initiate the terminal using the right size, display the
    *buffer in a configured window before calling this. For instance, for a
    *floating display, first create an empty buffer using |nvim_create_buf()|,
    *then display it using |nvim_open_win()|, and then call this function. Then
    *|nvim_chan_send()| can be called immediately to process sequences in a
    *virtual terminal having the intended size.
    *@param buffer - the buffer to use (expected to be empty)
    *@param opts - Optional parameters.
                  • on_input: lua callback for input sent, i e keypresses in
                    terminal mode. Note: keypresses are sent raw as they would
                    be to the pty master end. For instance, a carriage return
                    is sent as a "\r", not as a "\n". |textlock| applies. It
                    is possible to call |nvim_chan_send| directly in the
                    callback however. ["input", term, bufnr, data]
    
    */
  nvim_open_term: (buffer?: buffer, opts?: any) => any
  /**
    *Open a new window.
    *Currently this is used to open floating and external windows. Floats are
    *windows that are drawn above the split layout, at some anchor position in
    *some other window. Floats can be drawn internally or by external GUI with
    *the |ui-multigrid| extension. External windows are only supported with
    *multigrid GUIs, and are displayed as separate top-level windows.
    *For a general overview of floats, see |api-floatwin|.
    *Exactly one of `external` and `relative` must be specified. The `width`
    *and `height` of the new window must be specified.
    *With relative=editor (row=0,col=0) refers to the top-left corner of the
    *screen-grid and (row=Lines-1,col=Columns-1) refers to the bottom-right
    *corner. Fractional values are allowed, but the builtin implementation
    *(used by non-multigrid UIs) will always round down to nearest integer.
    *Out-of-bounds values, and configurations that make the float not fit
    *inside the main editor, are allowed. The builtin implementation truncates
    *values so floats are fully within the main screen grid. External GUIs
    *could let floats hover outside of the main window like a tooltip, but this
    *should not be used to specify arbitrary WM screen positions.
    *Example (Lua): window-relative float >
    *    vim.api.nvim_open_win(0, false,
    *      {relative='win', row=3, col=3, width=12, height=3})
    *
    *<
    *Example (Lua): buffer-relative float (travels as buffer is scrolled) >
    *    vim.api.nvim_open_win(0, false,
    *      {relative='win', width=12, height=3, bufpos={100,10}})
    *
    *<
    *@param buffer - Buffer to display, or 0 for current buffer
    *@param enter - Enter the window (make it the current window)
    *@param config - Map defining the window configuration. Keys:
                  • relative: Sets the window layout to "floating", placed at
                    (row,col) coordinates relative to:
                    • "editor" The global editor grid
                    • "win" Window given by the `win` field, or current
                      window.
                    • "cursor" Cursor position in current window.
    
                  • win: |window-ID| for relative="win".
                  • anchor: Decides which corner of the float to place at
                    (row,col):
                    • "NW" northwest (default)
                    • "NE" northeast
                    • "SW" southwest
                    • "SE" southeast
    
                  • width: Window width (in character cells). Minimum of 1.
                  • height: Window height (in character cells). Minimum of 1.
                  • bufpos: Places float relative to buffer text (only when
                    relative="win"). Takes a tuple of zero-indexed [line,
                    column]. `row` and `col` if given are applied relative to this position, else they
                    default to:
                    • `row=1` and `col=0` if `anchor` is "NW" or "NE"
                    • `row=0` and `col=0` if `anchor` is "SW" or "SE" (thus
                      like a tooltip near the buffer text).
    
                  • row: Row position in units of "screen cell height", may be
                    fractional.
                  • col: Column position in units of "screen cell width", may
                    be fractional.
                  • focusable: Enable focus by user actions (wincmds, mouse
                    events). Defaults to true. Non-focusable windows can be
                    entered by |nvim_set_current_win()|.
                  • external: GUI should display the window as an external
                    top-level window. Currently accepts no other positioning
                    configuration together with this.
                  • zindex: Stacking order. floats with higher `zindex` go on top on floats with lower indices. Must be larger
                    than zero. The following screen elements have hard-coded
                    z-indices:
                    • 100: insert completion popupmenu
                    • 200: message scrollback
                    • 250: cmdline completion popupmenu (when
                      wildoptions+=pum) The default value for floats are 50.
                      In general, values below 100 are recommended, unless
                      there is a good reason to overshadow builtin elements.
    
                  • style: Configure the appearance of the window. Currently
                    only takes one non-empty value:
                    • "minimal" Nvim will display the window with many UI
                      options disabled. This is useful when displaying a
                      temporary float where the text should not be edited.
                      Disables 'number', 'relativenumber', 'cursorline',
                      'cursorcolumn', 'foldcolumn', 'spell' and 'list'
                      options. 'signcolumn' is changed to `auto` and
                      'colorcolumn' is cleared. The end-of-buffer region is
                      hidden by setting `eob` flag of 'fillchars' to a space
                      char, and clearing the |EndOfBuffer| region in
                      'winhighlight'.
    
                  • border: Style of (optional) window border. This can either
                    be a string or an array. The string values are
                    • "none": No border (default).
                    • "single": A single line box.
                    • "double": A double line box.
                    • "rounded": Like "single", but with rounded corners ("╭"
                      etc.).
                    • "solid": Adds padding by a single whitespace cell.
                    • "shadow": A drop shadow effect by blending with the
                      background.
                    • If it is an array, it should have a length of eight or
                      any divisor of eight. The array will specifify the eight
                      chars building up the border in a clockwise fashion
                      starting with the top-left corner. As an example, the
                      double box style could be specified as [ "╔", "═" ,"╗",
                      "║", "╝", "═", "╚", "║" ]. If the number of chars are
                      less than eight, they will be repeated. Thus an ASCII
                      border could be specified as [ "/", "-", "\\", "|" ], or
                      all chars the same as [ "x" ]. An empty string can be
                      used to turn off a specific border, for instance, [ "",
                      "", "", ">", "", "", "", "<" ] will only make vertical
                      borders but not horizontal ones. By default,
                      `FloatBorder` highlight is used, which links to
                      `WinSeparator` when not defined. It could also be
                      specified by character: [ {"+", "MyCorner"}, {"x",
                      "MyBorder"} ].
    
                  • noautocmd: If true then no buffer-related autocommand
                    events such as |BufEnter|, |BufLeave| or |BufWinEnter| may
                    fire from calling this function.
    
    */
  nvim_open_win: (buffer?: buffer, enter?: boolean, config?: any) => any
  /**
    *Writes a message to the Vim output buffer. Does not append "\n", the
    *message is buffered (won't display) until a linefeed is written.
    *@param str - Message
    
    */
  nvim_out_write: (str?: string) => any
  /**
    *Parse command line.
    *Doesn't check the validity of command arguments.
    *@param str - Command line string to parse. Cannot contain "\n".
    *@param opts - Optional parameters. Reserved for future use.
    
    */
  nvim_parse_cmd: (str?: string, opts?: dictionary) => any
  /**
    *Parse a VimL expression.
    *@param expr - Expression to parse. Always treated as a single line.
    *@param flags - Flags:
                     • "m" if multiple expressions in a row are allowed (only
                       the first one will be parsed),
                     • "E" if EOC tokens are not allowed (determines whether
                       they will stop parsing process or be recognized as an
                       operator/space, though also yielding an error).
                     • "l" when needing to start parsing with lvalues for
                       ":let" or ":for". Common flag sets:
                     • "m" to parse like for ":echo".
                     • "E" to parse like for "<C-r>=".
                     • empty string for ":call".
                     • "lm" to parse for ":let".
    *@param highlight - If true, return value will also include "highlight" key
                     containing array of 4-tuples (arrays) (Integer, Integer,
                     Integer, String), where first three numbers define the
                     highlighted region and represent line, starting column
                     and ending column (latter exclusive: one should highlight
                     region [start_col, end_col)).
    
    */
  nvim_parse_expression: (expr?: string, flags?: string, highlight?: boolean) => any
  /**
    *Pastes at cursor, in any mode.
    *Invokes the `vim.paste` handler, which handles each mode appropriately.
    *Sets redo\/undo. Faster than |nvim_input()|. Lines break at LF ("\n").
    *Errors ('nomodifiable', `vim.paste()` failure, …) are reflected in `err`
    *but do not affect the return value (which is strictly decided by
    *`vim.paste()`). On error, subsequent calls are ignored ("drained") until
    *the next paste is initiated (phase 1 or -1).
    *@param data - Multiline input. May be binary (containing NUL bytes).
    *@param crlf - Also break lines at CR and CRLF.
    *@param phase - -1: paste in a single call (i.e. without streaming). To
                 "stream" a paste, call `nvim_paste` sequentially with these `phase` values:
                 • 1: starts the paste (exactly once)
                 • 2: continues the paste (zero or more times)
                 • 3: ends the paste (exactly once)
    
    */
  nvim_paste: (data?: string, crlf?: boolean, phase?: integer) => any
  /**
    *Puts text at cursor, in any mode.
    *Compare |:put| and |p| which are always linewise.
    *@param lines - |readfile()|-style list of lines. |channel-lines|
    *@param type - Edit behavior: any |getregtype()| result, or:
                  • "b" |blockwise-visual| mode (may include width, e.g. "b3")
                  • "c" |charwise| mode
                  • "l" |linewise| mode
                  • "" guess by contents, see |setreg()|
    *@param after - If true insert after cursor (like |p|), or before (like
                  |P|).
    *@param follow - If true place cursor at end of inserted text.
    
    */
  nvim_put: (lines?: any, type?: string, after?: boolean, follow?: boolean) => any
  /**
    *Replaces terminal codes and |keycodes| (<CR>, <Esc>, ...) in a string with
    *the internal representation.
    *@param str - String to be converted.
    *@param from_part - Legacy Vim parameter. Usually true.
    *@param do_lt - Also translate <lt>. Ignored if `special` is false.
    *@param special - Replace |keycodes|, e.g. <CR> becomes a "\r" char.
    
    */
  nvim_replace_termcodes: (
    str?: string,
    from_part?: boolean,
    do_lt?: boolean,
    special?: boolean
  ) => any
  /**
    *Selects an item in the completion popupmenu.
    *If |ins-completion| is not active this API call is silently ignored.
    *Useful for an external UI using |ui-popupmenu| to control the popupmenu
    *with the mouse. Can also be used in a mapping; use <cmd> |:map-cmd| to
    *ensure the mapping doesn't end completion mode.
    *@param item - Index (zero-based) of the item to select. Value of -1
                  selects nothing and restores the original text.
    *@param insert - Whether the selection should be inserted in the buffer.
    *@param finish - Finish the completion and dismiss the popupmenu. Implies
                  `insert`.
    *@param opts - Optional parameters. Reserved for future use.
    
    */
  nvim_select_popupmenu_item: (
    item?: integer,
    insert?: boolean,
    finish?: boolean,
    opts?: dictionary
  ) => any
  /**
    *Self-identifies the client.
    *The client\/plugin\/application should call this after connecting, to
    *provide hints about its identity and purpose, for debugging and
    *orchestration.
    *Can be called more than once; the caller should merge old info if
    *appropriate. @example library first identifies the channel, then a plugin
    *using that library later identifies itself.
    *
    *Note:
    *    "Something is better than nothing". You don't need to include all the
    *    fields.
    *
    *@param name - Short name for the connected client
    *@param version - Dictionary describing the version, with these (optional)
                      keys:
                      • "major" major version (defaults to 0 if not set, for
                        no release yet)
                      • "minor" minor version
                      • "patch" patch number
                      • "prerelease" string describing a prerelease, like
                        "dev" or "beta1"
                      • "commit" hash or similar identifier of commit
    *@param type - Must be one of the following values. Client libraries
                      should default to "remote" unless overridden by the
                      user.
                      • "remote" remote client connected to Nvim.
                      • "ui" gui frontend
                      • "embedder" application using Nvim as a component (for
                        example, IDE/editor implementing a vim mode).
                      • "host" plugin host, typically started by nvim
                      • "plugin" single plugin, started by nvim
    *@param methods - Builtin methods in the client. For a host, this does not
                      include plugin methods which will be discovered later.
                      The key should be the method name, the values are dicts
                      with these (optional) keys (more keys may be added in
                      future versions of Nvim, thus unknown keys are ignored.
                      Clients must only use keys defined in this or later
                      versions of Nvim):
                      • "async" if true, send as a notification. If false or
                        unspecified, use a blocking request
                      • "nargs" Number of arguments. Could be a single integer
                        or an array of two integers, minimum and maximum
                        inclusive.
    *@param attributes - Arbitrary string:string map of informal client
                      properties. Suggested keys:
                      • "website": Client homepage URL (e.g. GitHub
                        repository)
                      • "license": License description ("Apache 2", "GPLv3",
                        "MIT", …)
                      • "logo": URI or path to image, preferably small logo or
                        icon. .png or .svg format is preferred.
    
    */
  nvim_set_client_info: (
    name?: string,
    version?: dictionary,
    type?: string,
    methods?: dictionary,
    attributes?: dictionary
  ) => any
  /**
    *Sets the current buffer.
    *@param buffer - Buffer handle
    
    */
  nvim_set_current_buf: (buffer?: buffer) => any
  /**
    *Changes the global working directory.
    *@param dir - Directory path
    
    */
  nvim_set_current_dir: (dir?: string) => any
  /**
    *Sets the current line.
    *@param line - Line contents
    
    */
  nvim_set_current_line: (line?: string) => any
  /**
    *Sets the current tabpage.
    *@param tabpage - Tabpage handle
    
    */
  nvim_set_current_tabpage: (tabpage?: tabpage) => any
  /**
    *Sets the current window.
    *@param window - Window handle
    
    */
  nvim_set_current_win: (window?: window) => any
  /**
    *Set or change decoration provider for a namespace
    *This is a very general purpose interface for having lua callbacks being
    *triggered during the redraw code.
    *The expected usage is to set extmarks for the currently redrawn buffer.
    *|nvim_buf_set_extmark| can be called to add marks on a per-window or
    *per-lines basis. Use the `ephemeral` key to only use the mark for the
    *current screen redraw (the callback will be called again for the next
    *redraw ).
    *Note: this function should not be called often. Rather, the callbacks
    *themselves can be used to throttle unneeded callbacks. the `on_start`
    *callback can return `false` to disable the provider until the next redraw.
    *Similarly, return `false` in `on_win` will skip the `on_lines` calls for
    *that window (but any extmarks set in `on_win` will still be used). A
    *plugin managing multiple sources of decoration should ideally only set one
    *provider, and merge the sources internally. You can use multiple `ns_id`
    *for the extmarks set\/modified inside the callback anyway.
    *Note: doing anything other than setting extmarks is considered
    *experimental. Doing things like changing options are not expliticly
    *forbidden, but is likely to have unexpected consequences (such as 100% CPU
    *consumption). doing `vim.rpcnotify` should be OK, but `vim.rpcrequest` is
    *quite dubious for the moment.
    *@param ns_id - Namespace id from |nvim_create_namespace()|
    *@param opts - Table of callbacks:
                 • on_start: called first on each screen redraw ["start",
                   tick]
                 • on_buf: called for each buffer being redrawn (before window
                   callbacks) ["buf", bufnr, tick]
                 • on_win: called when starting to redraw a specific window.
                   ["win", winid, bufnr, topline, botline_guess]
                 • on_line: called for each buffer line being redrawn. (The
                   interaction with fold lines is subject to change) ["win",
                   winid, bufnr, row]
                 • on_end: called at the end of a redraw cycle ["end", tick]
    
    */
  nvim_set_decoration_provider: (ns_id?: integer, opts?: any) => any
  /**
    *Sets a highlight group.
    *
    *Note:
    *    Unlike the `:highlight` command which can update a highlight group,
    *    this function completely replaces the definition. For example:
    *    `nvim_set_hl(0, 'Visual', {})` will clear the highlight group
    *    'Visual'.
    *
    *Note:
    *    The fg and bg keys also accept the string values `"fg"` or `"bg"`
    *    which act as aliases to the corresponding foreground and background
    *    values of the Normal group. If the Normal group has not been defined,
    *    using these values results in an error.
    *
    *@param ns_id - Namespace id for this highlight |nvim_create_namespace()|.
                 Use 0 to set a highlight group globally |:highlight|.
    *@param name - Highlight group name, e.g. "ErrorMsg"
    *@param val - Highlight definition map, accepts the following keys:
                 • fg (or foreground): color name or "#RRGGBB", see note.
                 • bg (or background): color name or "#RRGGBB", see note.
                 • sp (or special): color name or "#RRGGBB"
                 • blend: integer between 0 and 100
                 • bold: boolean
                 • standout: boolean
                 • underline: boolean
                 • undercurl: boolean
                 • underdouble: boolean
                 • underdotted: boolean
                 • underdashed: boolean
                 • strikethrough: boolean
                 • italic: boolean
                 • reverse: boolean
                 • nocombine: boolean
                 • link: name of another highlight group to link to, see
                   |:hi-link|.
                 • default: Don't override existing definition |:hi-default|
                 • ctermfg: Sets foreground of cterm color |highlight-ctermfg|
                 • ctermbg: Sets background of cterm color |highlight-ctermbg|
                 • cterm: cterm attribute map, like |highlight-args|. If not
                   set, cterm attributes will match those from the attribute
                   map documented above.
    
    */
  nvim_set_hl: (ns_id?: integer, name?: string, val?: any) => any
  /**
    *Set active namespace for highlights. This can be set for a single window,
    *see |nvim_win_set_hl_ns|.
    *@param ns_id - the namespace to use
    
    */
  nvim_set_hl_ns: (ns_id?: integer) => any
  /**
    *Set active namespace for highlights while redrawing.
    *This function meant to be called while redrawing, primarily from
    *|nvim_set_decoration_provider| on_win and on_line callbacks, which are
    *allowed to change the namespace during a redraw cycle.
    *@param ns_id - the namespace to activate
    
    */
  nvim_set_hl_ns_fast: (ns_id?: integer) => any
  /**
    *Sets a global |mapping| for the given mode.
    *To set a buffer-local mapping, use |nvim_buf_set_keymap()|.
    *Unlike |:map|, leading\/trailing whitespace is accepted as part of the
    *{lhs} or {rhs}. Empty {rhs} is |<Nop>|. |keycodes| are replaced as usual.
    *@example >
    *    call nvim_set_keymap('n', ' <NL>', '', {'nowait': v:true})
    *
    *<
    *is equivalent to: >
    *    nmap <nowait> <Space><NL> <Nop>
    *
    *<
    *@param mode - Mode short-name (map command prefix: "n", "i", "v", "x", …) or
                "!" for |:map!|, or empty string for |:map|.
    *@param lhs - Left-hand-side |{lhs}| of the mapping.
    *@param rhs - Right-hand-side |{rhs}| of the mapping.
    *@param opts - Optional parameters map: keys are |:map-arguments|, values are
                booleans (default false). Accepts all |:map-arguments| as keys
                excluding |<buffer>| but including |noremap| and "desc".
                Unknown key is an error. "desc" can be used to give a
                description to the mapping. When called from Lua, also accepts
                a "callback" key that takes a Lua function to call when the
                mapping is executed. When "expr" is true, "replace_keycodes"
                (boolean) can be used to replace keycodes in the resulting
                string (see |nvim_replace_termcodes()|), and a Lua callback
                returning `nil` is equivalent to returning an empty string.
    
    */
  nvim_set_keymap: (mode?: string, lhs?: string, rhs?: string, opts?: any) => any
  /**
    *Sets the global value of an option.
    *@param name - Option name
    *@param value - New option value
    
    */
  nvim_set_option: (name?: string, value?: any) => any
  /**
    *Sets the value of an option. The behavior of this function matches that of
    *|:set|: for global-local options, both the global and local value are set
    *unless otherwise specified with {scope}.
    *Note the options {win} and {buf} cannot be used together.
    *@param name - Option name
    *@param value - New option value
    *@param opts - Optional parameters
                 • scope: One of 'global' or 'local'. Analogous to
                   |:setglobal| and |:setlocal|, respectively.
                 • win: |window-ID|. Used for setting window local option.
                 • buf: Buffer number. Used for setting buffer local option.
    
    */
  nvim_set_option_value: (name?: string, value?: any, opts?: any) => any
  /**
    *Sets a global (g:) variable.
    *@param name - Variable name
    *@param value - Variable value
    
    */
  nvim_set_var: (name?: string, value?: any) => any
  /**
    *Sets a v: variable, if it is not readonly.
    *@param name - Variable name
    *@param value - Variable value
    
    */
  nvim_set_vvar: (name?: string, value?: any) => any
  /**
    *Calculates the number of display cells occupied by `text`. Control
    *characters including <Tab> count as one cell.
    *@param text - Some text
    
    */
  nvim_strwidth: (text?: string) => any
  /**
    *Subscribes to event broadcasts.
    *@param event - Event type string
    
    */
  nvim_subscribe: (event?: string) => any
  /**
    *Removes a tab-scoped (t:) variable
    *@param tabpage - Tabpage handle, or 0 for current tabpage
    *@param name - Variable name
    
    */
  nvim_tabpage_del_var: (tabpage?: tabpage, name?: string) => any
  /**
    *Gets the tabpage number
    *@param tabpage - Tabpage handle, or 0 for current tabpage
    
    */
  nvim_tabpage_get_number: (tabpage?: tabpage) => any
  /**
    *Gets a tab-scoped (t:) variable
    *@param tabpage - Tabpage handle, or 0 for current tabpage
    *@param name - Variable name
    
    */
  nvim_tabpage_get_var: (tabpage?: tabpage, name?: string) => any
  /**
    *Gets the current window in a tabpage
    *@param tabpage - Tabpage handle, or 0 for current tabpage
    
    */
  nvim_tabpage_get_win: (tabpage?: tabpage) => any
  /**
    *Checks if a tabpage is valid
    *@param tabpage - Tabpage handle, or 0 for current tabpage
    
    */
  nvim_tabpage_is_valid: (tabpage?: tabpage) => any
  /**
    *Gets the windows in a tabpage
    *@param tabpage - Tabpage handle, or 0 for current tabpage
    
    */
  nvim_tabpage_list_wins: (tabpage?: tabpage) => any
  /**
    *Sets a tab-scoped (t:) variable
    *@param tabpage - Tabpage handle, or 0 for current tabpage
    *@param name - Variable name
    *@param value - Variable value
    
    */
  nvim_tabpage_set_var: (tabpage?: tabpage, name?: string, value?: any) => any
  /**
    *Activates UI events on the channel.
    *Entry point of all UI clients. Allows |--embed| to continue startup.
    *Implies that the client is ready to show the UI. Adds the client to the
    *list of UIs. |nvim_list_uis()|
    *
    *Note:
    *    If multiple UI clients are attached, the global screen dimensions
    *    degrade to the smallest client. E.g. if client A requests 80x40 but
    *    client B requests 200x100, the global screen has size 80x40.
    *
    *@param width - Requested screen columns
    *@param height - Requested screen rows
    *@param options - |ui-option| map
    
    */
  nvim_ui_attach: (width?: integer, height?: integer, options?: dictionary) => any
  /**
    *Deactivates UI events on the channel.
    *Removes the client from the list of UIs. |nvim_list_uis()|
    
    */
  nvim_ui_detach: () => any
  /**
    *Tells Nvim the geometry of the popumenu, to align floating windows with an
    *external popup menu.
    *Note that this method is not to be confused with
    *|nvim_ui_pum_set_height()|, which sets the number of visible items in the
    *popup menu, while this function sets the bounding box of the popup menu,
    *including visual elements such as borders and sliders. Floats need not use
    *the same font size, nor be anchored to exact grid corners, so one can set
    *floating-point numbers to the popup menu geometry.
    *@param width - Popupmenu width.
    *@param height - Popupmenu height.
    *@param row - Popupmenu row.
    *@param col - Popupmenu height.
    
    */
  nvim_ui_pum_set_bounds: (width?: float, height?: float, row?: float, col?: float) => any
  /**
    *Tells Nvim the number of elements displaying in the popumenu, to decide
    *<PageUp> and <PageDown> movement.
    *@param height - Popupmenu height, must be greater than zero.
    
    */
  nvim_ui_pum_set_height: (height?: integer) => any
  /**
    *
    *@param name -
    *@param value -
    *@param error -
    
    */
  nvim_ui_set_option: (name?: string, value?: any, error?: error) => any
  /**
    *
    *@param width -
    *@param height -
    
    */
  nvim_ui_try_resize: (width?: integer, height?: integer) => any
  /**
    *Tell Nvim to resize a grid. Triggers a grid_resize event with the
    *requested grid size or the maximum size if it exceeds size limits.
    *On invalid grid handle, fails with error.
    *@param grid - The handle of the grid to be changed.
    *@param width - The new requested width.
    *@param height - The new requested height.
    
    */
  nvim_ui_try_resize_grid: (grid?: integer, width?: integer, height?: integer) => any
  /**
    *Unsubscribes to event broadcasts.
    *@param event - Event type string
    
    */
  nvim_unsubscribe: (event?: string) => any
  /**
    *Calls a function with window as temporary current window.
    *@param window - Window handle, or 0 for current window
    *@param fun - Function to call inside the window (currently lua callable
                  only)
    
    */
  nvim_win_call: (window?: window, fun?: luaref) => any
  /**
    *Closes the window (like |:close| with a |window-ID|).
    *@param window - Window handle, or 0 for current window
    *@param force - Behave like `:close!` The last window of a buffer with
                  unwritten changes can be closed. The buffer will become
                  hidden, even if 'hidden' is not set.
    
    */
  nvim_win_close: (window?: window, force?: boolean) => any
  /**
    *Removes a window-scoped (w:) variable
    *@param window - Window handle, or 0 for current window
    *@param name - Variable name
    
    */
  nvim_win_del_var: (window?: window, name?: string) => any
  /**
    *Gets the current buffer in a window
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_get_buf: (window?: window) => any
  /**
    *Gets window configuration.
    *The returned value may be given to |nvim_open_win()|.
    *`relative` is empty for normal windows.
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_get_config: (window?: window) => any
  /**
    *Gets the (1,0)-indexed cursor position in the window. |api-indexing|
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_get_cursor: (window?: window) => any
  /**
    *Gets the window height
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_get_height: (window?: window) => any
  /**
    *Gets the window number
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_get_number: (window?: window) => any
  /**
    *Gets a window option value
    *@param window - Window handle, or 0 for current window
    *@param name - Option name
    
    */
  nvim_win_get_option: (window?: window, name?: string) => any
  /**
    *Gets the window position in display cells. First position is zero.
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_get_position: (window?: window) => any
  /**
    *Gets the window tabpage
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_get_tabpage: (window?: window) => any
  /**
    *Gets a window-scoped (w:) variable
    *@param window - Window handle, or 0 for current window
    *@param name - Variable name
    
    */
  nvim_win_get_var: (window?: window, name?: string) => any
  /**
    *Gets the window width
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_get_width: (window?: window) => any
  /**
    *Closes the window and hide the buffer it contains (like |:hide| with a
    *|window-ID|).
    *Like |:hide| the buffer becomes hidden unless another window is editing
    *it, or 'bufhidden' is `unload`, `delete` or `wipe` as opposed to |:close|
    *or |nvim_win_close|, which will close the buffer.
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_hide: (window?: window) => any
  /**
    *Checks if a window is valid
    *@param window - Window handle, or 0 for current window
    
    */
  nvim_win_is_valid: (window?: window) => any
  /**
    *Sets the current buffer in a window, without side effects
    *@param window - Window handle, or 0 for current window
    *@param buffer - Buffer handle
    
    */
  nvim_win_set_buf: (window?: window, buffer?: buffer) => any
  /**
    *Configures window layout. Currently only for floating and external windows
    *(including changing a split window to those layouts).
    *When reconfiguring a floating window, absent option keys will not be
    *changed. `row`\/`col` and `relative` must be reconfigured together.
    *@param window - Window handle, or 0 for current window
    *@param config - Map defining the window configuration, see |nvim_open_win()|
    
    */
  nvim_win_set_config: (window?: window, config?: any) => any
  /**
    *Sets the (1,0)-indexed cursor position in the window. |api-indexing| This
    *scrolls the window even if it is not the current one.
    *@param window - Window handle, or 0 for current window
    *@param pos - (row, col) tuple representing the new position
    
    */
  nvim_win_set_cursor: (window?: window, pos?: any) => any
  /**
    *Sets the window height.
    *@param window - Window handle, or 0 for current window
    *@param height - Height as a count of rows
    
    */
  nvim_win_set_height: (window?: window, height?: integer) => any
  /**
    *Set highlight namespace for a window. This will use highlights defined in
    *this namespace, but fall back to global highlights (ns=0) when missing.
    *This takes predecence over the 'winhighlight' option.
    *@param window -
    *@param ns_id - the namespace to use
    
    */
  nvim_win_set_hl_ns: (window?: window, ns_id?: integer) => any
  /**
    *Sets a window option value. Passing `nil` as value deletes the option
    *(only works if there's a global fallback)
    *@param window - Window handle, or 0 for current window
    *@param name - Option name
    *@param value - Option value
    
    */
  nvim_win_set_option: (window?: window, name?: string, value?: any) => any
  /**
    *Sets a window-scoped (w:) variable
    *@param window - Window handle, or 0 for current window
    *@param name - Variable name
    *@param value - Variable value
    
    */
  nvim_win_set_var: (window?: window, name?: string, value?: any) => any
  /**
    *Sets the window width. This will only succeed if the screen is split
    *vertically.
    *@param window - Window handle, or 0 for current window
    *@param width - Width as a count of columns
    
    */
  nvim_win_set_width: (window?: window, width?: integer) => any
}
/** @noSelf */
declare interface Vim {
  api: Api
}
