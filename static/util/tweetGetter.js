import $ from 'jquery'

const tweetGetter = (keywords, callback) => {
    $.ajax({
        contentType: 'application/json',
        data: JSON.stringify(keywords),
        dataType: 'json',
        success: callback,
        error: function(){
            alert("ERROR")
        },
        processData: false,
        type: 'POST',
        url: '/search'
    })
}

export default tweetGetter