document.getElementById('headerText').addEventListener('click', function() {
    this.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});
