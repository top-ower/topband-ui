<template>
  <div style="margin: 20px;">
    <top-input v-model="input" placeholder="请输入内容"></top-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
