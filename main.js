window.onload = function () {

    var Table = function (width, height, color1, color2) {
        this.width = width;
        this.height = height;
        this.color1 = color1;
        this.color2 = color2;

        this.drawTable = function () {
            var counter = 0;
            var n = [1, 2, 3, 4, 5, 6, 7, 8];
            var m = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

            var newTable = document.createElement("div");
            newTable.setAttribute("id", 'table');
            document.body.appendChild(newTable); // newTable#table

            for (var i = 0; i < this.width; i++) {

                for (var j = 0; j < this.height; j++) {

                    var newCell = document.createElement("div");
                    newCell.classList.add('cells');
                    newCell.setAttribute("id", ++counter); // newCell#++counter
                    document.getElementById('table').appendChild(newCell);
                    newCell.innerText = n[i] + m[j]; // Text on cells

                    if ((i + j) % 2 == 0) {
                        newCell.style.backgroundColor = this.color1;
                        newCell.style.color = this.color2;
                    } else {
                        newCell.style.backgroundColor = this.color2;
                        newCell.style.color = this.color1;  
                    }
                }
                var br = document.createElement("br");
                document.getElementById('table').appendChild(br);
            }
        }
    }

    var table1 = new Table(8, 8, '#0000cc', '#99cc00'); 
    table1.drawTable();

}