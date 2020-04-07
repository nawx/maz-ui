class Autogrow extends HTMLTextAreaElement {
  constructor () {
    super()
    console.log('test')
  }

  connectedCallback () {
    console.log('test')
    this.addEventListener('focus', this.onFocus)
  }

  disconnectedCallback () {

  }

  onFocus = () => {
    this.style.height = `${this.scroll.height}px`
  }
}

customElements.define('textarea-autogrow', Autogrow, { extends: 'textarea' })
