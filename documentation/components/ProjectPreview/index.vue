<template>
  <div
    class="project-preview maz-border-radius maz-flex maz-direction-column maz-space-between maz-overflow-hidden maz-border maz-border-solid maz-border-color"
  >
    <div class="project-preview-header maz-border-top-radius">
      <MazImg
        class="project-preview__img maz-border-top-radius"
        :src="project.imgUrl"
        :alt="`image illustration ${project.name}`"
        no-border-radius
        no-shadow
      />
    </div>
    <ProjectPreviewContent :project="project" />
    <ProjectPreviewFooter :project="project" />
  </div>
</template>

<script>
import ProjectPreviewFooter from './_subs/ProjectPreviewFooter'
import ProjectPreviewContent from './_subs/ProjectPreviewContent'
export default {
  name: 'ProjectPreview',
  components: {
    ProjectPreviewFooter,
    ProjectPreviewContent
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .project-preview {
    background-color: $bg-color;
    text-decoration: none;
    transition: all 300ms;
    position: relative;

    &-header {
      overflow: hidden;
      position: relative;
    }

    &:hover,
    &:focus {
      transform: translateY(-3px);
      box-shadow: 0 3px 12px darken($bg-color, 10%);
      outline: none;
    }

    &__img {
      max-width: 100%;
      min-width: 288px;
      width: 100%;
    }
  }

  .maz-is-dark {
    .project-preview {
      background-color: $bg-color-dark-light;

      &:hover,
      &:focus {
        background-color: lighten($bg-color-dark, 5%);
        box-shadow: 0 3px 12px $bg-color-dark;
      }
    }
  }
</style>
