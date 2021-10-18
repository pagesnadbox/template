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
        if (this.$el.setAttribute) {
            this.$el.setAttribute("id", this.$attrs.id);
        }
    },

    watch: {
        id: "scrollIntoView",
        highlightedComponentId: "onHighlightedIdChange",
        hasHighlight: "onHasHighlightChange"

    },

    computed: {
        ...mapState('settings', ['id', 'allowEdit', 'open', 'showHighlighter', "highlightedComponentId", "highlightForce"]),

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
                "pb-default-component",
                ...(this.classes || []),
                ...(this.hasHighlight ? ['hightlight'] : []),
            ]
        },

        mixinStyles() {
            const spaces = [
                "Top",
                "Right",
                "Bottom",
                "Left",
            ].reduce((result, p) => {
                if (this.$attrs[`margin${p}`]) {
                    result[`margin${p}`] = `${this.$attrs[`margin${p}`]}px !important`
                }
                if (this.$attrs[`padding${p}`]) {
                    result[`padding${p}`] = `${this.$attrs[`padding${p}`]}px !important`
                }
                return result;
            }, {})

            if (this.$attrs.margin !== null && this.$attrs.margin !== undefined) {
                spaces.margin = this.$attrs.margin
            }
            if (this.$attrs.padding !== null && this.$attrs.padding !== undefined) {
                spaces.padding = this.$attrs.padding
            }
            return {
                ...(this.styles || {}),
                ...(this.colorStyles || {}),
                ...spaces,
            }
        },

        hasHighlight() {
            return (this.selected && this.allowEdit) || ((this.editable || this.highlightForce) && (this.selected || (this.allowEdit && this.mouseover)))
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
        createTag() {
            if (this.pgSandboxComponentTag) return this.pgSandboxComponentTag;

            this.pgSandboxComponentTag = document.createElement("div");
            this.pgSandboxComponentTag.className = "name-tag";
            this.pgSandboxComponentTag.textContent = this.$options.name;
            this.$el.appendChild(this.pgSandboxComponentTag);

            return this.pgSandboxComponentTag;
        },

        toggleTag(value) {
            if (!this.pgSandboxComponentTag || !this.pgSandboxComponentTag.style) return;

            if (value) {
                this.pgSandboxComponentTag.style.display = "block";
            } else {
                this.pgSandboxComponentTag.style.display = "none";
            }
        },

        onHasHighlightChange(value) {
            this.createTag();
            this.toggleTag(value);
        },

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
                    click: this.onMixinClick.bind(this),
                    mouseenter: this.onMixinMouseEnter.bind(this),
                    mouseleave: this.onMixinMouseLeave.bind(this),
                }
            }

            return listeners
        },

        onMixinMouseEnter(...args) {
            if (this.$listeners.mouseenter) {
                this.$listeners.mouseenter(...args)
            }

            if (this.isDesktop) {
                this.highlight()
            }
        },

        onMixinMouseLeave(...args) {
            if (this.$listeners.mouseleave) {
                this.$listeners.mouseleave(...args)
            }

            if (this.isDesktop) {
                this.clearHighlight();
            }
        },

        highlight() {
            if (!this.allowEdit) return;
            this.mouseover = true
            this.$action("addComponent", { name: this.$options.name, id: this.$attrs.id })

        },

        clearHighlight() {
            if (!this.allowEdit) return;
            this.mouseover = false
            this.$action("removeComponent", { name: this.$options.name, id: this.$attrs.id })

        },

        scrollIntoView(value) {
            if (this.$attrs.id === value) {
                this.$el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
            }
        },

        onMixinClick(...args) {
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
                // this.$action("setComponents")

                if (!this.open) {
                    this.$action("setOpen", true)
                }
            }
        },
    },
}
