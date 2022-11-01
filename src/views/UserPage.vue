<template>
  <div class="user-page">
    <my-input v-model="searchUser" />
    <my-button @click="openFormUser" style="margin-left: 20px">add user</my-button>
    <create-user v-model:show="showFormUser"/>
    <div class="user-page__card-wrapper">
      <user-card v-for="user in searchUserName" :key="user.id" :user="user"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MyInput from '@/components/UI/MyInput.vue'
import UserCard from '@/components/userCard.vue'
import MyButton from '@/components/UI/MyButton.vue'
import CreateUser from '@/components/createUser.vue'

  export default {
  components: {MyInput, UserCard, MyButton, CreateUser },
  name: 'user-page',
  data ()
  {
    return {
      searchUser: '',
      limit: 10,
      page: 1,
      users: [],
      limitPage: 0,
      showFormUser: false
    }
  },
  methods: {
    async fecthUser ()
    {
      try
      {
        const response = await axios.get( 'https://jsonplaceholder.typicode.com/users', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        } )
        this.users = response.data.map(el => el = {fullName:el.name.split(' '), ...el})
        this.limitPage = Math.ceil(response.headers['x-total-count'] / this.limit)
      } catch (e)
      {
        console.log('error', e)
      }
    },
    openFormUser ()
    {
      this.showFormUser = true
    }
  },
  computed: {
    searchUserName ()
    {
      return this.users.filter(el => el.name.toLowerCase().includes(this.searchUser.toLowerCase()) )
    }
  },
  mounted ()
  {
   this.fecthUser()
  }
  }
</script>

<style lang="scss" scoped>
  .user-page {

    &__card-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    &__card {
      width: 300px;
      max-height: 250px;
    }
    &__popup {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
</style>