<script>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { FunnelIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    FunnelIcon,
  },
  setup() {
    const userStore = useUserStore()
    const showSortOptions = ref(false)

    const updateSearch = (event) => {
      userStore.updateSearch(event.target.value)
    }

    const toggleSortOptions = () => {
      showSortOptions.value = !showSortOptions.value
    }

    const sortUsers = (key) => {
      userStore.updateSort(key)
      showSortOptions.value = false
    }

    return {
      search: userStore.filters.search,
      showSortOptions,
      updateSearch,
      toggleSortOptions,
      sortUsers,
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="sorting-options">
        <button @click="toggleSortOptions"><FunnelIcon class="icon" /> Filter</button>
        <div v-if="showSortOptions" class="sort-menu">
          <p>Sort By</p>
          <p @click="sortUsers('firstName')">
            <label> First Name </label><input type="radio" name="sort" />
          </p>

          <p @click="sortUsers('lastName')">
            <label> Last Name </label>
            <input type="radio" name="sort" />
          </p>
          <p @click="sortUsers('email')">
            <label> Email </label><input type="radio" name="sort" />
          </p>
        </div>
      </div>
      <div class="search-bar">
        <input
          type="text"
          v-model="search"
          placeholder="Search by name or email..."
          @input="updateSearch"
        />
      </div>
    </div>
    <button class="paydues">PAY DUES</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}

.wrapper {
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
}
.search-bar {
  width: 350px;
}
.search-bar input {
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: rgb(248, 244, 244);
  font-weight: bold;
}
.sorting-options {
  position: relative;
  width: 95px;
  border: 2px solid rgb(220, 210, 210);
  border-radius: 8px;
}
.sorting-options .icon {
  height: 30px;
  width: 30px;
  color: rgb(102, 102, 183);
}
.sorting-options button {
  font-size: 18px;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
  width: 100%;
  color: gray;
}
.container .paydues {
  font-size: 15px;
  background-color: #7501f9;
  outline: none;
  border: none;
  height: 40px;
  font-weight: bolder;
  cursor: pointer;
  padding: 5px 15px;
  color: white;
  border-radius: 10px;
}
.sort-menu {
  position: absolute;
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  z-index: 10;
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

.sort-menu p {
  font-size: 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  cursor: pointer;
}
.sort-menu p input {
  transform: scale(1.5);
  margin-right: 5px;
  cursor: pointer;
}
.sort-menu p label {
  cursor: pointer;
}
</style>
