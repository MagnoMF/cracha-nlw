const sociaLinks = {
  twitter: '',
  facebook: '',
  youtube: '',
  instagram: 'magnomirandaferreira',
  github: 'MagnoMF'
}
function changeSocialLinks() {
  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${sociaLinks[social]}`
  }
}
changeSocialLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${sociaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
