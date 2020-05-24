/* jQuery(function($) {
    $(document).ready(function() {
        loadJSONtipo('tipoMasa');
        function loadJSONtipo(id) {
            var htmlDrop = '';
            $.getJSON('https://raw.githubusercontent.com/rinobits/testn001JSON/master/tipoMasa.json', function(data) {
                htmlDrop += '<option value="">Tipo de Masa</option>';
                $.each(data, function(key, value) {
                    if (id == 'tipoMasa') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
        // sabor masa
        loadJSONsabor('saborMasa');

        function loadJSONsabor(id) {
            var htmlDrop = '';
            $.getJSON('https://raw.githubusercontent.com/rinobits/testn001JSON/master/saborMasa.json', function(data) {
                htmlDrop += '<option value="">Sabor de Masa</option>';
                $.each(data, function(key, value) {
                    if (id == 'saborMasa') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
        // cobertura
        loadJSONcobertura('cobertura');

        function loadJSONcobertura(id) {
            var htmlDrop = '';
            $.getJSON('https://raw.githubusercontent.com/rinobits/testn001JSON/master/cobertura.json', function(data) {
                htmlDrop += '<option value="">Cobertura</option>';
                $.each(data, function(key, value) {
                    if (id == 'cobertura') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
        // tamaño
        loadJSONtamano('tamano');

        function loadJSONtamano(id) {
            var htmlDrop = '';
            $.getJSON('https://raw.githubusercontent.com/rinobits/testn001JSON/master/tamano.json', function(data) {
                htmlDrop += '<option value="">Tamaño</option>'; 
                $.each(data, function(key, value) {
                    if (id == 'tamano') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
        // hora
        loadJSONhora('horaDrop');

        function loadJSONhora(id) {
            var htmlDrop = '';
            $.getJSON('https://raw.githubusercontent.com/rinobits/testn001JSON/master/hora.json', function(data) {
                $.each(data, function(key, value) {
                    if (id == 'horaDrop') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
    });
});
 */