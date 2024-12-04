import { buttonVariants } from '../../components/ui/button'

export function Button({ variant = 'default', size = 'default', children, ...props }) {
  const button = document.createElement('button')
  button.className = buttonVariants({ variant, size })
  button.textContent = children
  
  Object.keys(props).forEach(key => {
    button[key] = props[key]
  })

  return button
}

