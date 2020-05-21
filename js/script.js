$('#loadMessage2').hide();
$('#siteTitle').hide();
jQuery(document).ready(function($){

    
    $('#card').hide();
   

    function createBookListItem(book){
        var $li = $('<li>');    
        $li.addClass('list-group-item');    
        $li.html(book.title); 
        $li.data('title', book.title);
        $li.data('bookId', book.id);
        $li.data('author', book.author);
        $li.data('year', book.year);
        $li.data('country', book.country);
        return $li;
    }


    var request = axios.get('http://csc225.mockable.io/books');
    request.then(function(response){
        response.data.forEach(function(book){
            $('#loadMessage').hide();
            $('.loadMessageGif').hide();
            $('#siteTitle').show();
            $('#book-list').append(createBookListItem(book));
           
        });


        $('.list-group-item').on('click', function(){
         
            
        

            $('.list-group-item').removeClass('bgCol');
            $(this).addClass('bgCol');
            $('#loadMessage2').show();
            $('#card').show();

            $('.list-group-item').removeClass('bgCol');
            var bookId = $(this).data('bookId');
            var $title = $(this).data('title');
            var $author = $(this).data('author');

            $(this).addClass('bgCol');
            $('#bookInfo').html('Loading...');

            var request2 = axios.get('http://csc225.mockable.io/books/' + bookId);
            request2.then(function(response){

                    

                    var year = response.data.year;
                    var pages = response.data.pages;
                    var country = response.data.country;
                    var language = response.data.language;

                    console.log(response.data.cover);
                    console.log(response.data.author);
                    console.log(response.data.title);
                    console.log(response.data.year);
                    console.log(response.data.pages);
                    console.log(response.data.country);
                    
                    var $img = $('<img>').attr('src', response.data.cover).attr('alt', response.data.title);
                   
                    $('#loadMessage2').hide();
                    $('#bookImg').html($img);
                    $('#bookTitle').html($title);
                    $('#bookAuthor').html('Author: ' + $author);
                    $('#bookYear').html('Year: ' + year);
                    $('#bookPages').html('Pages: ' + pages);
                    $('#bookCountry').html('Country: ' + country);
                    $('#bookLanguage').html('Language: ' + language);

                }
            );


            

        });
    });

    console.log('Loaded');


});


