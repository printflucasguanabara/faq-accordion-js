let accordionHeader = document.querySelectorAll('.accordion-header')

accordionHeader.forEach(question => {
    question.addEventListener('click', () => {

        const active = document.querySelector('.accordion-header.active')
        if (active && active !== question) {
            active.classList.toggle('active')
            active.nextElementSibling.style.maxHeight = 0
        }

        question.classList.toggle('active')
        const answer = question.nextElementSibling
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px"
        }
        else {
            answer.style.maxHeight = 0
        }
    })
})

window.onclick = (e) => {
    if (!e.target.matches('.accordion-header') && !e.target.matches('.answer')) {
        accordionHeader.forEach(question => {
            question.classList.remove('active')

            const answer = question.nextElementSibling
            answer.style.maxHeight = 0
        })
    }
}


/* --ALTERNATIVO--

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const answer = item.querySelector('.accordion-answer');

        header.addEventListener('click', () => {
            toggleAccordionItem(item);
        });

        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordionItem(item);
            }
        });
    });

    function toggleAccordionItem(item) {
        const isActive = item.classList.contains('active');
        closeAllItems();
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.accordion-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }

    function closeAllItems() {
        accordionItems.forEach(item => {
            item.classList.remove('active');
            const answer = item.querySelector('.accordion-answer');
            answer.style.maxHeight = null;
        });
    }

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.accordion-item')) {
            closeAllItems();
        }
    });
});


*/


/*
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const answer = item.querySelector('.accordion-answer');

        header.addEventListener('click', () => {
            toggleAccordionItem(item);
        });

        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordionItem(item);
            }
        });

        header.addEventListener('focus', () => {
            item.classList.add('focused');
        });

        header.addEventListener('blur', () => {
            item.classList.remove('focused');
        });
    });

    function toggleAccordionItem(item) {
        const isActive = item.classList.contains('active');
        closeAllItems();
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.accordion-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }

    function closeAllItems() {
        accordionItems.forEach(item => {
            item.classList.remove('active');
            item.classList.remove('focused');
            const answer = item.querySelector('.accordion-answer');
            answer.style.maxHeight = null;
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllItems();
        }
    });

    window.addEventListener('resize', () => {
        closeAllItems();
    });
});

*/