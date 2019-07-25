<template>
  <div id="app">
    <Timeline v-bind:elements="simpleList"/>
    <Timeline v-bind:elements="listWithText"/>

    <Timeline v-bind:elements="listWithTextAndIcons">
      <template v-slot:element="{element}">
        <span class="cool-title">{{element.title}}</span>
        <div class="cool-text">
          {{element.text}}
        </div>
      </template>
    </Timeline>
  </div>
</template>

<script>
import { faPlus, faCommentAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

import Timeline from './components/Timeline.vue'

export default {
  name: 'app',
  data() {
    return {
      simpleList: [
        "Article published",
        "Comment 1 posted",
        "Comment 2 posted",
        "Article updated"
      ],
      listWithText: [
        {title: "Article published", text: "643 words, posted by Joe"},
        {title: "Comment 1 posted", text: "by anonymous"},
        {title: "Comment 2 posted", text: "by someone"},
        {title: "Article updated", text: "changes: corrected facts"}
      ],
      listWithTextAndIcons: [
        {title: "Article published", text: "643 words, posted by Joe", icon: faPlus},
        {title: "Comment 1 posted", text: "by anonymous", icon: faCommentAlt},
        {title: "Comment 2 posted", text: "by someone", icon: faCommentAlt},
        {title: "Article updated", text: "changes: corrected facts", icon: faEdit}
      ]
    };
  },
  components: {
    Timeline
  }
}
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
  }
</style>

<style lang="less" scoped>
  span.cool-title {
    font-variant: small-caps;
    text-transform: lowercase;
  }

  div.cool-text {
    font-style: italic;
    font-size: 0.8rem;
    color: #BBB;
  }
</style>
