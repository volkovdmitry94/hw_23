(() => {
    const $widthInput = $('#input_width');
    const $heightInput = $('#input_height');
    const $radiusInput = $('#input_radius');
    const $marginInput = $('#input_margin');
    const $countInput = $('#input_count');
    const $colorInput = $('#input_color');

    const $playground = $('#playground');

    $('#btn_show').on('click',() => {
        $playground.empty();

        for (let i = 0; i < $countInput.val(); i++) {
            const $newElement = $('<div>');
            $newElement.css({
                'width': $widthInput.val() + 'px',
                'height': $heightInput.val() + 'px',
                'border-radius': $radiusInput.val() + 'px',
                'margin-bottom': $marginInput.val() + 'px',
                'background-color': $colorInput.val()
            });
            $playground.append($newElement);
        }
    });

})();
