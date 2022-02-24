module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
      return []
    } else 
	{
        return matrix.map((el, index) => {
            return index % 2 === 0 ? el : el.reverse()
     }).flat();
    }
  }
