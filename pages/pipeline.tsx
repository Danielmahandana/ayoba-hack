// pages/pipeline.tsx
import SalesPipeline from '../components/SalesPipeline';
import Layout from '../components/Layout';

const PipelinePage: React.FC = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6 text-primary-dark">
        Sales Pipeline
      </h2>
      <SalesPipeline />
    </Layout>
  );
};

export default PipelinePage;
