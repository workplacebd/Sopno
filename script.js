document.querySelectorAll('.footer-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetUrl = this.href;

        // লোডিং শো করুন
        document.querySelector('.loading-overlay');

        // 2 সেকেন্ড পর রিডাইরেক্ট
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 0.5000);
    });
});


function clearStorage() {
    if (confirm('আপনি কি নিশ্চিত?')) {
        localStorage.clear();
        alert('ক্লিয়ার করা হয়েছে!');
        location.reload();
    }
}

 //     <button onclick="clearStorage()">লোকাল স্টোরেজ ক্লিয়ার করুন</button>