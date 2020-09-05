<template>
  <div class="flex mt-5">
    <input
      v-model="text"
      class="m-2 p-2 focus:outline-none focus:shadow-outline flex-grow rounded-lg border-2 border-opacity-50 border-gray-800"
      type="text"
      placeholder="Enter A New Task To Do..."
      @keypress.enter="onAdd"
    />
    <div class="flex-grow-0">
      <button
        class="m-2 focus:outline-none focus:shadow-outline hover:bg-green-400 active:bg-green-600 p-2 px-5 rounded-lg border-2 border-opacity-50 border-gray-800"
        @click="onAdd"
      >
        add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { text: '' }
  },
  methods: {
    onAdd() {
      if (this.text !== '') this.$emit('add', this.text)
      this.text = ''
    },
  },
}
</script>
