<template>
  <div>
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <figure class="image is-4by3">
            <img src="/img/icons/android-chrome-512x512.png" alt="Description">
          </figure>
        </div>
        <div class="column is-6 is-offset-1">
          <h1 class="title is-2">
            Jonathon Gardner
          </h1>
          <h2 class="subtitle is-4">
            Full Stack Developer
          </h2>
        </div>
      </div>
      <div class='columns'>
        <div class="column is-10 is-offset-1 content is-medium has-text-left">
          <h1>Skills</h1>
          <p class="tags are-medium" v-for='(skills, type) in allSkills' :key='type'>
            <span class="tag" v-for='skill in skills' :style='skillColor(type)' :key='skill.label'>{{ skill.label }}</span>
          </p>
          <h1>About</h1>
          <p>
            I am a full stack developer currently working at Cisco. I work with a variety of technologies
            including Ruby on Rails, Sinatra, GraphQL, Sidekiq (with Redis), MariaDB (MySQL), MongoDB and React.
            I mostly work on the backend (APIs/DBs) but will occasionally help with the UI when needed. My preferred and
            strongest UI framework is VueJS though. One of my passions in programming is perfomance and I enjoy
            doing that through optimizing database models/structures. You can see my full resume
            <a href='/content/JonathonGardnerResume.pdf' target="_blank">here</a>
          </p>
          <h2>Personal Projects</h2>
          <p>
            To support some projects I've worked on I created two gems
            <a href='https://github.com/jonathongardner/slots-jwt' target="_blank">slots-jwt</a> and
            <a href='https://github.com/jonathongardner/graphql_lazy_load' target="_blank">GraphQL Lazy Load</a>.
            slots-jwt is a rails engine to help with authentication by using JSON Web Tokens. The benifit of using
            JWT is that most request can be authenticated without touching the database. GraphQL Lazy Load is a gem that
            can be integrated with ruby GraphQL to help reduce N+1 queries.
          </p>
          <p>
            Another project I am working on is <a href='https://hisscript.firebaseapp.com/' target="_blank">HisScript</a> which is a
            progressive web app to help memorize scripture. It's written in Javascript and VueJS using firebase.
          </p>
          <h2>Showcase Projects</h2>
          <p>
            <ul>
              <li v-for='project in projects' :key='project.label'><a :href='project.href' target="_blank">{{ project.label }}</a> - {{ project.desc }}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      allSkills: {
        lang: [
          { label: 'Ruby' },
          { label: 'GraphQL' },
          { label: 'Javascript' },
        ],
        framework: [
          { label: 'Ruby on Rails' },
          { label: 'Sinatra' },
          { label: 'ReactJS' },
          { label: 'Vue.js' },
        ],
        db: [
          { label: 'PostgreSQL' },
          { label: 'MongoDB' },
          { label: 'MySQL' },
          { label: 'MariaDB' },
        ],
        test: [
          { label: 'MiniTest' },
          { label: 'Jest' },
        ],
        other: [
          { label: 'git' },
          { label: 'Linux' }
        ]
      },
      projects: [
        { label: 'HisScript', desc: 'scripture memory', href: 'https://hisscript.firebaseapp.com/' },
        { label: 'Slots JWT', desc: 'rails JWT authentication gem', href: 'https://github.com/jonathongardner/slots-jwt' },
        { label: 'GraphQL Lazy Load', desc: 'rails GraphQL performance gem', href: 'https://github.com/jonathongardner/graphql_lazy_load' },
        { label: 'EasyNCRYPTION', desc: 'VueJS app for encrypting files', href: '/easyncryption' },
        { label: 'Crazy Games', desc: 'VueJS app for simple 1 player games', href: '/crazy-games' },
      ],
    }
  },
  methods: {
    skillColor (skillType) {
      // light orange
      const toReturn = { 'background-color': '#ffd1b3' }
      if (skillType === 'lang') {
        // ruby
        toReturn['background-color'] = '#dba7a7'
      }
      if (skillType === 'db') {
        // light blue
        toReturn['background-color'] = '#e2e5ff'
      }
      if (skillType === 'framework') {
        // light baby blue
        toReturn['background-color'] = '#fffeb8'
      }
      if (skillType === 'test') {
        // light green
        toReturn['background-color'] = '#cae8cd'
      }

      return toReturn
    }
  }
}
</script>
