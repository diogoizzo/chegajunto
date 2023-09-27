import React from 'react';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

const exportToExcel = (excelData: any, fileName: string) => {
   const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8';
   const ws = XLSX.utils.json_to_sheet(excelData);
   ws['!cols'] = new Array(20).fill({ wch: 30 });
   const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
   const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
   const data = new Blob([excelBuffer], { type: fileType });
   FileSaver.saveAs(data, fileName);
};

export default exportToExcel;
