<template>
  <section class="left">
    <div class="inner-left">
      <h2 class="site-subtitle">Data Engineer <br> based in Berlin</h2>
      <ul class="social-menu">
        <li v-for="item in socialLinks" :key="item.name">
          <a :href="item.url" :target="item.external ? '_blank' : '_self'">
            <i :class="item.icon"></i> {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LeftColumn',
  data() {
    return {
      socialLinks: [
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/minhazratul/',
          icon: 'fab fa-sm fa-linkedin',
          external: true
        },
        {
          name: 'github',
          url: 'https://www.github.com/ratulotron/',
          icon: 'fab fa-sm fa-github',
          external: true
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/ratulotron/',
          icon: 'fab fa-sm fa-facebook',
          external: true
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/ratulotron/',
          icon: 'fab fa-sm fa-instagram',
          external: true
        },
        {
          name: 'resume',
          url: '#',
          icon: 'fa fa-sm fa-paperclip',
          external: false
        },
        {
          name: 'email',
          url: '#',
          icon: 'fa fa-sm fa-envelope',
          external: false
        },
        {
          name: '',
          url: '#',
          icon: '',
          external: false
        }
      ]
    }
  }
}
</script>
