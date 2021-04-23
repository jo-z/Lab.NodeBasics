const pwd=require('./pwd.js')
const ls=require('./ls')
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') pwd();
    else if (cmd === 'ls') ls();
    else if (cmd.slice(0,3) === 'cat') cat(cmd.slice(4))
    else { 
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});