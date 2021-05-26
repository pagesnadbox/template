import Vue from 'vue'

export const EventBus = new Vue()

export const events = {
    CLEAR_COMPONENT_HIGHLIGHT: "CLEAR_COMPONENT_HIGHLIGHT",
    SETTINGS_ACTION: "SETTINGS_ACTION",
    THEME_COLOR_CHANGE: "THEME_COLOR_CHANGE",
}
