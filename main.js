document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const spans = menuToggle.querySelectorAll("span");

    // Alterna o menu ao clicar
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        // Efeito do botão hambúrguer
        spans[0].style.transform = navLinks.classList.contains("open")
            ? "rotate(45deg) translateY(10px)"
            : "rotate(0)";
        spans[1].style.opacity = navLinks.classList.contains("open") ? "0" : "1";
        spans[2].style.transform = navLinks.classList.contains("open")
            ? "rotate(-45deg) translateY(-10px)"
            : "rotate(0)";
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            spans[0].style.transform = "rotate(0)";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "rotate(0)";
        });
    });
});


// Primeira Section
// Animação de entrada ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");

    // Efeito pulsar no botão
    setInterval(() => {
        ctaButton.classList.toggle("pulse");
    }, 1500);

    // Adiciona animação "pulse"
    ctaButton.addEventListener("mouseover", () => {
        ctaButton.classList.remove("pulse");
    });

    ctaButton.addEventListener("mouseout", () => {
        ctaButton.classList.add("pulse");
    });
});









// segunda section
// Função para verificar quando a seção está visível
document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.image-wrapper img');

    // Adiciona um evento de rolagem para criar o efeito parallax
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const imageTop = image.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;

        // Calcula o deslocamento para o efeito parallax
        if (scrollPosition > imageTop - windowHeight && scrollPosition < imageTop + image.offsetHeight) {
            const offset = (scrollPosition - (imageTop - windowHeight)) / 10;
            image.style.transform = `scale(1.1) translateY(${offset}px)`;
        }
    });

    // Adiciona suavidade ao passar o mouse
    image.addEventListener('mouseenter', () => {
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transition = 'transform 0.5s ease';
    });
});







// Terceira SEction
// Seleciona a seção e os itens
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.unidades ul li');

    // Detecta a rolagem e aplica a animação
    const handleScroll = () => {
        listItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.8) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transitionDelay = `${index * 0.2}s`; // Delay entre itens
            }
        });
    };

    // Aplica a animação na rolagem
    window.addEventListener('scroll', handleScroll);

    // Executa no carregamento inicial
    handleScroll();
});











// Quarta Section


document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.gallery');
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const itemWidth = galleryItems[0].offsetWidth + 30; // Largura do item + margem
    let currentIndex = 0;

    // Clona os primeiros e últimos itens para efeito de loop infinito
    const firstClone = galleryItems[0].cloneNode(true);
    const lastClone = galleryItems[galleryItems.length - 1].cloneNode(true);
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, galleryItems[0]);

    // Atualiza a lista de itens após a clonagem
    const updatedItems = document.querySelectorAll('.gallery-item');
    carousel.style.transform = `translateX(-${itemWidth}px)`;

    let isTransitioning = false;

    const moveToIndex = (index) => {
        if (isTransitioning) return;
        isTransitioning = true;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${(index + 1) * itemWidth}px)`;
        currentIndex = index;

        carousel.addEventListener('transitionend', () => {
            isTransitioning = false;
            if (currentIndex < 0) {
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(-${(galleryItems.length) * itemWidth}px)`;
                currentIndex = galleryItems.length - 1;
            }
            if (currentIndex >= galleryItems.length) {
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(-${itemWidth}px)`;
                currentIndex = 0;
            }
        }, { once: true });
    };

    leftBtn.addEventListener('click', () => {
        moveToIndex(currentIndex - 1);
    });

    rightBtn.addEventListener('click', () => {
        moveToIndex(currentIndex + 1);
    });

    // Opcional: Autoplay
    let autoplay = true;
    let autoplayInterval = setInterval(() => {
        if (autoplay) {
            moveToIndex(currentIndex + 1);
        }
    }, 5000); // 5 segundos

    // Pausar autoplay ao interagir
    carousel.addEventListener('mouseenter', () => {
        autoplay = false;
    });

    carousel.addEventListener('mouseleave', () => {
        autoplay = true;
    });

    // Responsividade: Atualizar itemWidth ao redimensionar a janela
    window.addEventListener('resize', () => {
        const newItemWidth = galleryItems[0].offsetWidth + 30;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${(currentIndex + 1) * newItemWidth}px)`;
    });
});






















// ultima section 
// Animação de fade-in para a tabela de preços

document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.precos tbody tr');

    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.boxShadow = '0 5px 15px rgba(0, 123, 255, 0.5)';
            row.style.transition = 'box-shadow 0.3s ease';
        });

        row.addEventListener('mouseleave', () => {
            row.style.boxShadow = 'none';
        });
    });
});













// localização e footer

document.addEventListener('DOMContentLoaded', () => {
    // Animação suave para os links do footer
    const footerLinks = document.querySelectorAll('.footer a');

    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#00d1ff';
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'color 0.3s ease, transform 0.3s ease';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#007bff';
            link.style.transform = 'scale(1)';
        });
    });

    // Efeito pulsante no mapa ao passar o mouse
    const map = document.querySelector('.map-container iframe');

    map.addEventListener('mouseenter', () => {
        map.style.boxShadow = '0 10px 20px rgba(0, 123, 255, 0.5)';
        map.style.transition = 'box-shadow 0.3s ease';
    });

    map.addEventListener('mouseleave', () => {
        map.style.boxShadow = '0 5px 15px rgba(0, 123, 255, 0.3)';
    });
});
















// fluidez da descida 
// Scroll Suave para os Links da Navegação
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajusta a altura para compensar o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});
