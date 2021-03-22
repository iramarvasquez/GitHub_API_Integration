fetch("https://api.github.com/users/iramarvasquez/repos")
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data.length);
    console.log(data);
    var repo = 0;

    var table = document.getElementById("repoTable");
    var j = 1;
    for (var i = 0; i < data.length; i++) {
      var row = table.insertRow(j);
      var cell1 = row.insertCell(0);
      cell1.innerHTML = `<a href="${data[repo].html_url}" target="blank_"> ${data[repo].name} </a>`;
      repo++;

    }
  });

