<template>
  <div
    class="project-preview-footer maz-p-3 maz-flex maz-justify-end maz-border-top maz-border-top-solid maz-border-color"
  >
    <MazBtn
      v-if="project.githubUrl"
      :href="project.githubUrl"
      class="maz-mr-2"
      :color="hasDarkTheme ? 'white' : 'dark'"
      target="_blank"
    >
      GITHUB
    </MazBtn>
    <MazBtn
      v-if="project.npmUrl"
      :href="project.npmUrl"
      color="danger"
      class="maz-mr-2"
      target="_blank"
    >
      <svg viewBox="0 0 780 250">
        <path
          fill="#231F20"
          d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
        />
      </svg>
    </MazBtn>
    <MazBtn
      v-if="project.demoUrl"
      :href="project.demoUrl"
      color="primary"
      target="_blank"
    >
      SHOW PROJECT
    </MazBtn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectPreviewFooter',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['hasDarkTheme'])
  }
}
</script>
