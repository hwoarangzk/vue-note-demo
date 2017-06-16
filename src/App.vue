<template>
    <div id="app">
        <actions></actions>
        <list></list>
        <editor></editor>
    </div>
</template>

<script>

import Actions from '@/components/Actions'
import List from '@/components/List'
import Editor from '@/components/Editor'

export default {
    name: 'app',
    components: {
        Actions,
        List,
        Editor
    }
}
</script>

<style lang="less">

    * {
        margin: 0;
        padding: 0;
        font-family: 'microsoft yahei';
        box-sizing: border-box;
    }

    #app {
        height: 100%;
    }
</style>
