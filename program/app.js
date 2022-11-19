let counter = 0

$('button').on('click', () => {
    let innerHtml = $('input').val()
    let h1Value = $('<h1>')
    $.post('/postUrl', { innerHtml }).done(function (data, textStatus, status) {
        console.log(typeof data)
        if (data.shortened) { shortEndUrlFrontEnd(data.shortened, h1Value) }
        else {
            let string = data.replaceAll('"', '')
            if(!$('#'+`${string}`).html()){
                shortEndUrlFrontEnd(string, h1Value)
            }
            
        }
    }).fail(function (status) {
        alert('Input box is empty, please add a URL')
    })
})




function shortEndUrlFrontEnd(testDiplsayText,h1Value) {
    counter += 1
    let h1 = $('<h1>')
    h1.addClass(`item${counter}`)
    h1.attr('id', `${testDiplsayText}`)
    $('body').append(h1)
   
    $(`.item${counter}`).text(`This is your shortened URL = http://localhost:8943/shortUrl/${testDiplsayText}`)
}





