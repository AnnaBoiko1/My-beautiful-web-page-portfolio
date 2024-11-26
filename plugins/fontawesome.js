import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEnvelope, faL } from '@fortawesome/free-solid-svg-icons' // Іконки Solid
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faCommentDots as fasCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
// Вимикаємо автоматичне додавання стилів (будемо робити це вручну)
config.autoAddCss = false

// Додаємо іконки до бібліотеки
library.add(faUser, faEnvelope, faGithub, faLinkedin,faCommentDots, fasCommentDots)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
