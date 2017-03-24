export default {
  parseAvatarURL: (username) => {
    return `https://api.adorable.io/avatars/50/${username.replace(/\s+/, '_')}.png`
  }
}
