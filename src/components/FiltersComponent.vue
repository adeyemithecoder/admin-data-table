<script>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'

export default {
  setup() {
    const userStore = useUserStore()

    const changeTab = (tab) => {
      console.log(tab)
      userStore.updateStatus(tab)
    }

    const totalPayable = computed(() => userStore.totalPayable)
    const currentTab = computed(() => userStore.filters.status)

    return {
      tabs: ['All', 'Paid', 'Unpaid', 'Overdue'],
      currentTab,
      changeTab,
      totalPayable,
    }
  },
}
</script>

<template>
  <div>
    <!-- Tabs Section -->
    <div class="tabs">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: currentTab === tab }"
          @click="changeTab(tab)"
        >
          {{ tab }}
        </li>
      </ul>

      <span>Total Payable Amount: ${{ totalPayable }} USD</span>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgb(220, 210, 210);
}

.tabs ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.tabs li {
  cursor: pointer;
  padding: 5px 15px;
}

.tabs .active {
  border-bottom: 2px solid black;
  color: #007bff;
}
</style>
