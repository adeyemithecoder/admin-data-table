<script>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import TableRow from './TableRow.vue'
import SearchAndSort from './SearchAndSort.vue'

export default {
  components: { TableRow, SearchAndSort },
  setup() {
    const userStore = useUserStore()

    const sortedFilteredUsers = computed(() => {
      return userStore.filteredUsers
    })

    const totalPayable = computed(() => userStore.totalPayable)

    return {
      sortedFilteredUsers,
      totalPayable,
    }
  },
}
</script>

<template>
  <div class="admin-data-table">
    <SearchAndSort />

    <table class="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>User Status</th>
          <th>Payment Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <TableRow v-for="user in sortedFilteredUsers" :key="user.id" :user="user" />
      </tbody>
    </table>
  </div>
</template>

<style>
.admin-data-table {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  margin-top: 20px;
}

.table {
  width: 100%;
}
.table td {
  border-top: 1px solid rgb(175, 173, 173);
}
.table th {
  text-align: left;
  font-size: 15px;
  padding: 20px;
  font-weight: lighter;
}
</style>
