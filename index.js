function submit(){
    document.forms[0].submit();

    var ids = ["forename", "surname", "email", "password", "mobilenumber", "dob"];
    var dropdowns = ["gender"];

    var count = 0;

    for (var i = 0; i < ids.length; i++)
    {
        var field = document.getElementById(ids[i]);
        if (field.value !== '')
            count++;
    }

    for (var j = 0; j < dropdowns.length; j++)
    {
        var select = document.getElementById(dropdowns[j]);
        if (select.value !== "pleaseselect")
            count++;
    }

    window.alert(count);
}