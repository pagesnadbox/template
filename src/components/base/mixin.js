import { mapActions, mapState } from 'vuex'
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
                this.clearHighligh();
            }
        }
    },

    watch: {
        id: "scrollIntoView"
    },

    computed: {
        ...mapState('settings', ['id', 'allowEdit', 'open', 'showHighlighter']),

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
            }
        },

        mixinClasses() {
            return [
                ...(this.classes || []),
                ...(this.hasHighlight ? ['hightlight'] : []),
            ]
        },

        hasHighlight() {
            return (this.selected || (this.allowEdit && this.mouseover))
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
                this.highligh()
            }
        },

        onMouseLeave(...args) {
            if (this.$listeners.mouseleave) {
                this.$listeners.mouseleave(...args)
            }

            if (this.isDesktop) {
                this.clearHighligh();
            }
        },

        highligh() {
            this.mouseover = true
            this.$action("addComponent", { name: this.$options.name, id: this.$attrs.id })

        },

        clearHighligh() {
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
                    this.highligh();
                    EventBus.$once(events.CLEAR_COMPONENT_HIGHLIGHT, this.clearHighlightBind)
                }

                // this.setItems(this.items || [])

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
