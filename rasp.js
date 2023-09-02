function setrasp(pass) {

    if (pass == document.getElementById('hjasdduwyusyh').innerHTML) {

        var rasp = 'Расписание:\n\n';

        rasp += `ПН\n`;
        rasp += `1| информатика(2 группа)/англю.яз(1 группа) 2|география 3|физ-ра 4|русс.яз 5|биалогия \n`;

        rasp += `ВТ\n`;
        rasp += `1| Что-то; 2| Что-то; 3| Что-то\n`;

        rasp += `СР\n`;
        rasp += `1| Что-то; 2| Что-то; 3| Что-то\n`;

        rasp += `ЧТ\n`;
        rasp += `1| Что-то; 2| Что-то; 3| Что-то\n`;
        
        rasp += `ПТ\n`;
        rasp += `1| Что-то; 2| Что-то; 3| Что-то\n`;

        return rasp;

    }

    else {

        return false;

    }
}
