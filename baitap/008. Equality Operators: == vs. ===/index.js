const numNeighbours = Number(
  prompt('Quốc gia của bạn có bao nhiêu nước láng giềng?'),
);

if (numNeighbours === 1) {
  console.log('Chỉ có 1 nước là láng giềng');
} else if (numNeighbours > 1) {
  console.log('Có nhiều hơn 1 nước là láng giềng');
} else {
  console.log('Không có nước láng giềng');
}
