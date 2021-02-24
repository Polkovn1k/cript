const path = require('path');
const fs = require('fs');

/*fs.mkdir(path.join(__dirname, 'new_folder'), (err) => {
    if (err) {
        throw new Error(err)
    }

    console.log('Новая папка создалась!')
});*/



/*fs.writeFile(
    path.join(__dirname, 'new_folder/test.txt'),
    'Test message',
    (err) => {
        if (err) {
            throw new Error(err);
        }

        console.log('Файл был создан!')
    }
);*/

fs.appendFile(
    path.join(__dirname, 'new_folder/test.txt'),
    'Новая строка!',
    (err) => {
        if (err) {
            throw new Error(err);
        }

        console.log('\nФайл был изменен!!!!')
    }
);
