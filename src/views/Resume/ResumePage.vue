<template>
  <div>
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <figure class="image is-4by3">
            <img src="/img/icons/android-chrome-512x512.png" alt="Jonathon Gardner logo">
          </figure>
        </div>
        <div class="column is-6 is-offset-1">
          <h1 class="title is-2">
            Jonathon Gardner
          </h1>
          <h2 class="subtitle is-4">
            Security Software Engineer
          </h2>
        </div>
      </div>
      <div class='columns'>
        <div class="column is-10 is-offset-1 content is-medium has-text-left">
          <h1>Skills</h1>
          <p class="tags are-medium skill-group" v-for='group in skillGroups' :key='group.type'>
            <strong class="skill-group-label">{{ group.label }}:</strong>
            <span class="tag" v-for='skill in group.skills' :style='skillColor(group.type)' :key='skill'>{{ skill }}</span>
          </p>
          <h1>About</h1>
          <p>
            I am a security-focused software engineer at Cisco specializing in binary analysis, credential detection, SBOM automation, and scalable
            backend systems. I build tools that unpack firmware and disk images, identify software components and exposed credentials, and support
            software supply-chain compliance. My work spans Go and Ruby services, API and data-model performance, and SPDX workflows. You can
            <a href='/content/JonathonGardnerResume.pdf' target="_blank" rel="noopener noreferrer">download my full résumé</a> for more detail.
          </p>
          <h2>Personal Projects</h2>
          <p>
            Outside work, I occasionally contribute fixes to open-source projects. You can view my
            <a href='https://github.com/jonathongardner?tab=repositories' target="_blank" rel="noopener noreferrer">recent repositories on GitHub</a>.
            When I am not coding, I enjoy spending time with my family, running, and cycling.
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
      skillGroups: [
        { type: 'security', label: 'Security and standards', skills: ['SPDX', 'CycloneDX', 'OCI', 'TruffleHog', 'Syft'] },
        { type: 'development', label: 'Development', skills: ['Go', 'Ruby on Rails', 'GraphQL', 'Sidekiq', 'River'] },
        { type: 'data', label: 'Data and platforms', skills: ['PostgreSQL', 'MySQL/MariaDB', 'MongoDB', 'AWS', 'Linux', 'Git'] },
        { type: 'binary', label: 'Binary tooling', skills: ['libguestfs', 'libarchive', 'go-diskfs', 'SquashFS'] },
      ],
      projects: [
        { label: 'a2zar', desc: 'A pure Go archive reader for uncommon archive formats', href: 'https://github.com/jonathongardner/a2zar' },
      ],
    }
  },
  methods: {
    skillColor (skillType) {
      const colors = {
        security: '#B3FCF6',
        development: '#fffeb8',
        data: '#e2e5ff',
        binary: '#cae8cd',
      }

      return { 'background-color': colors[skillType] }
    }
  }
}
</script>

<style scoped>
.skill-group-label {
  align-self: center;
  margin-right: 0.25rem;
}
</style>
