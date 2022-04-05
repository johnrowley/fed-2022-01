let movieListing = []

$(function () {
    initJquery()
});

function initJquery() {

    SetupMovieLoader()
}

function SetupMovieLoader() {

    $('#messagePanel').hide()

    $('#table2').hide();

    $('#btnLoadMovies').on('click', function () {

      //  const url = './data/movies.json';
        const url = 'https://college-movies.herokuapp.com/';

        $.getJSON(url, function (jsondata) {

            // RenderMovieData(jsondata);
            RenderMovieDataAsTable(jsondata)
        })




    })


}

function RenderMovieDataAsTable(jsonData) {

    movieListing = jsonData;
    htmlString = [];
  
    for (const movie of movieListing) {

        const { title, year, director, id, cast, ...rest } = movie;
        htmlString.push("<tr>")

        const btnDetails = `<button class="btn btn-success" onclick="renderMovieDetail(${id})">Details</button>`;
        htmlString.push(`<td>${title}</td><td>${year}</td><td>${btnDetails}</td>`)

        htmlString.push("<tr>")
    }
    $('tbody#movieBody').append(htmlString.join(" "));
}

function renderMovieDetail(movieId) {
    movieDetail =movieListing.find(x => x.id == movieId);

    const { title, year, director, id, cast, ...rest } = movieDetail;
    htmlString = [];
    htmlString.push("<tr>")
    htmlString.push(`<td>${title}</td><td>${year}</td><td>${director}</td>`);
    htmlString.push('</tr>')

    $('tbody#movieDetailBody').html(htmlString.join(" "));

    console.log(`rendering detail for movie ${movieId}`) 

    $('#table2').show();
}


function RenderMovieData(movieListing) {

    console.log({ movieListing });
    htmlString = [];
    htmlString.push("<ol>");
    for (const movie of movieListing) {

        // const title = movie.title;
        // const year = movie.year;
        // const director = movie.director;

        // Object destructuring
        const { title, year, director, id, cast, ...rest } = movie;

        htmlString.push(`<li>${title} : ${year}`);
        htmlString.push('<ol>')
        for (const castMember of cast.split(',')) {

            htmlString.push(`<li>${castMember}</li>`);
        }

        htmlString.push('</ol>')
        htmlString.push('</li>')

    }
    htmlString.push("</ol>");

    WriteToMessagePanel(htmlString.join(" "))
    $('#messagePanel').show()
}



function WriteToMessagePanel(msg) {

    $('#messagePanel').html(msg)
}
