import { mapState } from 'vuex'
import { EventBus, events } from "../../utils/eventBus"

export default {
    inject: {
        config: {
            default: () => ({ editable: true }),
        },
    },

    props: {
        editable: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            mouseover: false,
        }
    },

    created() {
        this.clearHighlightBind = () => {
            if (this.isMobile) {
                this.clearHighlight();
            }
        }
    },

    mounted() {
        this.$el.setAttribute("id", this.$attrs.id);
    },

    watch: {
        id: "scrollIntoView",
        highlightedComponentId: "onHighlightedIdChange"

    },

    computed: {
        ...mapState('settings', ['id', 'allowEdit', 'open', 'showHighlighter', "highlightedComponentId"]),

        listeners() {
            return {
                ...this.$listeners,
                ...this.getMixinListeners(),
            }
        },

        attrs() {
            return {
                ...this.$attrs,
                ...this.$props,
                class: this.mixinClasses,
                style: this.mixinStyles
            }
        },

        mixinClasses() {
            return [
                ...(this.classes || []),
                ...(this.hasHighlight ? ['hightlight'] : []),
            ]
        },

        mixinStyles() {
            return {
                ...(this.styles || {}),
                ...(this.colorStyles || {}),
                margin: this.$attrs.margin,
                padding: this.$attrs.padding
            }
        },

        hasHighlight() {
            return (this.selected || (this.allowEdit && this.mouseover))
        },

        isDark() {
            return this.$vuetify.theme.isDark
        },

        isDesktop() {
            return this.$vuetify.breakpoint.mdAndUp
        },

        isMobile() {
            return !this.isDesktop
        },

        selected() {
            return this.$attrs.id === this.id
        }
    },

    methods: {

        onHighlightedIdChange(id) {
            if (id === this.$attrs.id && this.allowEdit) {
                this.highlight();
                this.scrollIntoView(id)
            } else if (this.hasHighlight) {
                this.clearHighlight();
            }
        },

        getMixinListeners() {
            let listeners = {}

            if (this.editable && this.config.editable) {
                listeners = {
                    click: this.onClick.bind(this),
                    mouseenter: this.onMouseEnter.bind(this),
                    mouseleave: this.onMouseLeave.bind(this),
                }
            }

            return listeners
        },

        onMouseEnter(...args) {
            if (this.$listeners.mouseenter) {
                this.$listeners.mouseenter(...args)
            }

            if (this.isDesktop) {
                this.highlight()
            }
        },

        onMouseLeave(...args) {
            if (this.$listeners.mouseleave) {
                this.$listeners.mouseleave(...args)
            }

            if (this.isDesktop) {
                this.clearHighlight();
            }
        },

        highlight() {
            this.mouseover = true
            this.$action("addComponent", { name: this.$options.name, id: this.$attrs.id })

        },

        clearHighlight() {
            this.mouseover = false
            this.$action("removeComponent", { name: this.$options.name, id: this.$attrs.id })

        },

        scrollIntoView(value) {
            if (this.$attrs.id === value) {
                this.$el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
            }
        },

        onClick(...args) {
            if (this.$listeners.click) {
                this.$listeners.click(...args)
            }

            if (this.allowEdit) {
                const [event] = args
                const name = this.$options.name
                const id = this.$attrs.id


                if (this.isMobile) {
                    EventBus.$emit(events.CLEAR_COMPONENT_HIGHLIGHT)
                    this.highlight();
                    EventBus.$once(events.CLEAR_COMPONENT_HIGHLIGHT, this.clearHighlightBind)
                }

                event.preventDefault()
                event.stopPropagation()

                this.$action("setComponent", { id, name })
                this.$action("setComponents")

                if (!this.open) {
                    this.$action("setOpen", true)
                }
            }
        },
    },
}
