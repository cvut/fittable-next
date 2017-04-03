<template>
  <div>
    Settings page<br>
    Go to <router-link to="/">back</router-link>.
    <pre>
      {{ example }}
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'Settings',
    asyncData ({ route }) {
      // testing the async data load
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            example: 'this is async loaded',
          })
        }, 2500)
      })
    },
  }
</script>
