<template>
  <div>
    <h1 class="text-center font-bold p-3 pb-0 text-lg text-gray-800">
      TodoList Web Application
    </h1>
    <Input @add="handleAdd" />
    <El
      v-for="t in texts"
      :key="t.id"
      :text="t.text"
      :k="t.id"
      :do="t.do ? true : false"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import El from '@/components/El.vue'

let rand = 1
export default {
  components: {
    Input,
    El,
  },
  data: () => ({
    texts: [
      { id: -1, text: 'Example Of A Task ToDo' },
      { id: 0, text: 'Example Of A Task Done', do: true },
    ],
  }),
  methods: {
    handleDelete(id) {
      this.texts = this.texts.filter((t) => t.id !== id)
    },
    handleAdd(text) {
      this.texts.push({ id: rand++, text })
    },
  },
}
</script>
