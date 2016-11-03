<template>
    <div class="container">
        <h2>{{ count }}</h2>
        <button @click="increment">点击加一</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'count'
            ])
        },
        methods: {
            ...mapActions([
                'increment'
            ])
        },
        data () {
            return {
                msg: 'This is profile'
            }
        },
        mounted () {
            console.log('This is Profile mounted');
        }
    }
</script>