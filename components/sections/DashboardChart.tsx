import React from 'react';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import IPatient from '../../interfaces/IPatient';
import generateDataSet from '../../lib/generateDataSet';
import IConsultation from '../../interfaces/IConsultation';
import IDocument from '../../interfaces/IDocument';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

interface DashboardProps {
   patientsCreatedThisMonth?: IPatient[];
   patientsArchivedThisMonth?: IPatient[];
   consultationsThisMonth?: IConsultation[];
   absentsThisMonth?: IConsultation[];
   newDocumentsThisMonth?: IDocument[];
}

export default function DashboardChart({
   patientsCreatedThisMonth,
   patientsArchivedThisMonth,
   consultationsThisMonth,
   absentsThisMonth,
   newDocumentsThisMonth
}: DashboardProps) {
   const options = {
      responsive: true,
      maintainAspectRatio: false,
      color: '#9fA8BC',
      plugins: {
         legend: {
            position: 'top' as const,
            labels: {
               font: {
                  size: window
                     ? (function () {
                          if (window.innerWidth <= 480) {
                             return 8; // tamanho da fonte para telas pequenas (mobile)
                          } else {
                             return 12; // tamanho da fonte para telas maiores
                          }
                       })()
                     : 12
               }
            }
         }
      },
      scales: {
         x: {
            grid: {
               color: '#292D3D'
            },
            ticks: {
               stepSize: 50,
               color: '#4B556C'
            }
         },
         y: {
            grid: {
               color: '#323948'
            },
            ticks: {
               color: '#4B556C'
            }
         }
      }
   };

   const labels = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31
   ];

   const patientsCreatedThisMonthData = generateDataSet(
      'createdAt',
      patientsCreatedThisMonth
   );

   const patientsArchivedThisMonthData = generateDataSet(
      'updatedAt',
      patientsArchivedThisMonth
   );
   const consultationsThisMonthData = generateDataSet(
      'createdAt',
      consultationsThisMonth
   );

   const absentsThisMonthData = generateDataSet('createdAt', absentsThisMonth);
   const newDocumentsThisMonthData = generateDataSet(
      'createdAt',
      newDocumentsThisMonth
   );

   const data = {
      labels,
      datasets: [
         {
            label: 'Novos Pacientes',
            data: patientsCreatedThisMonthData,
            borderColor: '#ca8a04',
            backgroundColor: '#eab308'
         },
         {
            label: 'Pacientes Arquivados',
            data: patientsArchivedThisMonthData,
            borderColor: '#7c3aed',
            backgroundColor: '#8b5cf6'
         },
         {
            label: 'Atendimentos',
            data: consultationsThisMonthData,
            borderColor: '#4f46e5',
            backgroundColor: '#6366f1'
         },
         {
            label: 'Ausências',
            data: absentsThisMonthData,
            borderColor: '#e11d48',
            backgroundColor: '#f43f5e'
         },
         {
            label: 'Novos Documentos',
            data: newDocumentsThisMonthData,
            borderColor: '#0891b2',
            backgroundColor: '#06b6d4'
         }
      ]
   };
   return (
      <div className="px-8 pt-4 h-[250px] md:h-[350px] lg:h-[500px] w-full  ">
         <Line className=" mx-auto" options={options} data={data} />
      </div>
   );
}
