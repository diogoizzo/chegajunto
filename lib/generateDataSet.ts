import dayjs from 'dayjs';

export default function generateDataSet(prop: string, data?: Array<any>) {
   let result: Array<any> = [];
   let sum = 0;

   for (let i = 0; i <= parseInt(dayjs().format('D')) - 1; i++) {
      const byDay =
         data?.filter(
            (item: any) => parseInt(dayjs(item[prop]).format('D')) === i + 1
         ).length || 0;
      sum = sum + byDay;
      result[i] = sum;
   }
   return result;
}
