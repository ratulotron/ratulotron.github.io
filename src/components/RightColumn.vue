<template>
  <section class="right">
    <section class="inner-right">
      <article>
        <section>
          I am a Bangladeshi software crafter currently living in Berlin, Germany. Over the past 4 years he had
          explored different facets of software development. At the moment he is focused on building data solutions
          and bridging product development with data science.
          <br/><div class="down-pointer"><i class="fa fa-sm fa-arrow-down"></i></div>
        </section>
      </article>
      
      <article>
        <header>
          <h4 class="section-title">Philosophy</h4>
        </header>
        <section>
          Finding right causes to work for has been central to Ratul's goals, let it be professional or
          volunteer.
        </section>
      </article>
      
      <article>
        <header>
          <h4 class="section-title">Timeline</h4>
        </header>
        <section class="timeline">
          <div v-for="item in timelineItems" :key="item.year">
            <span class="activity">{{ item.activity }}</span>
            <span class="year"><i class="fa fa-sm fa-arrow-right"></i> {{ item.year }}</span>
          </div>
        </section>
      </article>
      
      <article>
        <header>
          <h4 class="section-title">About</h4>
        </header>
        <section>{{ aboutText }}</section>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'RightColumn',
  data() {
    return {
      timelineItems: [
        {
          activity: 'Left home to explore Germany',
          year: '2020'
        },
        {
          activity: 'Represented Mentors Without Borders in discussions for collaboration with local NGOs',
          year: '2019'
        },
        {
          activity: 'Graduated as a CS major!',
          year: '2017'
        },
        {
          activity: 'Quit volunteering to finish undergrad. Started career in software development as an intern',
          year: '2015'
        },
        {
          activity: 'Fell in love with Python!',
          year: '2014'
        },
        {
          activity: 'Joined Mozilla as contributor engagement volunteer and ReMo',
          year: '2013'
        },
        {
          activity: 'Started volunteering at CommunityAction as social worker',
          year: '2012'
        }
      ],
      aboutText: `Ratul Minhaz, or less known as his birth name Minhazur Rahman, was born and raised in Dhaka, Bangladesh. As a curious kid, along with his brother he used to break and rebuild all their toys. Eventually in high school when he stumbled upon a C++ book, he found his new hobby of building software. It was a no brainer for him to get into a computer science program for undergrad, however the initial kickback from hardcore CS theoretical courses took of a few notches off of his excitement. He found inspiration once again when he joined the local chapter of Mozilla Foundation and did community engagement for Student Ambassadors and Firefox OS Dev programs for couple of years. He started using Ratul Minhaz as his community persona during the talks he took, as a combination of his nick name and first name. He joined a marketing agency as a web developer during his third year at the university and started his career as a software crafter. After working on full stack projects for a while his concentrated on backend development only, making Python and Django his main choice of tools. He considers himself a life long learner and loves to explore product development as an art method rather than being stuck with one specific area only.`
    }
  }
}
</script>
