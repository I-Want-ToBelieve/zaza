/** @noSelfInFile */
/**
 * @see https://github.com/NvChad/NvChad/blob/main/lua/core/default_config.lua
 */
export declare const misc: {
    cheatsheet: string;
    close_buffer: string;
    copy_whole_file: string;
    line_number_toggle: string;
    update_nvchad: string;
    new_buffer: string;
    new_tab: string;
    save_file: string;
};
export declare const insert_nav: {
    backward: string;
    end_of_line: string;
    forward: string;
    next_line: string;
    prev_line: string;
    beginning_of_line: string;
};
export declare const window_nav: {
    moveLeft: string;
    moveRight: string;
    moveUp: string;
    moveDown: string;
};
export declare const terminal: {
    esc_termmode: string[];
    esc_hide_termmode: string[];
    pick_term: string;
    new_horizontal: string;
    new_vertical: string;
    new_window: string;
};
export declare const plugins: {
    bufferline: {
        next_buffer: string;
        prev_buffer: string;
    };
    comment: {
        toggle: string;
    };
    float_terminal: {
        toggle: string;
    };
    dashboard: {
        bookmarks: string;
        new_file: string;
        open: string;
        session_load: string;
        session_save: string;
    };
    better_escape: {
        esc_insertmode: string[];
    };
    nvimtree: {
        toggle: string;
        focus: string;
    };
    telescope: {
        buffers: string;
        find_files: string;
        find_hiddenfiles: string;
        git_commits: string;
        git_status: string;
        help_tags: string;
        live_grep: string;
        oldfiles: string;
        themes: string;
        telescope_media: {
            media_files: string;
        };
    };
};
export declare const mappings: {
    plugins: {
        bufferline: {
            next_buffer: string;
            prev_buffer: string;
        };
        comment: {
            toggle: string;
        };
        float_terminal: {
            toggle: string;
        };
        dashboard: {
            bookmarks: string;
            new_file: string;
            open: string;
            session_load: string;
            session_save: string;
        };
        better_escape: {
            esc_insertmode: string[];
        };
        nvimtree: {
            toggle: string;
            focus: string;
        };
        telescope: {
            buffers: string;
            find_files: string;
            find_hiddenfiles: string;
            git_commits: string;
            git_status: string;
            help_tags: string;
            live_grep: string;
            oldfiles: string;
            themes: string;
            telescope_media: {
                media_files: string;
            };
        };
    };
    terminal: {
        esc_termmode: string[];
        esc_hide_termmode: string[];
        pick_term: string;
        new_horizontal: string;
        new_vertical: string;
        new_window: string;
    };
    window_nav: {
        moveLeft: string;
        moveRight: string;
        moveUp: string;
        moveDown: string;
    };
    insert_nav: {
        backward: string;
        end_of_line: string;
        forward: string;
        next_line: string;
        prev_line: string;
        beginning_of_line: string;
    };
    misc: {
        cheatsheet: string;
        close_buffer: string;
        copy_whole_file: string;
        line_number_toggle: string;
        update_nvchad: string;
        new_buffer: string;
        new_tab: string;
        save_file: string;
    };
};
export default mappings;
