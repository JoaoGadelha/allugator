const fs = require('fs')
let rawTxt;

try {
    rawTxt = fs.readFileSync('employeeDatabase.txt', 'utf8');
} catch (err) {
    console.error(err)
}


let line = [''];
let j = 0;
for (let i = 0; i < rawTxt.length; i++) {
    line[j] = line[j] + rawTxt[i];

    if (rawTxt[i] === '\n' && rawTxt[i + 1] === '\n') {
        j++;
        line[j] = '';
    }
}

let count = 0;
let obj = [];
let date = []
let role = [];
let cpf = [];
let name = [];
let state = [];
let salary = [];
let status = [];
for (let i = 0; i < line.length; i++) {
    count = 0;
    date = []
    role = [];
    cpf = [];
    name = [];
    state = [];
    salary = [];
    status = [];
    for (let j = 0; j < line[i].length; j++) {
        switch (count) {
            case 0:
                if (line[i][j] !== ';' && line[i][j] !== '\n')
                    date.push(line[i][j]);
                break;
            case 1:
                if (line[i][j] !== ';' && line[i][j] !== '\n')
                    role.push(line[i][j]);
                break;
            case 2:
                if (line[i][j] !== ';' && line[i][j] !== '\n')
                    cpf.push(line[i][j]);
                break;
            case 3:
                if (line[i][j] !== ';' && line[i][j] !== '\n')
                    name.push(line[i][j]);
                break;
            case 4:
                if (line[i][j] !== ';' && line[i][j] !== '\n')
                    state.push(line[i][j]);
                break;
            case 5:
                if (line[i][j] !== ';' && line[i][j] !== '\n')
                    salary.push(line[i][j]);
                break;
            case 6:
                if (line[i][j] !== ';' && line[i][j] !== '\n')
                    status.push(line[i][j]);
                break;
        }

        if (line[i][j] === ';') {
            count++;
        }
    }
    obj.push({
        "date": date.join(""),
        "role": role.join(""),
        "CPF": cpf.join(""),
        "name": name.join(""),
        "state": state.join(""),
        "salary": salary.join(""),
        "status": status.join("")
    });
}



exports.objArray = obj;