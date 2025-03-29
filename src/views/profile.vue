<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { authRepository } from '@/repositories/authRepository'

interface IUser {
  fullName: string
  email: string
}

const user = ref<IUser>()

onMounted(() => {
  const get_user_from_token = async () => {
    const access_token = localStorage.getItem('access_token')
    const res = access_token && (await authRepository.get_user_from_token(access_token))
    user.value = res && res.data
  }
  get_user_from_token()
})

const inputValue = ref('')

watch(inputValue, (newValue, oldValue) => {
  console.log('Input value changed from', oldValue, 'to', newValue)
})
</script>
