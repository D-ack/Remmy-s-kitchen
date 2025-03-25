document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for menu links
    document.querySelectorAll("a.nav-link").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // WhatsApp Order Button
    document.getElementById("whatsappOrder").addEventListener("click", function() {
        const phoneNumber = "23490XXXXXXX"; // Replace with actual WhatsApp number
        const message = encodeURIComponent("Hello, I want to place an order from Remmy's Kitchen.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    });
});
