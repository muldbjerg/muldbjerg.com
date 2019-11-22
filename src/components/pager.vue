<template>
  <nav role="navigation" aria-label="pagination">
    <a
      :href="previousPage(currentPage,totalPages)"
      class="pagination pagination-previous"
      v-if="this.currentPage != 1"
    >← Newer</a>

    <a
      :href="nextPage(currentPage,totalPages)"
      class="pagination pagination-next"
      v-if="currentPage != totalPages"
    >Older →</a>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      baseUrl: window.location.origin + "/blog"
    };
  },
  props: ["currentPage", "totalPages"],
  methods: {
    nextPage(currentPage, totalPages) {
      return `${this.baseUrl}/${currentPage + 1}`;
    },
    previousPage(currentPage, totalPages) {
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`;
    }
  }
};
</script>

<style scope>
.pagination {
  font-size: 32px;
  text-decoration: none;
  transition: all 0.2s var(--standard-easing);
}

.pagination:hover {
  color: var(--brand-color);
  text-decoration: underline;
}

.pagination-previous {
  margin-right: 60px;
}
</style>