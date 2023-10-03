const fs = require('fs-extra');
fs.mkdirsSync (`./Folder4.1`);
fs.writeFileSync(`./Folder4.1/file1.txt`,`Hello`);
fs.mkdirsSync (`./Folder4.2`);
fs.moveSync (`./Folder4.1/file1.txt`,`./Folder4.2/file1.txt`);
fs.mkdirsSync (`./Folder4.3`);
fs.copySync (`./Folder4.2/file1.txt`,`./Folder4.3/file1.txt`);
fs.removeSync (`./Folder4.2/file1.txt`);
fs.removeSync (`./Folder4.3/file1.txt`);
fs.removeSync (`./Folder4.1`);
fs.removeSync (`./Folder4.2`);
fs.removeSync (`./Folder4.3`);
