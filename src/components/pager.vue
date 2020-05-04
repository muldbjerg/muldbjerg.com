<template>
  <nav role="navigation" aria-label="pagination">
    <a
      :href="previousPage(currentPage,totalPages)"
      class="pagination pagination-previous"
      v-if="this.currentPage != 1"
    >
      <span>←</span>
      Newer
    </a>

    <a
      :href="nextPage(currentPage,totalPages)"
      class="pagination pagination-next"
      v-if="currentPage != totalPages"
    >
      Older
      <span>→</span>
    </a>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      baseUrl: "/blog"
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
  background-color: transparent;
}

.pagination span {
  transition: all 0.2s var(--standard-easing);
}

.pagination-previous {
  margin-right: 60px;
}

.pagination-previous span {
  padding-left: 20px;
}

.pagination-previous:hover span {
  padding-left: 0px;
  padding-right: 20px;
}

.pagination-next:hover span {
  padding-left: 20px;
}
</style>