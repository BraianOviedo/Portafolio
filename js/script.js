window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Go up to click the button
document.getElementById("scrollTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};