let counter = 0

$('button').on('click', ()=> {
    let innerHtml = $('input').val()
    $.post('/postUrl', { innerHtml }).done(function(data, textStatus,status ){
        console.log(data)
        if(data.shortened){shortEndUrlFrontEnd(data.shortened)}
        
    }).fail(function(status){
        alert('Input box is empty, please add a URL')
    })
    // .catch( function(xhr, textStatus, errorThrown) {
    //         return alert('Input box is empty!')
    //   })
})


function shortEndUrlFrontEnd(testDiplsayText){
    debugger
    counter += 1
    let h1 = $('<h1>')
    h1.addClass(`item${counter}`)
    $('body').append(h1)
    $(`.item${counter}`).text(`This is your shortened URL = http://localhost:8943/shortUrl/${testDiplsayText}`)
    // 
    // $('.newItem').removeClass()      `item${counter}`
}





