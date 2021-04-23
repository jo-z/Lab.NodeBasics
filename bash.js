const pwd=require('./pwd.js')
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    switch (cmd){
    case "pwd":
         pwd(cmd);

    default:
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});