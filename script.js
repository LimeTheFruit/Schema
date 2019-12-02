// Event
table.onclick = catchCellInfo;
btnSubmit.onclick = updateTable;

// Variabler
var minTable;
var myRowIndex;
var myCellIndex;
var element;


function catchCellInfo(e)
{
    if (e.target.tagName == "TD"){

        minTable = document.getElementById('table');
        myRowIndex = e.target.parentElement.rowIndex + 1;
        myCellIndex = e.target.cellIndex;
        element = e;
        $('#formContainer').show();
        
    }
}

function updateTable(){

    var text = document.getElementById("text").value;
    var hours = document.getElementById("nr").value;

    for(var i = myRowIndex; i < Number(myRowIndex) + Number(hours-1); i++){
        var a = document.getElementById(i.toString());
        a.deleteCell(myCellIndex);
    }

    // e.target.style.backgroundColor = color;
    element.target.rowSpan = hours;
    element.target.textContent = text;
    
    $('#formContainer').hide();
}
