const meta = require('./meta.json')

function toMarkdown({ url, name, full_name, homepage, description, paper, introduced_date, warning, modalities, tasks, languages, variants, num_papers, data_loaders }){
  return `
## ${full_name || name}
### Tasks
${tasks.map(({ task, url }) => `- [${task}](https://web.archive.org/web/20240412153636/${url})`).join('\n')}
### Description
${description.join(' ').replace(/#+/, '').split(/[.?!] ?/).map(x => x.trim()).join('. ')}
${!(paper?.url || paper?.title) ? '' :
`
### Paper
Link: [${paper.title ?? full_name}](${paper.url})
Introduced Date: ${introduced_date}
Number of Associated Papers: ${num_papers ?? `uknown`}
`
}
${!data_loaders?.length ? '' :
  `
### Data Loaders
${data_loaders.map(({ url, repo, frameworks }) => `- ${url ? `\turl: ${url}` : url}${repo ? `\n\trepo:${repo}` : ''}${frameworks.length ? `\n\t${frameworks?.join(', ') || ''}` : ''}`).join('\n')}
  `
}
### Additional Links
- ${homepage}
  `
}

const md = meta.map(toMarkdown).join('\n-------------------------------------------------------------------------------------------\n')

console.log(md)