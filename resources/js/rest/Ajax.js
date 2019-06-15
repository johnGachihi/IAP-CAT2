export function postData(url, data) {
    return $.ajax(url, {
        method: 'post',
        data: data,
        dataType: 'json',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });
}

export function getData(url, data) {
    return $.ajax(url, {
        method: 'get',
        data: data,
        dataType: 'json',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    })
}