let counter = 0

$('button').on('click', () => {
    let innerHtml = $('input').val()
    $.post('/postUrl', { innerHtml }).done(function (data, textStatus, status) {
        console.log(typeof data)
        if (data.shortened) { shortEndUrlFrontEnd(data.shortened) }
        else {
            let string = data.replaceAll('"', '')
            shortEndUrlFrontEnd(string)
        }


    }).fail(function (status) {
        alert('Input box is empty, please add a URL')
    })
})




function shortEndUrlFrontEnd(testDiplsayText) {
    counter += 1
    let h1 = $('<h1>')
    h1.addClass(`item${counter}`)
    $('body').append(h1)
    $(`.item${counter}`).text(`This is your shortened URL = http://localhost:8943/shortUrl/${testDiplsayText}`)
}





