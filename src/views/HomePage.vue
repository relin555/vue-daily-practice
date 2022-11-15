<template>
  <div class="homePage">
    <div class="form" style="margin-bottom: 20px">
      <my-input v-model="searchQuery" style="margin-right: 20px"/>
      <my-button>Search Img</my-button>
    </div>
    <div style="display:flex; flex-wrap:wrap; margin: 0 auto">
      <photos-item @photo="photoGet" v-for="photo in sortImg" :key="photo.id" :photo="photo"/>
      <photo-set v-model:show="openPhoto" :photo="photoSet" :limit="limit" @nextPhoto="nextPhoto" @prewPhoto="prewPhoto"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PhotosItem from '../components/PhotosItem.vue'
import PhotoSet from '../components/PhotoSet.vue'
import FormComponent from '@/components/FormComponent.vue'
import MyInput from '@/components/UI/MyInput.vue'
import MyButton from '@/components/UI/MyButton.vue'
export default {
  components: { PhotosItem, PhotoSet, FormComponent, MyInput, MyButton },
  data ()
  {
    return {
      alboms: [],
      photoSet: {},
      page: 1,
      limit: 10,
      openPhoto: false,
      totalPage: 0,
      searchQuery: ''
      }
    },
  methods: {
    photoGet ( item )
    {
      this.photoSet = item
      this.openPhoto = true 
    },
      async fetchPhoto ()
      {
      try
      {
        let response = await fetch( `https://jsonplaceholder.typicode.com/photos?_page=${this.page}&_limit=${this.limit}`)
        let json = await response.json()
        this.alboms = json
        this.totalPage = Math.ceil(response.headers.get('x-total-count') / this.limit)
      } catch (e){
          console.log('error', e)
      } finally
      {
          
        }
    },
    nextPhoto (item)
    { 
      if (item.id < this.limit)
      {
        let [ next ] = this.alboms.filter( el => el.id === item.id + 1 )
        this.photoSet = next
      }
      
    },
    prewPhoto (item)
    {
      if (item.id > 1)
      {
        let [ prew ] = this.alboms.filter( el => el.id === item.id - 1 )
        this.photoSet = prew
        console.log(true)
      }
      
    }
  },
  computed: {
    sortImg ()
    {
      return this.alboms.filter( el => el.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  mounted ()
  {
      this.fetchPhoto()
    }
  }
</script>

<style lang="scss" scoped>

</style>