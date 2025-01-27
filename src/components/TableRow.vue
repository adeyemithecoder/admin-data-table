<script>
import { useUserStore } from '@/stores/userStore'

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    markAsPaid(userId) {
      const userStore = useUserStore()
      userStore.updatePaymentStatus(userId, 'Paid')
    },
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
  },
}
</script>

<template>
  <tr class="table-row">
    <td class="table-cell checkbox-cell">
      <input
        type="checkbox"
        :checked="user.paymentStatus === 'Paid'"
        :disabled="user.paymentStatus === 'Paid'"
        @change="markAsPaid(user.id)"
      />
    </td>
    <td class="table-cell">
      <p class="user-name">{{ user.firstName }} {{ user.lastName }}</p>
      <span class="user-email">{{ user.email }}</span>
    </td>
    <td class="table-cell">
      <span class="user-status">{{ user.userStatus }}</span>
      <br />
      <span class="last-login">Last login: {{ user.lastLogin }}</span>
    </td>
    <td class="table-cell payment-status">
      <span
        :class="{
          overdue: user.paymentStatus === 'Overdue',
          unpaid: user.paymentStatus === 'Unpaid',
          paid: user.paymentStatus === 'Paid',
        }"
      >
        {{ user.paymentStatus }}
      </span>
      <br />
      <span class="payment-date">{{ user.paymentDate }}</span>
    </td>

    <td class="table-cell amount-cell">${{ user.amount }} <br /><span class="usd">USD</span></td>
    <td class="table-cell action-cell">
      <button @click="toggleDetails" class="view-more-btn">
        {{ showDetails ? 'Close' : 'View More' }}
      </button>
    </td>
  </tr>

  <tr v-if="showDetails" class="details-row">
    <td colspan="6" class="details-cell">
      <div class="details">
        <table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>USER ACTIVITY</th>
              <th>DETAIL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in user.details" :key="index">
              <td class="table-cell">
                <strong>{{ detail.date }}</strong>
              </td>
              <td class="table-cell">{{ detail.activity }}</td>
              <td class="table-cell">{{ detail.detail }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </td>
  </tr>
</template>

<style scoped>
.table-row {
  border-bottom: 1px solid #e5e5e5;
}

.table-cell {
  padding: 12px 16px;
  text-align: left;
  vertical-align: middle;
}

.checkbox-cell {
  text-align: center;
}
.checkbox-cell input {
  transform: scale(1.5);
  cursor: pointer;
}

.amount-cell {
  font-weight: bold;
  color: #333;
}

.action-cell {
  text-align: right;
}

/* User information styles */
.user-name {
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}
.usd {
  font-size: 12px;
  color: gray;
}
.user-email {
  font-size: 12px;
  color: #888;
}

.user-status {
  font-weight: bold;
  color: #555;
}

.last-login {
  font-size: 12px;
  color: #999;
}

/* Payment status styles */
.payment-status .overdue {
  background-color: #ffe4e4; /* Light red background */
  color: #d32f2f; /* Red text */
}

.payment-status .paid {
  background-color: #e6f4ea; /* Light green background */
  color: #388e3c; /* Green text */
}

.payment-status .unpaid {
  background-color: #fff4e5; /* Light orange background */
  color: #ff9800; /* Orange text */
}

/* Dot styles */
.payment-status span::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
}

.payment-status .overdue::before {
  background-color: #d32f2f; /* Red dot */
}

.payment-status .paid::before {
  background-color: #388e3c; /* Green dot */
}

.payment-status .unpaid::before {
  background-color: #ff9800; /* Orange dot */
}

.payment-date {
  font-size: 12px;
  color: #666;
}

/* Details section styles */
.details-row {
  background-color: #f9f9f9;
}

.details-cell {
  padding: 16px;
}

.details {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
}

.details-header {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

/* Button styles */
.view-more-btn {
  color: #1a73e8;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
}

.view-more-btn:hover {
  color: #0056b3;
}
</style>

<!-- <style scoped>
.table-row {
  border-bottom: 1px solid #e5e5e5;
}

.table-cell {
  padding: 12px 16px;
  text-align: left;
  vertical-align: middle;
}

.checkbox-cell {
  text-align: center;
}
.checkbox-cell input {
  transform: scale(1.5);
  cursor: pointer;
}

.amount-cell {
  font-weight: bold;
  color: #333;
}

.action-cell {
  text-align: right;
}

/* User information styles */
.user-name {
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}
.usd {
  font-size: 12px;
  color: gray;
}
.user-email {
  font-size: 12px;
  color: #888;
}

.user-status {
  font-weight: bold;
  color: #555;
}

.last-login {
  font-size: 12px;
  color: #999;
}
/* Payment status style */
.payment-status {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: flex-start; /* Align items to the left */
  font-weight: bold;
  background-color: red;
}

.payment-status span {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
  text-transform: capitalize;
  background-color: black;
}

.payment-status .overdue {
  background-color: #ffe4e4; /* Light red background */
  color: #d32f2f; /* Red text */
}

.payment-status .paid {
  background-color: #e6f4ea; /* Light green background */
  color: #388e3c; /* Green text */
}

.payment-status .unpaid {
  background-color: #fff4e5; /* Light orange background */
  color: #ff9800; /* Orange text */
}

/* Dot styles */
.payment-status span::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
}

.payment-status .overdue::before {
  background-color: #d32f2f; /* Red dot */
}

.payment-status .paid::before {
  background-color: #388e3c; /* Green dot */
}

.payment-status .unpaid::before {
  background-color: #ff9800; /* Orange dot */
}
.payment-date {
  font-size: 12px;
  color: #666;
}

/* Details section styles */
.details-row {
  background-color: #f9f9f9;
}

.details-cell {
  padding: 16px;
}

.details {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
}

.details-header {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

/* Button styles */
.view-more-btn {
  color: #1a73e8;
  background: none;
  border: none;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
}

.view-more-btn:hover {
  color: #0056b3;
}
</style> -->
