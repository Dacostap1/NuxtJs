<template>
  <div class="flex-1 overflow-y-scroll">
    <div v-for="(contact, index) in filterContacts" :key="index">
      <ContactComponent
        :avatar="contact.avatar"
        :name="contact.name"
        :last_message="contact.last_message"
        :last_time="contact.last_time"
        :visto="contact.visto"
        :online="contact.online"
        @click.native="$emit('selectedContact', contact)"
      ></ContactComponent>
    </div>
  </div>
</template>
<script>
export default {
  props: ['search'],
  data: () => ({
    contacts: [
      {
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        name: 'Daniel Acosta',
        last_message: 'Holaaaa',
        last_time: 'ahora',
        visto: true,
        online: true,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
        name: 'Angelina Jolie',
        last_message: 'Ok, luego hablamos',
        last_time: 'Hace 30 min',
        visto: false,
        online: false,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        name: 'Lucia Cevallos',
        last_message: 'Te lo envío ahora',
        last_time: 'ahora',
        visto: false,
        online: true,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
        name: 'Scarlett Johansom',
        last_message: 'Jajajaja',
        last_time: 'ahora',
        visto: true,
        online: true,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/86.jpg',
        name: 'Emma Stone',
        last_message: 'Hola',
        last_time: 'ahora',
        visto: true,
        online: true,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
        name: 'Julia Roberts',
        last_message: 'Jajajaja',
        last_time: 'Hace 10 min',
        visto: true,
        online: true,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
        name: 'Elizabeth Olsen',
        last_message: 'Nos vemos luego',
        last_time: 'ahora',
        visto: false,
        online: true,
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/83.jpg',
        name: 'OTro',
        last_message: 'Jajajaja',
        last_time: 'Hace 1 min',
        visto: true,
        online: false,
      },
    ],
  }),
  computed: {
    filterContacts() {
      return this.search === ''
        ? this.contacts
        : this.contacts.filter((contact) => {
            return contact.name
              .toLowerCase()
              .includes(this.search.toLowerCase())
          })
    },
  },
  methods: {
    test() {
      console.log('xd')
    },
  },
}
</script>
