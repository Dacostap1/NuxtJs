<template>
  <div class="flex-1 overflow-y-scroll">
    <div v-for="contact in contacts" :key="contact.name">
      <ContactComponent
        :avatar="contact.avatar"
        :name="contact.name"
        :last_message="contact.last_message"
        :last_time="contact.last_time"
        :online="contact.online"
      ></ContactComponent>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    contacts: [
      {
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        name: 'Daniel Acosta',
        last_message: 'Holaaaa',
        last_time: 'ahora',
        online: true,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
        name: 'Angelina Jolie',
        last_message: 'Ok, luego hablamos dsdsdddsdsdsdsddsdsdsds',
        last_time: 'ahora',
        online: false,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        name: 'Lucia Cevallos',
        last_message: 'Jajajaja',
        last_time: 'ahora',
        online: true,
      },
    ],
  }),
}
</script>
