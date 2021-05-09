import React from 'react';
import CardItemInfo from '../../components/admin/CardItemInfo';
import AdminLayout from '../../components/adminLayout/AdminLayout';
import Test from '../../components/chart/Test';

const Dashboard = () => {
  return (
    <AdminLayout>
      <h1 className='text-lg'>Admin</h1>
      <div className='grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4'>
        <CardItemInfo
          title='Total utilisateurs'
          count='1500'
          icone='fas fa-users'
        />
        <CardItemInfo title='Total commande' count='60' />
        <CardItemInfo title='Total livré' count='45' />
        <CardItemInfo title='Revenu total' count='150000' />
      </div>
      <div className='mt-2'>
        <Test />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
