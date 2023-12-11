$(document).ready(function () {
    $(".acceptButton").click(function () {
        var arrOfCategories = [
            "inspirational",
            "love",
            "dreams",
            "happiness",
            "hope",
            "success",
        ];

        var category = arrOfCategories[Math.floor(Math.random() * 7)];
        $.ajax({
            method: "GET",
            url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
            headers: {
                "X-Api-Key": "hqwwG2FwPbWt8pXKN5WNVA==biGCKAk8BwnoBNuA",
            },
            contentType: "application/json",
            success: function (result) {
                console.log(result);
                $(".cookieHeading").html(result[0]["category"]);
                $(".cookieDescription p").html(result[0]["quote"]);
                $(".cookieDescription a").html(result[0]["author"]);
            },
            error: function ajaxError(jqXHR) {
                console.error("Error: ", jqXHR.responseText);
            },
        });
    });
});
