export const overlayVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
}

export const buttonsVariants = {
  hidden: {
    opacity: 0,
    y: -100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  },
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)'
  }
}

export const boxVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    }
  }
}


export const studyCase = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1.2,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  notHover: {
    opacity: 0.5
  }
}

export const slideAnimation = {
  variants: {
    full: {
      // backgroundColor: '#663399'
    },
    partial: {
      // backgroundColor: '#808080'
    }
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1, once: true }
}