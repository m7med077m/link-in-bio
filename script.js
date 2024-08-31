document.addEventListener('DOMContentLoaded', function() {
    const links = [
        { url: "https://www.instagram.com/mohamed_abo_elkhier7/", name: "Instagram", icon: "fab fa-instagram", class: "instagram" },
        { url: "https://x.com/M7MED_1573", name: "Twitter", icon: "fab fa-twitter", class: "twitter" },
        { url: "https://www.facebook.com/mohamed.abouelkhier77", name: "Facebook", icon: "fab fa-facebook-f", class: "facebook" },
        { url: "https://t.me/M7MED1573", name: "Telegram", icon: "fab fa-telegram-plane", class: "telegram" },
        { url: "https://www.snapchat.com/add/m7medaboelkhier?share_id=YQI8QEE2d1U&locale=en-EG", name: "Snapchat", icon: "fab fa-snapchat-ghost", class: "snapchat" },
        { url: "https://discord.com/invite/FpeekWZkjJ", name: "Discord", icon: "fab fa-discord", class: "discord" },
        { url: "https://curiouscat.live/M7MED1573", name: "CuriousCat", icon: "fas fa-cat", class: "curiouscat" }
    ];

    const container = document.getElementById('links-container');

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = `link ${link.class} light`;

        const icon = document.createElement('i');
        icon.className = link.icon;

        a.appendChild(icon);
        a.appendChild(document.createTextNode(link.name));
        container.appendChild(a);
    });

    const toggleButton = document.getElementById('dark-mode-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark');
        body.classList.toggle('light');

        const isDarkMode = body.classList.contains('dark');
        toggleIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';

        // Update link classes
        const linkElements = document.querySelectorAll('.link');
        linkElements.forEach(link => {
            link.classList.toggle('dark', isDarkMode);
            link.classList.toggle('light', !isDarkMode);
        });
    });
});
