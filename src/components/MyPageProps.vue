<template>
  <div> 父元件傳子元件 {{ title }} </div>
</template>

<script>
export default {
  name: 'MyProps',
  props: {
    title: String,
    required: false
  }
}
</script>
