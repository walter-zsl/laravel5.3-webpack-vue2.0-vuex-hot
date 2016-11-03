<template>
    <div class="wrapper" id="app">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-button icon="edit">Hello Element</el-button>
            </el-col>
            <el-col :span="18">
                <click></click>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Click from './components/Click.vue'

  export default {
    name: 'app',
    components: {
      Click
    }
  }
</script>
