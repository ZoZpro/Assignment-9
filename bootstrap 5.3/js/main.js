
var siteNameInp = document.getElementById('siteNameInp');
var siteUrlInp = document.getElementById('siteUrlInp');

var bookMarkContainer = [];

if (localStorage.getItem('list') != null) {
    bookMarkContainer = JSON.parse(localStorage.getItem('list'))
    displayBookMark();
} else {
    bookMarkContainer = [];
}

function addBookMark() {
    if (isValidURL(siteUrlInp.value) == true) {
        var siteBookMark = {

            siteName: siteNameInp.value,

            siteLink: siteUrlInp.value
        }

        bookMarkContainer.push(siteBookMark);
        console.log(bookMarkContainer);
        localStorage.setItem('list', JSON.stringify(bookMarkContainer))
        displayBookMark();
        clearBookMark()
        duplicatedBookMark();
    } else {
        alert(`Bookmark URL is not Vaild 
Note: Please enter URL with http or https or ftp`)
    }

}

function displayBookMark() {
    var list = ``;
    for (var i = 0; i < bookMarkContainer.length; i++) {

        list += ` <tr>
        <td>${i + 1} </td>
        <td>${bookMarkContainer[i].siteName} </td>          
        <td>
            <a href=${bookMarkContainer[i].siteLink} target="_blank" class="btn btn-outline-warning btn-sm "><i
                    class="fa-solid fa-eye pe-2"></i>Visit</a>
        </td>
        <td>
            <button onclick="deleteBookMark(${i})" class="btn btn-outline-danger btn-sm"><i class="fa-solid fa-trash-can"></i>
                Delete</button>
        </td>
    </tr>`

    }
    document.getElementById('tableList').innerHTML = list;
}


function clearBookMark() {

    siteNameInp.value = "";

    siteUrlInp.value = "";
}

function deleteBookMark(bookMarkIndex) {
    bookMarkContainer.splice(bookMarkIndex, 1);
    localStorage.setItem('list', JSON.stringify(bookMarkContainer));
    displayBookMark()
}

function isValidURL(url) {
    var urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
}

function duplicatedBookMark() {
    if (siteNameInp.value === JSON.stringify(localStorage.getItem('list', 'ziad'))) {
        console.log('this site name is dublicated ');
    } else {
        console.log('New bookmark site added');
    }
}

