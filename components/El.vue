<template>
  <div :class="classes[0]" class="flex mx-2 my-4 rounded-lg p-3">
    <div class="flex-grow flex items-center" @click="toggle">
      <svg
        v-if="task"
        class="w-5 h-5 fill-current hover:text-red-700 text-green-700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.672 1.911a1 1 0 1 0-1.932.518l.259.966a1 1 0 0 0 1.932-.518l-.26-.966zM2.429 4.74a1 1 0 1 0-.517 1.932l.966.259a1 1 0 0 0 .517-1.932l-.966-.26zm8.814-.569a1 1 0 0 0-1.415-1.414l-.707.707a1 1 0 1 0 1.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 0 0 3.465 9.12l-.708.707a1 1 0 0 0 1.415 1.415zm3.2-5.171a1 1 0 0 0-1.3 1.3l4 10a1 1 0 0 0 1.823.075l1.38-2.759 3.018 3.02a1 1 0 0 0 1.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 0 0-.076-1.822l-10-4z"
        />
      </svg>
      <svg
        v-else
        class="w-5 h-5 fill-current hover:text-green-700 text-red-700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
        />
      </svg>

      <span :class="classes[1]" class="ml-2 p-1 rounded-lg">{{ text }}</span>
    </div>
    <div class="flex-grow-0">
      <button
        :class="classes[2]"
        class="font-medium tracking-wide w-full bg-opacity-50 rounded px-5 py-1"
        @click="onDelete"
      >
        delete
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    do: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
    k: {
      type: Number,
      required: true,
    },
  },
  data: (p) => ({ task: p.do, id: p.k }),
  computed: {
    classes() {
      return this.task
        ? [
            'bg-gray-300',
            'text-gray-900 line-through ',
            'bg-green-700 hover:bg-red-700',
          ]
        : [
            'bg-gray-900',
            'text-gray-200',
            'bg-red-700 text-gray-300 hover:bg-green-700',
          ]
    },
  },
  methods: {
    toggle() {
      this.task = !this.task
    },
    onDelete() {
      this.$emit('delete', this.id)
    },
  },
}
</script>
