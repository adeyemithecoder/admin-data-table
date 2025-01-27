<script>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import FiltersComponent from '@/components/FiltersComponent.vue'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    FiltersComponent,
    DataTable,
  },
  setup() {
    const userStore = useUserStore()

    // Computed Properties
    const currentTab = computed(() => userStore.filters.status)

    // Methods
    const changeTab = (tab) => {
      userStore.updateStatus(tab)
    }

    const markAsPaid = (userId) => {
      userStore.updatePaymentStatus(userId, 'Paid')
    }

    return {
      userStore, // Expose userStore to template
      tabs: ['All', 'Paid', 'Unpaid', 'Overdue'],
      currentTab,
      filters: userStore.filters,
      sortedFilteredUsers: userStore.filteredUsers,
      totalPayable: userStore.totalPayable,
      changeTab,
      markAsPaid,
    }
  },
}
</script>

<template>
  <div class="admin-dashboard">
    <h3>Table Heading</h3>
    <FiltersComponent
      :tabs="tabs"
      :current-tab="currentTab"
      :filters="filters"
      :show-sort-options="userStore.sortKey"
      @change-tab="changeTab"
      @toggle-sort-options="() => userStore.updateSort('')"
      @sort-users="(key) => userStore.updateSort(key)"
    />

    <!-- Data Table Section -->
    <DataTable
      :users="sortedFilteredUsers"
      :mark-as-paid="markAsPaid"
      :total-payable="totalPayable"
    />
  </div>
</template>

<style scoped>
.admin-dashboard {
  max-width: 1100px;
  margin: auto;
  padding: 20px 40px;
  font-family: Arial, sans-serif;
}
.admin-dashboard h3 {
  color: gray;
  margin: 10px;
}
</style>
