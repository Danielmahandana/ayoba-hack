// pages/profile.tsx
import CustomerProfile from '../components/CustomerProfile';
import Layout from '../components/Layout';

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6 text-primary-dark">
        Customer Profiles
      </h2>
      <CustomerProfile />
    </Layout>
  );
};

export default ProfilePage;
