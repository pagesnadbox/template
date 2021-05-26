export default {
    props: {
        color: {
            type: String,
        },
    },

    computed: {
        colorStyles() {
            return {
                color: this.color,
            };
        },
    }
}