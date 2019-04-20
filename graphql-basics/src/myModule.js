const message = 'Some module from myModule.js'
const name = 'Dominique Hallan'
const location = 'Independence, KS'
const getGreeting = (name) => {
  return `Welcome to the course, ${name}!`
}

export { message, getGreeting, name, location as default }
