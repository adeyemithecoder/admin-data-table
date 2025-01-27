import { defineStore } from 'pinia'
import { users } from '../mock/users'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: users, // Initialize with mock data
    filters: {
      search: '',
      status: 'All', // All, Paid, Unpaid, Overdue
    },
    sortKey: '', // Sorting key (e.g., 'firstName', 'lastName', 'email')
    sortDirection: 1, // 1 for ascending, -1 for descending
  }),
  getters: {
    filteredUsers: (state) => {
      // Apply search and status filters
      let filtered = state.users.filter((user) => {
        const matchesSearch =
          user.firstName.toLowerCase().includes(state.filters.search.toLowerCase()) ||
          user.lastName.toLowerCase().includes(state.filters.search.toLowerCase()) ||
          user.email.toLowerCase().includes(state.filters.search.toLowerCase())
        const matchesStatus =
          state.filters.status === 'All' || user.paymentStatus === state.filters.status
        return matchesSearch && matchesStatus
      })

      // Apply sorting
      if (state.sortKey) {
        filtered = filtered.sort((a, b) => {
          const valueA = a[state.sortKey]?.toString().toLowerCase() ?? ''
          const valueB = b[state.sortKey]?.toString().toLowerCase() ?? ''
          if (valueA < valueB) return -1 * state.sortDirection
          if (valueA > valueB) return 1 * state.sortDirection
          return 0
        })
      }

      return filtered
    },
    totalPayable: (state) => {
      return state.users
        .filter((user) => user.paymentStatus === 'Unpaid' || user.paymentStatus === 'Overdue')
        .reduce((total, user) => total + user.amount, 0)
    },
  },
  actions: {
    updatePaymentStatus(userId, newStatus) {
      const user = this.users.find((user) => user.id === userId)
      if (user) {
        user.paymentStatus = newStatus
      }
    },
    updateSort(key) {
      if (this.sortKey === key) {
        this.sortDirection *= -1 // Toggle direction if sorting by the same key
      } else {
        this.sortKey = key // Set new key
        this.sortDirection = 1 // Default to ascending
      }
    },
    updateSearch(searchTerm) {
      this.filters.search = searchTerm
    },
    updateStatus(status) {
      this.filters.status = status
    },
  },
})
