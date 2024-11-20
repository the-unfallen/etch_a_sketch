document.addEventListener('DOMContentLoaded', function() {
    container = document.getElementById('container');
    containerWidth = container.offsetWidth
    console.log(container.offsetWidth);
    const computedStyle = window.getComputedStyle(container);

    // Get the border-width for each side
    const borderTopWidth = parseFloat(computedStyle.borderTopWidth);
    const borderRightWidth = parseFloat(computedStyle.borderRightWidth);
    const borderBottomWidth = parseFloat(computedStyle.borderBottomWidth);
    const borderLeftWidth = parseFloat(computedStyle.borderLeftWidth);
    console.log(borderTopWidth);
    console.log(borderRightWidth);
    console.log(borderBottomWidth);
    console.log(borderLeftWidth);



    function generateGrid(squares) {
        for (let i = 0; i < (squares * squares); i++) {
            const item = document.createElement('div');
            item.className = 'item';
            itemWidth = (containerWidth - borderRightWidth - borderLeftWidth) / squares;
            item.style.width = `${itemWidth}px`;
            item.style.height = `${itemWidth}px`;
            container.appendChild(item);
        }
    }

    generateGrid(16);



    

    function hoverEffect() {
        const all_items = document.querySelectorAll('.item');
        all_items.forEach((thisItem) => {
            let counter = 0;
            thisItem.addEventListener('mouseenter', () => {
                thisItem.style.backgroundColor = `rgba(255, 0, 0, ${0.1 + (counter/10)})`;
                counter++;
                // console.log(counter);
            });
        });
    }

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        getSquares = prompt('Enter Number of preffered squares per side, value between 16 and 100');
        prefferedSquares = parseInt(getSquares);
        if (!prefferedSquares || prefferedSquares < 0 || prefferedSquares < 16 || prefferedSquares > 100) {
            prefferedSquares = 16;
        }
        container.innerHTML = '';
        console.log(prefferedSquares);
        generateGrid(prefferedSquares);
        hoverEffect();
    })

    hoverEffect();
});