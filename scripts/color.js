document.addEventListener('DOMContentLoaded', () => {
    const ciiGradeTable = document.getElementById('cii-grade-table').querySelector('tbody');
  
    Array.from(ciiGradeTable.rows).forEach(row => {
      Array.from(row.cells).forEach(cell => {
        if (cell.textContent.trim() === 'E') {
          cell.style.backgroundColor = 'red';
          cell.style.color = 'white';  // Ensure text is readable
        } else if (cell.textContent.trim() === 'D') {
          cell.style.backgroundColor = 'orange';
          cell.style.color = 'black';  // Ensure text is readable
        }
      });
    });
  });
  