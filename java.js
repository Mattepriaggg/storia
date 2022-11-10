window.addEventListener('scroll', function() {
    if(window.scrollY > 150) {
        document.body.classList.add('scroll-down')
    } else {
        this.document.body.classList.remove('scroll-down')
    }
} )

