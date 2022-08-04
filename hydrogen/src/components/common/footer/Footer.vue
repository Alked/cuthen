<template>
  <div class="footer">
    <div class="col">
      <span class="title bold">CUThen</span>
      <span class="bold small">
        {{ version }}
      </span>
      <span class="bold small">
        <a href="https://github.com/Alked/cuthen" target="_blank">
          <i class="pi pi-github"></i>
          github.com/Alked/cuthen
        </a>
      </span>
    </div>
    <!-- Add a selector to choose theme -->
    <div class="selector">
        <select class="sel_color" v-model="selectClassEnd" @change="selectClass($event)">
        <option selected = "selected">dark blue</option>
        <option
          v-for="(options, id) in selectClassData"
          :key="id"
          :value="options.title"
        >
          {{ options.title }}
        </option>
      </select>
    </div>
    <div class="col">
      <span class="bold">Developed by</span>
      <span
        class="contributor"
        v-for="contributor in contributors" :key="contributor.name">
        <a :href="contributor.url" target="_blank">
          <i class="pi pi-github"></i>
          {{ contributor.name }}
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFooter',
  data() {
    return {
      selectClassData: [
        // options
        { id: 1, title: 'dark pink' },
        { id: 2, title: 'dark green' },
        { id: 3, title: 'dark yellow' },
        { id: 4, title: 'dark grey' },
      ],
      selectClassEnd: 'dark blue', // default option
      select_class_id: '',
    };
  },
  methods: {
    // 类别选中
    selectClass(event) {
      this.select_class_id = event.target.value;
      // console.log(this.select_class_id);
      this.$emit('colorChange', this.select_class_id.split(' ').join('-'));
    },
  },
  props: {
    contributors: Array,
    version: String,
  },
};
</script>
<style scoped>
 a, a:hover, a:focus, a:active {
  text-decoration: none;
  color: inherit;
 }
.footer {
  width: 1200px;
  border-radius: 1rem 1rem 0 0;
  background: var(--footer-bg);
  color: var(--footer-font-color);
  font-family: 'Montserrat';
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.col {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: flex-start;
}
.bold {
  font-weight: bold;
}
.small {
  font-size: 0.8rem;
}
.title {
  font-size: 2rem;
  border: 5px solid var(--footer-title-border-color);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
.contributor {
  background: var(--footer-contributor-bg);
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  color: var(--footer-contributor-font-color);
}
/* selector */
.selector {
  display: inline-block;
  position: relative;
  z-index: 2;
  font-size: 1.6rem;
  height: 2rem;
  line-height: 2rem;
  width: 8rem;
  /* flex: 1; */
  background:  var(--footer-font-color);
  color:aliceblue;
  box-sizing: border-box;
  border-radius: 0.5rem;
}
.sel_color{
  color:var(--plain-text-color);
}
.selector:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 0.5rem solid transparent;
  border-top-color: var(--footer-bg);
  top: 50%;
  right: 1rem;
  cursor: pointer;
  z-index: -2;
  margin-top: -0.25rem;
}
.selector select {
  width: 100%;
  border: none;
  height: 2rem;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  vertical-align: top;
  padding-left: 1rem;
}
.selector select:focus {
  outline: none;
}
</style>
