// Toán tử Logic || &&

let rich = true;
let top1 = true;

if (rich && top1) {
  console.log('Vừa giàu vừa top 1 server game');
}

top1 = false;
if (rich && top1) {
  console.log('Vừa giàu vừa top 1 server game');
} else {
  console.log('Sai! người này có thể không giàu hoặc không top 1 server');
}

if (rich || top1) {
  console.log('Có thể giàu hoặc là top 1 server game');
} else {
  console.log('Sai! người này có thể không giàu hoặc không top 1 server');
}

if (rich && !top1) {
  console.log('ok');
} else {
  console.log('sai');
}
