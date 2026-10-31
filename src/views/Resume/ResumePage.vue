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
            Software Engineer
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
            I am a software engineer at Cisco, where I help build an application that scans binary artifacts for security risks. It unpacks binaries,
            archives, compressed files, and disk images into their underlying contents, then identifies software bills of materials (SBOMs) and exposed
            credentials. The application also checks potential credentials against APIs to reduce false positives. Our stack includes Go, Ruby, AWS,
            MySQL, MongoDB, Sidekiq, River, and PostgreSQL. I recently helped my team adopt Go, and I enjoy working with its speed and robustness.
            Ruby and Rails make it easy to build quickly, while Go offers performance and reliability. I especially enjoy improving performance through
            system design and database query optimization. You can see my full resume
            <a href='/content/JonathonGardnerResume.pdf' target="_blank" rel="noopener noreferrer">here</a>
          </p>
          <h2>Personal Projects</h2>
          <p>
            I no longer have time for personal projects. Now I have kids and I would rather spend time with them
            or go for a run/bike ride. Feel free to view my
            <a href='https://github.com/jonathongardner?tab=repositories' target="_blank" rel="noopener noreferrer">recent repositories</a>
            though because I occasionally get some time and mes around with GoLang. I also Fork some different
            OpenSource repos to implement different fixes.
          </p>
          <h2>Showcase Projects</h2>
          <ul>
              <li v-for='project in projects' :key='project.label'><a :href='project.href' target="_blank" rel="noopener noreferrer">{{ project.label }}</a> - {{ project.desc }}</li>
          </ul>
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
          { label: 'GoLang' },
          { label: 'Ruby' },
          { label: 'GraphQL' },
        ],
        disks: [
          { label: 'GuestFS' },
          { label: 'LibArchive' },
          { label: 'go-diskfs' },
          { label: 'Squashfs' },
        ],
        standards: [
          { label: 'SPDX' },
          { label: 'CycloneDX' },
          { label: 'Open Container' },
        ],
        framework: [
          { label: 'River Queue' },
          { label: 'Ruby on Rails' },
          { label: 'Sidekiq' },
        ],
        db: [
          { label: 'MongoDB' },
          { label: 'PostgreSQL' },
          { label: 'MariaDB' },
          { label: 'MySQL' },
        ],
        other: [
          { label: 'git' },
          { label: 'AWS' },
          { label: 'Linux' },
          { label: 'Syft' },
          { label: 'Trufflehog' },
        ]
      },
      projects: [
        { label: 'a2zar', desc: 'A pure go archive reader for uncommon archive formats', href: 'https://github.com/jonathongardner/a2zar' },
        { label: 'Crazy Games', desc: 'VueJS app for simple 1 player games', href: '/crazy-games/' },
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
      if (skillType === 'disks') {
        // light green
        toReturn['background-color'] = '#cae8cd'
      }
      if (skillType === 'standards') {
        // light green
        toReturn['background-color'] = '#B3FCF6'
      }

      return toReturn
    }
  }
}
</script>
