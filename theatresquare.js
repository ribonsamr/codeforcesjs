var input = readline().split(' ');

var n = parseInt(input[0]),
    m = parseInt(input[1]),
    a = parseInt(input[2]);

print(Math.ceil(n/a) * Math.ceil(m/a));
