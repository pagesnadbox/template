<script>
  import Heading from './Heading'
  import Header from '@/mixins/heading'

  export default {
    name: 'BaseTitle',

    extends: Heading,

    mixins: [Header],

    props: {
      size: {
        type: String,
        default: '',
      },
      mobileSize: {
        type: String,
        default: '',
      },
      tag: {
        type: String,
        default: 'h3',
      },
      weight: {
        type: String,
        default: '',
      },
    },
  }
</script>
