$(document).ready(function(){
    let contrast = false;
    let language = false;

    function resize(){
        $('#row-banner').css('margin-top', $('#menu').css('height'));
    }

    resize();

    $(window).on('resize', function(){
        resize();
    });

    $('#pt').on('click', function(){
        if(language){
            if(contrast)
                $('#logo').attr('src', 'img/logo_contrast.png');
            else
                $('#logo').attr('src', 'img/logo.jpg');

            if(contrast)
                $('#logo_mini').attr('src', 'img/logo_mini.png');
            else
                $('#logo_mini').attr('src', 'img/logo_mini.png');

            $('#link-inicio').text('Início');
            $('#link-sobre').text('Sobre');
            $('#link-uteis').text('Informações úteis');
            $('#contato').text('Contato');

            $('.sem-about').find('h2').text('Sobre o evento');
            $('.sem-about').find('.sem-text').find('em').text(`
                * Serão conferidos certificados a quem comparecer à quatro das seis sessões de mesas-redondas.
            `);
            $('.sem-about').find('.sem-text').find('span').text(`
                Num momento internacional de grandes incertezas sobre os valores proclamados pelo Iluminismo,
                duramente defendidos e profundamente redefinidos ao longo dos últimos dois séculos, momento lido hoje
                como de choque entre civilizações, a Casa de Rui Barbosa propõe uma reflexão sobre as relações entre produção
                do conhecimento, contextos culturais e a democracia como valor.
            `);

            $('.sem-event').find('h2').text('Programa');
            $('.sem-event').find('#programacao-texto').text(`
                A partir dos conceitos de cultura, ciência e democracia, o programa do Seminário está estruturado em
                três eixos temáticos.  O primeiro se denomina “Cultura, deslocamentos, identidades” e reúne pesquisas sobre
                sujeitos deslocados de seu lugar – tanto espacial quanto social e moral – incluindo questões de alteridade,
                identidade e resistência, a partir de discursos, práticas e construção da memória. O segundo trata das “Ideias
                em circulação”, com apresentações sobre o livro, a imprensa e outras mídias, e a recepção, apropriação, transformação
                e consagração das ideias. Por fim, há o eixo “Gestão e democracia”, que se volta para políticas culturais,
                administração pública, gestão de instituições culturais, preservação e informação.
            `);
            $('.day1').text('Eixo temático: Cultura, deslocamentos, identidades.');
            $('.day2').text('Eixo temático: Ideias em circulação.');
            $('.day3').text('Eixo temático: Cultura, deslocamentos, identidades.');

            $('.sem-util').find('h2').text('Informações úteis');
            $('.sem-util').find('.sem-text').text(`
                Por meio da navegação no mapa podem ser encontradas informações sobre a localização da
                Fundação Casa de Rui Barbosa, formas de chegar ao seminário, principais restaurantes e serviços nas
                imediações da Fundação.
            `);


            language = false;
        }
    });

    $('#en').on('click', function(){
        if(!language){
            if(contrast)
                $('#logo').attr('src', 'img/logo_contrast_en.png');
            else
                $('#logo').attr('src', 'img/logo_en.png');

            if(contrast)
                $('#logo_mini').attr('src', 'img/logo_mini_contrast_en.png');
            else
                $('#logo_mini').attr('src', 'img/logo_mini_en.png');

            $('#link-inicio').text('Home');
            $('#link-sobre').text('About');
            $('#link-uteis').text('Information');
            $('#contato').text('Contact');

            $('.sem-about').find('h2').text('About the Seminar');
            $('.sem-about').find('.sem-text').find('em').text(`
                * Certificates will be granted to those who attend four of the panel discussion.
            `);
            $('.sem-about').find('.sem-text').find('span').text(`
                In this international context of deep uncertainty about the values proclaimed by the Enlightenment, 
                arduously defended and deeply redefined over the last two centuries and often read today as a clash of 
                civilizations, the Casa de Rui Barbosa Foundation proposes a reflection on the relations between the production 
                of knowledge, cultural differences and democracy as a value in itself. 
            `);

            $('.sem-event').find('h2').text('Program');
            $('.sem-event').find('#programacao-texto').text(`
                Based on notions of culture, science and democracy, the Seminar´s program is structured in three parts. 
                Part One, entitled "Culture, Displacement, Identities," embraces research on individuals or groups who were/are 
                displaced from their geographical, social or moral space. It includes issues such as alterity, identity and resistance, 
                arising out of discourses, practices and memory building. Part Two deals with "Ideas in Movement," and includes studies 
                on the circulation of books and on the press and other media, as well as on the reception, appropriation, transformation 
                and consecration of ideas. Part Three, entitled "Management and Democracy," focuses on cultural policies, public 
                administration, management of cultural institutions, preservation and information.
            `);
            $('.day1').text('Part 1: Culture, Displacement, Identities');
            $('.day2').text('Part 2: Ideas in Movement');
            $('.day3').text('Part 3: Management and Democracy');

            $('.sem-util').find('h2').text('Key Information');
            $('.sem-util').find('.sem-text').text(`
                On the map you can find the location of the Casa de Rui Barbosa Foundation, how you can get to it, as well as 
                the main restaurants and services in the neighborhood.
            `);

            language = true;
        }
    });

    $('#contrast').on('click', function(){
       if(!contrast){
           $('link[href="css/main.css"]').attr('href', 'css/main_contrast.css');
           $('#facebook').attr('src', 'img/facebook_contrast.png');
           $('#twitter').attr('src', 'img/twitter_contrast.png');
           $('#instagram').attr('src', 'img/instagram_contrast.png');
           $('#youtube').attr('src', 'img/youtube_contrast.png');
           if(language)
               $('#logo').attr('src', 'img/logo_contrast_en.png');
           else
               $('#logo').attr('src', 'img/logo_contrast.png');
           if(language)
               $('#logo_mini').attr('src', 'img/logo_mini_contrast_en.png');
           else
               $('#logo_mini').attr('src', 'img/logo_mini_contrast.png');
           contrast = true;
       }
       else{
           $('link[href="css/main_contrast.css"]').attr('href', 'css/main.css');
           $('#facebook').attr('src', 'img/facebook.png');
           $('#twitter').attr('src', 'img/twitter.png');
           $('#instagram').attr('src', 'img/instagram.png');
           $('#youtube').attr('src', 'img/youtube.png');
           if(language)
               $('#logo').attr('src', 'img/logo_en.png');
           else
               $('#logo').attr('src', 'img/logo.jpg');
           if(language)
               $('#logo_mini').attr('src', 'img/logo_mini_en.png');
           else
               $('#logo_mini').attr('src', 'img/logo_mini.png');
           contrast = false;
       }
    });

    $('#fontUp').on('click', function(){

        var size;

        size = $('.sem-text').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) + 2;
        $('.sem-text').animate({'font-size': size + 'px'});

        size = $('.sem-caption').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) + 2;
        $('.sem-caption').animate({'font-size': size + 'px'});

        size = $('#footer').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) + 2;
        $('#footer').animate({'font-size': size + 'px'});

        size = $('.sem-event-text').find('h3').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) + 2;
        $('.sem-event-text').find('h3').animate({'font-size': size + 'px'});

        size = $('.sem-event-text').find('p').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) + 2;
        $('.sem-event-text').find('p').animate({'font-size': size + 'px'});

        size = $('.sem-event-text-caption').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) + 2;
        $('.sem-event-text-caption').animate({'font-size': size + 'px'});

    });

    $('#fontDown').on('click', function(){

        var size;

        size = $('.sem-text').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) - 2;
        $('.sem-text').animate({'font-size': size + 'px'});

        size = $('.sem-caption').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) - 2;
        $('.sem-caption').animate({'font-size': size + 'px'});

        size = $('#footer').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) - 2;
        $('#footer').animate({'font-size': size + 'px'});

        size = $('.sem-event-text').find('h3').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) - 2;
        $('.sem-event-text').find('h3').animate({'font-size': size + 'px'});

        size = $('.sem-event-text').find('p').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) - 2;
        $('.sem-event-text').find('p').animate({'font-size': size + 'px'});

        size = $('.sem-event-text-caption').css('font-size');
        size = size.replace('px', '');
        size = parseInt(size) - 2;
        $('.sem-event-text-caption').animate({'font-size': size + 'px'});
    });

});