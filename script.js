document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Botão de Curtir (Like)
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        const postId = button.getAttribute('data-post');
        const countSpan = button.querySelector('.like-count');
        
        // Carrega curtidas salvas do LocalStorage
        let currentLikes = localStorage.getItem(`likes_${postId}`) || 0;
        countSpan.textContent = currentLikes;

        button.addEventListener('click', () => {
            currentLikes++;
            localStorage.setItem(`likes_${postId}`, currentLikes);
            countSpan.textContent = currentLikes;
            
            // Efeito visual de clique
            button.style.transform = "scale(1.1)";
            setTimeout(() => button.style.transform = "scale(1)", 150);
        });
    });

    // Lógica do Filtro de Eras
    const filterButtons = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Atualiza o botão ativo na tela
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const eraFilter = btn.getAttribute('data-era');

            posts.forEach(post => {
                if (eraFilter === 'all' || post.getAttribute('data-era') === eraFilter) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});